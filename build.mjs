// Builds the site into dist/: the pages in src/pages, wrapped in the shared layout, and the
// guide's Markdown in guide/, rendered with a contents sidebar. `--serve` also serves dist/ on
// http://localhost:4000 for checking it locally.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, cpSync, existsSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { createServer } from 'node:http'
import { marked } from 'marked'

const root = dirname(new URL(import.meta.url).pathname)
const out = join(root, 'dist')
const config = JSON.parse(readFileSync(join(root, 'site.config.json'), 'utf8'))
const layout = readFileSync(join(root, 'src/layout.html'), 'utf8')

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
cpSync(join(root, 'assets'), join(out, 'assets'), { recursive: true })
writeFileSync(join(out, 'CNAME'), config.domain + '\n')
writeFileSync(join(out, '.nojekyll'), '')

// ---- the guide ----

// The chapters, in the order the guide's contents page lists them.
const index = readFileSync(join(root, 'guide/index.md'), 'utf8')
const chapters = [...index.matchAll(/^\d+\. \[([^\]]+)\]\(([\w-]+)\.md\)/gm)].map(m => ({ title: m[1], slug: m[2] }))
const slugs = new Set(chapters.map(c => c.slug))

// Heading ids as GitHub makes them, so the guide's #anchors keep working.
function slugify(text, seen) {
  let id = text.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;|&#\d+;/g, '')
    .replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s/g, '-')
  const n = seen.get(id) ?? 0
  seen.set(id, n + 1)
  return n ? `${id}-${n}` : id
}

function renderGuide(md) {
  const seen = new Map()
  let html = marked.parse(md.replace(/^Next: \[.*$/m, ''), { gfm: true })
  html = html.replace(/<h([23])>(.*?)<\/h\1>/g, (_, level, text) => {
    const id = slugify(text, seen)
    return `<h${level} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${text}</h${level}>`
  })
  // Links between chapters become the site's own addresses; screenshots live in assets.
  html = html.replace(/href="([\w-]+)\.md(#[^"]*)?"/g, (whole, slug, hash = '') =>
    slug === 'index' ? `href="/guide/${hash}"` : slugs.has(slug) ? `href="/guide/${slug}/${hash}"` : whole)
  html = html.replace(/src="screenshots\//g, 'src="/assets/screenshots/')
  html = html.replace(/<a href="(https?:)/g, '<a rel="noopener" href="$1')
  // The contents page's chapter list becomes a grid of cards: the title, and a line about it.
  html = html.replace(/<ol>\n((?:<li><a href="\/guide\/[\w-]+\/">[^<]+<\/a>: .*<\/li>\n)+)<\/ol>/, (_, items) =>
    '<ol class="chapters">\n' + items.replace(/<li><a href="([^"]+)">([^<]+)<\/a>: (.*)<\/li>/g,
      '<li><a href="$1"><b>$2</b><span>$3</span></a></li>') + '</ol>')
  // "> **Tip:** …" quotes are tips.
  html = html.replace(/<blockquote>\s*<p><strong>Tip:<\/strong>/g, '<blockquote class="tip"><p><strong>Tip:</strong>')
  return html
}

function guideNav(current) {
  const items = chapters.map(c =>
    `<li><a href="/guide/${c.slug}/"${c.slug === current ? ' aria-current="page"' : ''}>${c.title}</a></li>`).join('\n')
  return `<nav class="toc" aria-label="Guide">
  <a class="toc-home" href="/guide/"${current === 'index' ? ' aria-current="page"' : ''}>Jetfold Guide</a>
  <ol>${items}</ol>
</nav>`
}

function pager(slug) {
  const i = chapters.findIndex(c => c.slug === slug)
  const prev = i > 0 ? chapters[i - 1] : i === 0 ? { title: 'Contents', slug: '' } : null
  const next = i < 0 ? chapters[0] : chapters[i + 1]
  const link = (c, rel, label) => c
    ? `<a class="${rel}" href="/guide/${c.slug ? c.slug + '/' : ''}"><span>${label}</span>${c.title}</a>` : '<span></span>'
  return `<nav class="pager" aria-label="Chapters">${link(prev, 'prev', 'Previous')}${link(next, 'next', 'Next')}</nav>`
}

for (const file of readdirSync(join(root, 'guide')).filter(f => f.endsWith('.md'))) {
  const slug = file.replace(/\.md$/, '')
  const md = readFileSync(join(root, 'guide', file), 'utf8')
  const title = md.match(/^# (.+)$/m)[1]
  const body = `<div class="wrap guide">
${guideNav(slug)}
<article class="prose">
${renderGuide(md)}
${pager(slug)}
</article>
</div>`
  page(slug === 'index' ? 'guide/index.html' : `guide/${slug}/index.html`, {
    title: slug === 'index' ? 'Guide' : title,
    description: slug === 'index' ? 'How to use Jetfold, chapter by chapter.' : `${title}, from the Jetfold guide.`,
    section: 'guide',
  }, body)
}

// ---- the pages ----

for (const file of readdirSync(join(root, 'src/pages'))) {
  const source = readFileSync(join(root, 'src/pages', file), 'utf8')
  const [, meta, body] = source.match(/^<!--\s*(\{[\s\S]*?\})\s*-->\n([\s\S]*)$/)
  const name = file.replace(/\.html$/, '')
  const path = name === 'index' || name === '404' ? `${name}.html` : `${name}/index.html`
  page(path, JSON.parse(meta), body)
}

// ---- shared ----

function page(path, meta, body) {
  const appStore = config.appStoreURL
    ? `<a class="store" href="${config.appStoreURL}">Download on the Mac App Store</a>`
    : `<span class="store soon">Coming soon to the Mac App Store</span>`
  const values = {
    title: meta.title ? `${meta.title} · Jetfold` : 'Jetfold',
    description: meta.description,
    head: meta.head ?? '',
    content: body,
    appstore: appStore,
    email: config.supportEmail,
    price: config.price,
    themes: readFileSync(join(root, 'data/themes.json'), 'utf8').replace(/</g, '\\u003c'),
    url: `https://${config.domain}/${path.replace(/index\.html$/, '')}`,
    year: String(new Date().getFullYear()),
  }
  for (const s of ['features', 'themes', 'guide', 'support']) values[`current-${s}`] = meta.section === s ? ' aria-current="page"' : ''
  // Fill the layout, then the page's own {{…}} (its body is in the layout by then).
  let html = layout
  for (let pass = 0; pass < 2; pass++) html = html.replace(/\{\{([\w-]+)\}\}/g, (whole, key) => values[key] ?? whole)
  html = sizeImages(html)
  const file = join(out, path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

// Screenshots are taken at 2x: give each <img> its size in points so the page doesn't jump while
// they load, and so small ones aren't blown up past their real size.
function sizeImages(html) {
  return html.replace(/<img ([^>]*?)src="(\/assets\/[^"]+\.png)"([^>]*)>/g, (whole, before, src, after) => {
    if (/\bwidth=/.test(before + after)) return whole
    const png = readFileSync(join(root, src))
    const w = png.readUInt32BE(16), h = png.readUInt32BE(20)
    const lazy = /loading=/.test(before + after) ? '' : ' loading="lazy"'
    return `<img ${before}src="${src}" width="${Math.round(w / 2)}" height="${Math.round(h / 2)}"${lazy}${after}>`
  })
}

console.log(`Built ${chapters.length + 1} guide pages and ${readdirSync(join(root, 'src/pages')).length} pages into dist/`)

if (process.argv.includes('--serve')) {
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' }
  createServer((req, res) => {
    let file = join(out, decodeURIComponent(req.url.split(/[?#]/)[0]))
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
    const found = existsSync(file)
    res.writeHead(found ? 200 : 404, { 'content-type': types[extname(found ? file : '.html')] ?? 'application/octet-stream' })
    res.end(readFileSync(found ? file : join(out, '404.html')))
  }).listen(4000, () => console.log('http://localhost:4000'))
}

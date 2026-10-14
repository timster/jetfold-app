# jetfold.app

The website for Jetfold, a Mac notes app for folders of plain Markdown files: the home page, the
feature tour, the themes page, support, privacy, and the user guide.

## Building

```sh
npm install
npm run dev     # builds into dist/ and serves it on http://localhost:4000
npm run build   # just builds
```

Pushing to `main` publishes the site: `.github/workflows/pages.yml` builds it and deploys it to
GitHub Pages (Settings → Pages → Source: GitHub Actions; custom domain `jetfold.app`).

## What's where

- `src/layout.html`: the header and footer around every page.
- `src/pages/`: the pages. Each starts with a comment holding its title and description as JSON;
  `{{appstore}}`, `{{email}}` and `{{themes}}` are filled in when building.
- `guide/`: the user guide, in Markdown. `index.md` is its contents page, and its numbered list is
  the order of the chapters in the sidebar. Links between chapters (`writing.md#tables`) and
  screenshots (`screenshots/15-table.png`) are written as they would be next to the files.
- `assets/`: the stylesheet, the home page's script, the icon, the jet and the screenshots.
  `SCREENSHOTS.md` lists every screenshot and where it's used.
- `data/themes.json`: the app's themes (a copy of the app's `Editor/src/themes.json`), for the
  themes page. Copy it again when the themes change.
- `site.config.json`: the domain, the support address, and the App Store link. While
  `appStoreURL` is `null` the pages say "Coming soon to the Mac App Store"; set it once the app is
  live (and use Apple's official badge artwork in `page()` in `build.mjs`).

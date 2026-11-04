# Exporting

Jetfold can save any note in five formats, ready to share with people who don't use Jetfold or to take to another app.

| Format | What you get | Shortcut |
|---|---|---|
| **HTML** | A stand-alone web page, images embedded | |
| **PDF** | A paginated document | ⇧⌘E |
| **EPUB** | An e-book for any book reader, images inside | |
| **TextBundle** | The Markdown and images, in one package other Markdown apps open | |
| **Plain Text** | The words, without the Markdown symbols | |

They're all in **File → Export**, and in the command palette as "Export Note as HTML…", "Export Note as EPUB…", and so on.

Choose where to save it, and you're done.

## HTML, PDF, and EPUB

These look like the note does in Jetfold, in a clean light style:

- All your formatting: headings, lists, tasks, quotes, and tables
- **Code blocks with syntax colors**
- **Math**, rendered as real typeset formulas
- **Images**, embedded right in the file

Your editor fonts and sizes from Settings are used. Exports are always light, whatever your appearance and theme.

![Atlas Launch Plan exported as a PDF and open in a PDF viewer: headings, a quote, a table, and a task list](screenshots/39-pdf-export.png)

### PDF details

PDFs use the paper size from your Mac's default printer settings (A4 or US Letter), with ¾-inch margins, and split onto pages automatically.

### EPUB details

Book readers let you change the font and size as usual.

![Atlas Launch Plan exported as EPUB and open in a book reader: a heading, a quote, a list, a table, and tasks across two pages](screenshots/44-epub.png)

## TextBundle

A TextBundle is a single file (`Note.textbundle`) holding the note's Markdown and a copy of every image the note shows. Many Markdown apps open TextBundles directly, which makes it the easiest way to move a note with pictures to another app.

## Plain Text

A `.txt` file with the note as it reads, for pasting into places that don't understand Markdown. The Markdown symbols are removed, bullets become `•`, and images leave a placeholder.

## Canvases

A canvas has its own formats in **File → Export** (and the palette's "Export Canvas as…"):

| Format | What you get | Shortcut |
|---|---|---|
| **PDF** | The whole board on one page, with selectable text | ⇧⌘E |
| **PNG Image** | The board as a picture, for chats and slides | |
| **HTML** | A stand-alone web page of the board, images embedded; long cards scroll | |
| **Markdown** | The cards as a document: see below | |

The PDF, image, and web page show the board as it looks, on white.

The Markdown document lists the cards in reading order, with each group under its own heading. Text cards keep their Markdown, notes become `[[links]]`, and the arrows come last as a list of connections.

Next: [Opening Jetfold from Other Apps](url-scheme.md)

# Images and Attachments

Jetfold shows images right inside your notes, and other files, like a PDF or a spreadsheet, as cards you can open.

![The Garden Redesign note with a garden layout picture shown inline under a heading](screenshots/34-garden-image.png)

## Adding images

Drag images onto a note, or paste one with **⌘V**. Jetfold copies them into your images folder (see below) and links to the copy, so the original isn't touched. An image already inside your notes folder is linked where it is.

### From your iPhone or iPad

Right-click in a note, or on an empty spot on a canvas, and choose **Take Photo**, **Scan Documents**, or **Add Sketch** under your device's name. The result appears right where you clicked.

![The right-click menu in a note, with Take Photo, Scan Documents, and Add Sketch under the iPhone's name](screenshots/62-insert-from-iphone.png)

Your iPhone or iPad needs to be nearby and signed in to the same Apple Account.

### By hand

Write a standard Markdown image. A path starting with `/` is from the top of your notes folder, and paths with spaces go in `< >`:

```markdown
![A description](</.assets/My Screenshot.png>)
```

## Where images are saved

By default, images go in a hidden `.assets` folder at the top of your notes folder, under their own names. To change that, set **Settings → Notes → Image path**, a template where text inside `{curly braces}` is filled in:

| Placeholder | Becomes |
|---|---|
| `{original}` or `{name}` | The image's original file name |
| `{note}` | The title of the note you dropped it on |
| `{uuid}` | A random unique ID |
| any date code, e.g. `{YYYY-MM-DD}` | The current date. Time codes `HH`, `mm`, `ss` work too |

For example, `.assets/{note}/{original}` keeps each note's images in a folder of their own, and `media/{YYYY}/{uuid}` sorts them by year.

## Other files

Drop any other file on a note and it shows as a card with a preview. Click a card to open the file; **⌘-click** shows it in Finder.

![Three attachment cards in a note: an HTML page, a Python script, and a PDF, showing kind, size, and a thumbnail](screenshots/58-attachments.png)

In the file, a card is an ordinary Markdown link on a line by itself, so other Markdown apps see a plain link:

```markdown
[Report.pdf](</.assets/Report.pdf>)
```

## Text in images and PDFs

Jetfold reads the words in your pictures and PDFs, like a whiteboard, a receipt, or a page you scanned from your iPhone, so [Search in Notes](finding.md#search-in-notes-f) finds the notes that show them. It all happens on your Mac.

![Search in Notes with a result found in a picture](screenshots/63-search-image-text.png)

Right-click a picture or PDF and choose **Copy Text from Image** to put the words on the clipboard.

![The right-click menu on a picture in a note, with Copy Text from Image at the top](screenshots/64-copy-text-from-image.png)

## Unused attachments

Deleting a note leaves the images and files behind. **File → Find Unused Attachments…** lists the ones no note uses any more, so you can tidy them up.

![The Unused Attachments sheet listing three images and a PDF with thumbnails, sizes, and dates, two of them ticked](screenshots/59-unused-attachments.png)

Next: [Canvases](canvas.md)

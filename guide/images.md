# Images and Attachments

Jetfold displays images inside your notes. Other files, like PDFs and spreadsheets, appear as cards you can click to open.

![The Garden Redesign note with a garden layout picture shown inline under a heading](screenshots/34-garden-image.png)

## Adding images

To add images, drag them onto a note or paste them with **⌘V**. Jetfold copies them into your images folder (see below) and links to the copy, leaving the original unchanged. If an image is already inside your notes folder, Jetfold links to it where it is.

### From your iPhone or iPad

Right-click in a note, or on an empty spot on a canvas, and choose **Take Photo**, **Scan Documents**, or **Add Sketch** under the name of your iPhone or iPad. The photo, scan, or sketch is inserted where you clicked.

![The right-click menu in a note, with Take Photo, Scan Documents, and Add Sketch under the iPhone's name](screenshots/62-insert-from-iphone.png)

Your iPhone or iPad needs to be nearby and signed in to the same Apple Account as your Mac.

### By hand

You can also write a standard Markdown image link by hand. A path that starts with `/` is relative to the top of your notes folder. Put paths that contain spaces inside `< >`:

```markdown
![A description](</.assets/My Screenshot.png>)
```

## Where images are saved

By default, Jetfold saves images with their original file names in a hidden `.assets` folder at the top of your notes folder. To change the location, set **Settings → Notes → Image path**, a template in which Jetfold fills in placeholders written in `{curly braces}`:

| Placeholder | Becomes |
|---|---|
| `{original}` or `{name}` | The original file name of the image |
| `{note}` | The title of the note you dropped the image on |
| `{uuid}` | A random unique ID |
| any date code, e.g. `{YYYY-MM-DD}` | The current date. The time codes `HH`, `mm`, and `ss` also work |

For example, `.assets/{note}/{original}` saves images in a separate folder for each note, and `media/{YYYY}/{uuid}` saves them in a folder for each year.

## Other files

When you drop any other file on a note, Jetfold adds it as a card with a preview. Click the card to open the file, or **⌘-click** it to show the file in Finder.

![Three attachment cards in a note: an HTML page, a Python script, and a PDF, showing kind, size, and a thumbnail](screenshots/58-attachments.png)

In the Markdown file, a card is an ordinary link on a line by itself, so other Markdown apps display it as a plain link:

```markdown
[Report.pdf](</.assets/Report.pdf>)
```

## Text in images and PDFs

Jetfold recognizes text in your pictures and PDFs, such as a whiteboard photo, a receipt, or a page scanned with your iPhone, so you can find those notes with [Search in Notes](finding.md#search-in-notes-f). Text recognition runs entirely on your Mac.

![Search in Notes with a result found in a picture](screenshots/63-search-image-text.png)

Right-click a picture or PDF and choose **Copy Text from Image** to copy the text to the clipboard.

![The right-click menu on a picture in a note, with Copy Text from Image at the top](screenshots/64-copy-text-from-image.png)

## Unused attachments

When you delete a note, Jetfold doesn't delete the images and files it used. Choose **File → Find Unused Attachments…** to list attachments that none of your notes use, so you can clean them up.

![The Unused Attachments sheet listing three images and a PDF with thumbnails, sizes, and dates, two of them ticked](screenshots/59-unused-attachments.png)

Next: [Canvases](canvas.md)

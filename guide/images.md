# Images and Attachments

Jetfold shows images right inside your notes, and other files (a PDF, some code, a spreadsheet) as cards you can open.

![The Garden Redesign note with a garden layout picture shown inline under a heading](screenshots/34-garden-image.png)

## Adding images

### Drag and drop

Drag image files from Finder (or from most other apps) onto a note. Each image is added on its own line, at the point where you drop it.

- If the image is **already inside your notes folder**, Jetfold links to it where it is.
- Otherwise, Jetfold **copies** it into your images folder (see below) and links to the copy. The original isn't touched.

### Paste

Copy an image (for example with ⌃⇧⌘4 for a screenshot to the clipboard) and paste it into a note with **⌘V**. Jetfold saves it to your images folder and inserts the link at the cursor. Pasted images with generic names are saved as "Pasted image.png".

### From your iPhone or iPad

Control-click in a note (or on an empty spot on a canvas) and choose **Insert from iPhone or iPad**, then **Take Photo**, **Scan Documents** or **Add Sketch**. When you're done on the device, the result appears where you clicked: photos are saved as "Photo.jpg", sketches as "Sketch.png", and scanned pages as one "Scan.pdf", shown as a card. They're saved to your images folder, like pasted images.

![The right-click menu in a note with Insert from iPhone or iPad open, offering Take Photo, Scan Documents and Add Sketch](screenshots/62-insert-from-iphone.png)

Your iPhone or iPad needs to be nearby, signed in to the same Apple Account, with Wi‑Fi and Bluetooth on.

### By hand

Write a standard Markdown image:

```markdown
![A description](</.assets/My Screenshot.png>)
```

- A path starting with `/` is from the top of your notes folder. Other paths are relative to the note.
- Wrap paths that contain spaces in `< >`, as above, or write spaces as `%20`.
- Web images (`https://…`) work too.

When the cursor is on an image's line, the Markdown source appears above the picture so you can edit it.

## Where images are saved

**Settings → Notes → Image path** says where images you drop or paste are saved, as a template like the [daily note path](daily-notes-and-inbox.md#where-daily-notes-go). The default, `.assets/{original}`, keeps each image under its own name in `.assets`. Folders starting with `.` are hidden from Jetfold's sidebar (and from Finder), which keeps them out of the way.

Text inside `{curly braces}` is filled in; everything else is used as written, and `/` separates folders:

| Placeholder | Becomes |
|---|---|
| `{original}` or `{name}` | The image's original file name (without extension) |
| `{note}` | The title of the note you dropped it on |
| `{uuid}` | A random unique ID |
| any date code, e.g. `{YYYY-MM-DD}` | The current date. Time codes `HH`, `mm`, `ss` work too |

For example, `.assets/{note}/{original}` keeps each note's images in a folder of their own, and `media/{YYYY}/{uuid}` sorts them by year under unique names. The extension is added for you. If a name is taken, Jetfold adds " 2", " 3" and so on rather than overwriting anything. Settings shows an example as you type.

## Other files

Drop any other file on a note, or paste one copied in Finder, and Jetfold copies it into the same folder as your images (`.assets` by default), **keeping its own name** ("Report.pdf", or "Report 2.pdf" if that's taken). A file already inside your notes folder is linked where it is.

It goes in the note as an ordinary Markdown link on its own line:

```markdown
[Report.pdf](</.assets/Report.pdf>)
```

and shows as a card: the file's name, what kind of file it is and its size, and a preview of its first page.

![Three attachment cards in a note: an HTML page, a Python script and a PDF, each with its kind, size and a thumbnail](screenshots/58-attachments.png)

- **Click** a card to open the file in its app; **⌘-click** shows it in Finder.
- Put the cursor on the line to edit the link; the card comes back when you move away.
- Any line holding only a link to a file in your notes folder becomes a card, so you can also add one by hand. A link in the middle of a sentence stays a link (**⌘-click** it to open the file).
- Other Markdown apps see a plain link, and exports keep it as one.

## Text in images and PDFs

Jetfold reads the words in your pictures and PDFs (a whiteboard, a receipt, a page you scanned from your iPhone), so [Search in Notes](finding.md#search-in-notes-f) finds the notes that show them.

![Search in Notes with a result found in a picture, its snippet starting with the image's name](screenshots/63-search-image-text.png)

- Right-click a picture or a PDF card and choose **Copy Text from Image** (or **Copy Text from PDF**) to put its words on the clipboard. On a canvas, right-click its card.
- The text is read on your Mac, in the background, and is never written into your notes folder. The first time, a folder full of pictures can take a few minutes; search gets better as it goes. After that only new or changed files are read.
- A PDF's own text is used when it has some; a scanned one is read page by page (the first 30 pages).
- Turn it off in [Settings → Notes → Find text in images and PDFs](settings.md#find-text-in-images-and-pdfs).

![The right-click menu on a picture in a note, with Copy Text from Image at the top](screenshots/64-copy-text-from-image.png)

## Unused attachments

Deleting a note leaves its images and files behind. **File → Find Unused Attachments…** lists the ones no note mentions any more, with a preview, folder, size and date for each. Tick the ones to go (or **Select All**) and choose **Move to Trash**. They go where deleted notes go ([Settings → Notes → Deleted notes](settings.md#deleted-notes)), so you can move any you want back.

![The Unused Attachments sheet listing three images and a PDF with thumbnails, sizes and dates, two of them ticked](screenshots/59-unused-attachments.png)

- It looks in your attachments folder (`.assets`, or wherever your image path puts files). Turn on **Include files elsewhere in the notes folder** to check everywhere; files you keep beside your notes on purpose will show up then, so look before trashing.
- It's careful: a file counts as used if any note (or template) mentions its name anywhere, even outside a link, so it may miss a few but won't offer one that a note still uses.
- Notes, hidden files, and Jetfold's and git's own folders are never listed.

## Supported formats

PNG, JPEG, HEIC, GIF, WebP, SVG, AVIF, TIFF, BMP and ICO show as images; anything else is an attachment. Images and files up to 50 MB can be pasted (dropped files can be any size).

Next: [Canvases](canvas.md)

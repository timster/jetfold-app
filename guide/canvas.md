# Canvases

A canvas is a board for thinking in space: cards of text, your notes, images and files laid out on an endless surface and joined by arrows. Use one to plan a project, map out an argument, collect research or sketch how things connect.

A canvas is a file in your notes folder like any note, ending in `.canvas`. It's written in the open [JSON Canvas](https://jsoncanvas.org) format, so other apps that read the format can open it, and each card is a line of its own, so its history in git reads cleanly.

## Making a canvas

Choose **File → New Canvas**, right-click a folder in the sidebar and choose **New Canvas**, or use **New Canvas** in the command palette (⌘P). The canvas appears in the note list (with a small canvas icon), its name ready to edit there: type a name and press Return.

A canvas fills the editor without a title of its own. To rename it, choose **Note → Rename…** (or **Rename…** when you right-click it in the note list) and type the new name in its row. Canvases are moved, duplicated, pinned, made read-only and moved to the trash just like notes, and they save automatically.

## Adding cards

| To add | Do this |
|---|---|
| A text card | **Double-click** an empty spot, or click the card button in the toolbar at the bottom |
| A note | Drag notes from the note list onto the canvas, or click the note button and pick one in the command palette |
| An image or other file | Drag files from Finder, paste an image (⌘V), or click the picture button and choose files |
| A web link | Paste a web address (⌘V) |
| Text from another app | Paste it, or drag it onto the canvas |

Text cards are written in Markdown and look just like a note: headings, lists, tasks, links, `#tags`, math and diagrams all work. A new card grows as you type; press **Escape** or click outside it when you're done. A new card left empty disappears.

Note cards show the note itself, and you can edit it right there: double-click the card (or select it and press Return) and type. Your changes are saved to the note, like any edit, and the card keeps up with changes made elsewhere. Select a card to scroll through a long note. To open the note in its own right, ⌘-double-click the card or click the open button above it. A read-only note's card opens the note when you double-click it. Image cards show the picture; other files show their name, kind, size and a preview (just the name when the card is small), and open in their own app when you double-click them. Files you add are copied into your attachments folder, as they are for notes (see [Images and Attachments](images.md)).

## Arranging

- **Select** a card by clicking it; ⇧-click or ⌘-click to add more, or drag across empty space to select everything the box touches.
- **Move** cards by dragging them. They snap to a 10-point grid; press ⌘ while dragging to place them freely. Hold ⌥ as you start dragging to move copies instead.
- **Resize** a card by dragging any edge or corner. Images keep their shape unless you hold ⇧.
- **Edit** a text card by double-clicking it (the cursor goes where you clicked), pressing Return, or simply starting to type while it's selected.
- **Group** cards by selecting them and choosing **Group** in the toolbar above them (or the right-click menu). Type a name for the group. Dragging a group moves everything inside it.
- **Color** cards, groups and arrows with the color button above the selection, or from the right-click menu.

## Arrows

Hover over a card to see a dot on each side. Drag from a dot to another card to join them with an arrow; let go on empty space to make a new text card there, already joined.

Click an arrow to select it. Double-click it (or press Return) to give it a label. Drag one of its ends to attach it to a different card. Right-click it to put arrowheads at one end, both ends or neither, to reverse it, or to color it.

## Moving around

| To | Do this |
|---|---|
| Pan | Scroll with two fingers, or hold Space and drag, or drag with the middle mouse button |
| Zoom | Pinch, or hold ⌘ and scroll; or use − and + in the toolbar |
| See everything | **⇧1**, or the fit button in the toolbar |
| Zoom to the selection | **⇧2** |
| Actual size | **⇧0**, or click the zoom percentage |

## Keys on a canvas

| Key | Does |
|---|---|
| ⌫ | Delete the selection |
| ⌘Z, ⇧⌘Z | Undo, redo |
| ⌘C, ⌘X, ⌘V | Copy, cut and paste cards (with the arrows between them) |
| ⌘D | Duplicate the selection |
| ⌘A | Select everything |
| Return | Edit the selected text or note card, rename the selected group, or open the selected file |
| Escape | Stop editing, or clear the selection |
| Arrow keys | Nudge the selection (⇧ for 10 points) |
| Tab, ⇧Tab | Select the next or previous card |

## More from the right-click menu

- **Convert to Note** turns a text card into a note of its own, in the canvas's folder and named after its first line, and puts that note in its place.
- **Bring to Front** and **Send to Back** change which cards are on top.
- **Show in Finder** shows a file card's file.

## Canvases and the rest of Jetfold

- **Search** finds canvases by the text on their cards.
- **Backlinks**: a note on a canvas, or linked from a text card, lists the canvas in its backlinks.
- **Renaming and moving** notes keeps the canvases that show them up to date.
- **Find Unused Attachments** counts images and files on a canvas as used.
- `[[Canvas Name]]` links open the canvas.
- Tasks, dates and tags on canvas cards stay on the canvas: they don't appear in the Tasks and Agenda views or the sidebar's tags.
- **Export** a canvas as a PDF, a PNG image, a web page or Markdown with **File → Export** (see [Exporting](exporting.md#canvases)).

Next: [Git Integration](git.md)

# Folders and Notes

Folders in Jetfold are real folders on your disk, and notes are real files. Changes in Jetfold are made to those files, and changes in Finder appear in Jetfold right away.

## Folders

The sidebar lists your notes folders. Click a folder to see the notes in it, or click the arrow next to a folder to collapse or expand it.

![The sidebar with folders and note counts, a collapsed folder with a dimmed total, dots on folders with uncommitted changes, and the Tags group](screenshots/05-sidebar.png)

Right-click a folder to create a note, canvas, or subfolder in it, or for other options. Drag a folder onto another folder to move it.

Turn note counts on or off with **View → Note Counts**.

> When you rename or move a folder, Jetfold updates the [wikilinks](links.md) that point to notes in it, so your links keep working.

## The note list

The middle column lists the notes in the selected folder or tag. With previews on, you also see a line or two of text from the note.

![The note list with a folder name, sort menu, and New Note button above rows with titles, dates, two-line previews, a pinned note, and git status letters](screenshots/07-note-list.png)

Use the **sort** button above the list to sort by title, date edited, or date created. **View → Note List** shows or hides previews, dates, and [git status](git.md#status-badges).

### Editing several notes at once

Select more than one note to see the notes one after another in the editor. This is handy for reviewing a week of daily notes or comparing two drafts.

![Three daily notes selected in the list and shown one after another in the editor](screenshots/08-stacked.png)

## Working with notes

To rename, pin, duplicate, or otherwise change a note, right-click it, or use the **Note** menu or the **⋯** button at the top of the editor. With several notes selected, the option applies to all of them.

- **Rename** a note by editing the title at the top of the note. Jetfold renames the file to match and updates links to the note.
- **Pin to Top** keeps a note at the top of the list.
- **Make Read-Only** protects a note you don't want to change by accident.
- **Move** notes by dragging them onto a folder in the sidebar, or with **Note → Move to Folder…** (⇧⌘M).

Jetfold saves pins and read-only status in the workspace settings, so your files aren't changed.

## Deleting notes

Deleted notes are moved to the macOS Trash, or to a [trash folder](settings.md#deleted-notes) in your notes folder if you prefer.

## Note windows

Double-click a note to open it in a separate window. This is handy for keeping a reference note or a to-do list beside your other work. **Window → Keep on Top** keeps the window in front of other apps.

![Meeting Notes open in a separate window beside the main window, which shows Atlas Launch Plan](screenshots/10-note-window.png)

Next: [Views and Tags](views-and-tags.md)

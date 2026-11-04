# Organizing Notes

Jetfold's folders are the real folders on your disk, and its notes are the real files. Anything you do in Jetfold (creating, renaming, moving, deleting) happens to those files, and anything you do in Finder shows up in Jetfold straight away.

## Folders

The sidebar shows your notes folder at the top, with every folder inside it underneath. Click a folder to see its notes. Click the disclosure arrow to expand or collapse it; Jetfold remembers which folders are open.

![The sidebar: the notes folder expanded into its folders with note counts, a collapsed folder with a dimmed total, dots on folders with uncommitted changes, and the Tags group below](screenshots/05-sidebar.png)

### Note counts

Folders show how many notes are inside them.

Turn the counts on or off with **View → Note Counts**.

### Working with folders

Right-click a folder to create a note, canvas, or folder inside it, rename it, reveal it in Finder, or move it to the Trash.

**⇧⌘N** (File → New Folder) creates a folder inside the selected one. With the sidebar focused, **⌘⌫** moves the selected folder to the Trash, after asking.

**Moving folders:** drag a folder onto another folder.

Deleted folders go where deleted notes go: the macOS Trash, or a trash folder if you chose one in [Settings → Notes → Deleted notes](settings.md#deleted-notes).

> Renaming or moving a folder updates every [wikilink](links.md) that points into it, so your links keep working.

## Views: Tasks and Agenda

At the top of the sidebar, **Tasks** and **Agenda** gather things from all your notes, with how many there are beside each.

- **Tasks:** every open task (`- [ ] …`), grouped **Overdue**, **Today**, **Upcoming** (by their `@date`, soonest first) and **No Date**.
- **Agenda:** every dated line, grouped **Overdue**, **Today**, **Tomorrow**, **Next 7 days**, and **Later**. An open task's date is a deadline; any other date is an event that drops off once its day is over.

![The Tasks view in the middle column: overdue, today's, and upcoming tasks with their dates and notes, and the selected task's note open in the editor beside it](screenshots/53-tasks-view.png)

Pick a view and its rows fill the middle column. Click a row to open its note at that line; the view stays, so you can work down the list. Click a task's circle, or press **Space**, to tick it off.

Right-click a row to show it in its folder, open it in a new window, reveal it in Finder, or mark a task as done.

Pick a folder or a tag to go back to notes. **Go → Tasks** (⌥⌘L) and **Go → Agenda** (⌥⌘A) jump to a view from anywhere, and clicking a date in a note shows [that day](daily-notes-and-inbox.md#the-calendar).

### Arranging the sidebar

**Drag** the sidebar's sections to reorder them; a line shows where each will land. Don't use something? Turn it off under **View → Sidebar**, or right-click it and choose **Hide**; turned back on, it returns to its usual place. With everything off but your folders, the sidebar is just your notes.

## Your own views

Make views of your own: work tasks, this week's dates, notes whose front matter says `status: active`. Choose **View → Sidebar → New View…**, or right-click a view in the sidebar.

![The view editor: an icon and name, Tasks / Agenda / Notes, tag and folder chips, and a live preview listing the matching tasks with a count](screenshots/60-view-editor.png)

The editor has:

- **An icon and a name.** Click the icon to choose another.
- **What it lists:** tasks, dated lines, or whole notes.
- **Filters** by tag, folder, title, text, or [front matter](writing.md#front-matter-properties) property.
- **A live preview** of what the view will list.

Right-click a view to edit, duplicate, hide, or delete it. To start from Tasks or Agenda, right-click one and choose **Duplicate as New View…**.

### Editing views.json by hand

Views are saved in **`.jetfold/views.json`** in your notes folder, so they sync and live in git with your notes. You can edit the file by hand too: **⌘P → Edit views.json** opens it.

```json
{
  "views": [
    { "name": "Work",      "icon": "briefcase", "show": "tasks",  "tag": "#work" },
    { "name": "This Week", "icon": "calendar",  "show": "agenda", "within": "7 days" },
    { "name": "Reading",   "icon": "book",      "show": "notes",  "tag": ["#book", "#article"], "sort": "created" },
    { "name": "Active",    "icon": "bolt",      "show": "notes",  "folder": "Projects", "property": { "status": "active" } }
  ]
}
```

![The sidebar with Work, This Week, Reading, and Active views under Tasks and Agenda, with icons and counts](screenshots/57-custom-views.png)

**`show`** says what the view lists:

| `show` | Lists | Like |
|---|---|---|
| `tasks` | Tasks, grouped Overdue, Today, Upcoming, and No Date | the Tasks view |
| `agenda` | Dated lines, from overdue to later | the Agenda view |
| `notes` (the default) | Whole notes, as an ordinary note list | a tag's notes |

**Filters** narrow it down. Give any of them; a note or line has to match every filter given, and a filter with a list of values matches any of them (for tags, `allTags` asks for all):

| Filter | Keeps | Example |
|---|---|---|
| `tag` | Lines with the tag (or tasks in a note listing it under `tags:` in its front matter). For notes views, notes using it anywhere. Nested tags count: `#work` includes `#work/client`. | `"tag": "#work"` |
| `folder` | Notes in the folder or the folders inside it | `"folder": ["Projects", "Areas"]` |
| `title` | Notes (or for tasks and dates, the notes they're in) with all the words of one entry in their name | `"title": "self review"` |
| `text` | Lines (or for notes views, notes) with all the words of one entry, in the line or the note's name | `"text": "invoice"` |
| `property` | Notes whose [front matter](writing.md#front-matter-properties) has one of the values, ignoring case | `"property": { "status": ["active", "waiting"] }` |
| `within` | Tasks due, or dates, from now to that far ahead (overdue ones too) | `"within": "2 weeks"` |
| `allTags` | Every tag in `tag` must be there, not just one | `"allTags": true` |
| `done` | Tasks views: ticked tasks too, under **Done** | `"done": true` |
| `sort` | Notes views: `title`, `edited` or `created`, instead of the list's own order | `"sort": "title"` |

- **`icon`** is the name of any SF Symbol (browse them in Apple's free SF Symbols app). Without one, or with a name that doesn't exist, a view gets its type's icon.
- If part of the file can't be used (a misspelt setting, a view without a name), the rest still works, and a **views.json has problems** row in the sidebar says what. Click it for the details.

## Tags in the sidebar

Your [#tags](finding.md#tags) are listed in the sidebar, under your folders, in a **Tags** group. To hide it, turn off **View → Sidebar → Tags**.

![The Tags group in the sidebar, expanded: tags with their note counts, and a nested tag opened under its parent](screenshots/06-tags.png)

- **Click Tags** to list every note that has a tag.
- **Click a tag** to list the notes that use it. Picking a parent tag includes the tags nested under it.
- **Drag notes onto a tag** to tag them.
- **⌘N with a tag selected** creates a note with that tag.
- **Right-click a tag** to rename it in every note, or remove it from all notes.

## The note list

The middle column lists the notes in the selected folder or tag. Each row shows the note's title and, on the right, the date it was last edited. With previews on, a line or two of the note's text sits under the title.

![The note list header (folder name, sort menu, New Note button) and rows with bold titles, dates on the right, two-line previews, a pinned note, and git status letters](screenshots/07-note-list.png)

### Sorting and display

Everything here is in the **View → Note List** section of the View menu:

- **Sort By** sorts by **Title**, **Date Edited**, or **Date Created**, **Ascending** or **Descending**. The default is Date Edited, newest first. The **sort** button above the list has the same choices. The date beside each note is the one the list is sorted by.

- **Previews** shows or hides the text under each title.
- **Dates** shows or hides the dates.
- **Git Status** shows or hides the [git status](git.md#status-badges) indicators.

### Selecting notes

| Action | Result |
|---|---|
| Click | Select one note |
| ⌘-click | Add or remove a note from the selection |
| ⇧-click | Select a range of notes |
| ↑ / ↓ | Move the selection |
| ⇧↑ / ⇧↓ | Extend the selection |

### Editing several notes at once

When you select more than one note, the editor shows **all of them stacked**, one after another, and you can edit any of them.

![Three daily notes selected in the list and shown one after another in the editor](screenshots/08-stacked.png)

This is handy for reviewing a week of daily notes, or comparing two drafts.

## The Note menu

Everything you can do with a note is in the **Note** menu, in the **⋯** menu at the top of the editor, and when you right-click a note in the list: open it in a new window, rename, duplicate, pin, make read-only, copy a link, show history, and more. With several notes selected, the actions apply to all of them.

## Pinning

**Pin to Top** keeps a note at the top of its folder's list, whatever the sort order. Choose **Unpin** to put it back.

Pins are kept in the workspace's settings, so your files don't change.

## Read-only notes

**Make Read-Only** protects a note you don't want to change by accident, such as a finished document or a reference. A read-only note shows a lock in the list and can't be edited until you choose **Make Editable**.

Like pins, this is stored in the workspace's settings; the file itself isn't changed.

## Renaming a note

Click the title at the top of the note (or choose **Note → Rename…**), type a new name, and press **Return** (or click elsewhere). The file on disk is renamed to match.

Renaming a note updates every [wikilink](links.md) that points to it.

## Moving notes

Drag one or more notes from the list onto a folder in the sidebar. If you drag a note that's part of a selection, the whole selection moves.

Hover over a collapsed folder while dragging, and it springs open after a moment so you can drop into a subfolder.

From the keyboard, choose **Note → Move to Folder…** (⇧⌘M), type a few letters of a folder's name, and press **Return**.

Links to moved notes are updated.

## Deleting notes

Choose **Move to Trash**, or select notes in the list and press **⌘⌫**. Notes go to the macOS Trash, so you can restore them with Finder's **Put Back**. To keep them in a trash folder inside your notes folder instead (`.trash`, where you and your sync see them), change [Settings → Notes → Deleted notes](settings.md#deleted-notes). Jetfold doesn't ask for confirmation, because nothing is permanently deleted.

## Note windows

Double-click a note (or choose **Open in New Window**) to open it in a window of its own, with just the title and the text. It's useful for keeping a reference note or a to-do list beside your other work.

![Meeting Notes open in its own window beside the main window, which shows Atlas Launch Plan](screenshots/10-note-window.png)

- Edits in a note window show up in the main window right away, and the other way round.
- **Window → Keep on Top** keeps the note window in front of other apps.
- **⌘W** closes it.

Next: [Writing and Formatting](writing.md)

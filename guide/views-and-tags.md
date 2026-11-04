# Views and Tags

Views and tags gather notes from every folder: your open tasks, what's coming up, or everything about one project.

## Tasks and Agenda

At the top of the sidebar, **Tasks** lists every open task (`- [ ] …`) in your notes, and **Agenda** lists every dated line, both grouped by when they're due.

![The Tasks view in the middle column: overdue, today's, and upcoming tasks with their dates and notes, and the selected task's note open in the editor beside it](screenshots/53-tasks-view.png)

Click a row to open the note at that line; the view stays, so you can work down the list. Click a task's circle, or press **Space**, to tick it off.

On a task, a date is a deadline. Anywhere else, it's an event that drops off once the day is over. See [Dates and the agenda](finding.md#dates-and-the-agenda).

### Arranging the sidebar

Drag the sidebar's sections to reorder them. Don't use something? Turn it off under **View → Sidebar**, or right-click it and choose **Hide**.

## Your own views

Make views of your own, like work tasks, this week's dates, or notes whose front matter says `status: active`. Choose **View → Sidebar → New View…**, pick what it lists, and add filters by tag, folder, title, text, or [front matter](formatting.md#properties). A preview shows what the view will list as you go.

![The view editor: an icon and name, Tasks / Agenda / Notes, tag and folder chips, and a live preview listing the matching tasks with a count](screenshots/60-view-editor.png)

Right-click a view to edit, duplicate, hide, or delete it.

### Editing views.json by hand

Views are saved in **`.jetfold/views.json`** in your notes folder, so they sync and live in git with your notes. **⌘P → Edit views.json** opens it.

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

**`show`** is `tasks`, `agenda`, or `notes` (the default). **`icon`** is the name of any SF Symbol.

Filters narrow a view down. A note or line has to match every filter, and a filter with a list of values matches any of them:

| Filter | Keeps | Example |
|---|---|---|
| `tag` | Lines or notes with the tag, including nested tags | `"tag": "#work"` |
| `folder` | Notes in the folder and subfolders | `"folder": ["Projects", "Areas"]` |
| `title` | Notes with the words in their name | `"title": "self review"` |
| `text` | Lines or notes with the words | `"text": "invoice"` |
| `property` | Notes whose [front matter](formatting.md#properties) has one of the values | `"property": { "status": ["active", "waiting"] }` |
| `within` | Tasks due, or dates, from now to that far ahead | `"within": "2 weeks"` |
| `allTags` | Every tag in `tag` must be there, not just one | `"allTags": true` |
| `done` | Ticked tasks too | `"done": true` |
| `sort` | Notes by `title`, `edited`, or `created` | `"sort": "title"` |

If something in the file can't be used, a **views.json has problems** row in the sidebar says what.

## Tags in the sidebar

Your [#tags](finding.md#tags) are listed in the sidebar, under your folders. Click a tag to list the notes that use it, from every folder.

![The Tags group in the sidebar, expanded: tags with their note counts, and a nested tag opened under the parent](screenshots/06-tags.png)

- **Drag notes onto a tag** to tag them.
- **⌘N with a tag selected** creates a note with that tag.
- **Right-click a tag** to rename it in every note, or remove it from all notes.

Next: [Writing](writing.md)

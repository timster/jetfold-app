# Daily Notes, Templates, and the Inbox

## Daily notes

Use daily notes as a journal, a work log, or a scratchpad. Press **⌘T** to open today's note. The **Go** menu also opens yesterday's and tomorrow's notes.

Jetfold creates a daily note the first time you open it, using your [daily template](#a-template-for-daily-notes) if you have one.

### The calendar

A small calendar is shown at the bottom of the sidebar. A dot under a day means that day has a daily note, and an accent-colored dot means tasks or events are due. Click a day to see everything on that day, or double-click it to open the daily note.

![The sidebar calendar for October with dots under days with daily notes or dated tasks, and the note, tasks, and events for a selected day in the middle column](screenshots/56-calendar.png)

### Where daily notes are saved

By default, daily notes are named after the date and saved in a `Daily` folder: `Daily/2026-10-06.md`. You can change this in **Settings → Notes → Daily note path**, where text inside `{curly braces}` is a date format:

| Template | Today's note |
|---|---|
| `Daily/{YYYY-MM-DD}` | `Daily/2026-10-06.md` |
| `Daily/{YYYY}/{YYYY-MM-DD}` | `Daily/2026/2026-10-06.md` |
| `Journal/{YYYY}/{MM} {MMMM}/{D}` | `Journal/2026/10 October/6.md` |
| `{dddd, MMMM D, YYYY}` | `Tuesday, October 6, 2026.md` |

![Settings → Notes with the Daily note path field and the resulting path for today](screenshots/32-settings-notes.png)

### Date format codes

| Code | Meaning | Example |
|---|---|---|
| `YYYY` | Four-digit year | 2026 |
| `YY` | Two-digit year | 26 |
| `MMMM` | Month name | October |
| `MMM` | Short month name | Oct |
| `MM` | Month, two digits | 10 |
| `M` | Month | 10 |
| `DD` | Day, two digits | 06 |
| `D` | Day | 6 |
| `dddd` | Weekday | Tuesday |
| `ddd` | Short weekday | Tue |

## Templates

A template is an ordinary note that you start new notes from, such as a meeting agenda, a book review, or a weekly plan. Keep templates in a **Templates** folder at the top level of your notes folder, then choose **File → New Note from Template…** (⌥⌘N). To add a template to the note you're editing, type `/` and the template name.

![New Note from Template open, listing Meeting, Book Review, and Weekly Plan from the Templates folder](screenshots/54-templates.png)

Templates can include placeholders, which Jetfold fills in when you use the template:

| Placeholder | Becomes |
|---|---|
| `{{date}}` | Today's date: `2026-10-13` |
| `{{time}}` | The time: `14:05` |
| `{{date:dddd, MMMM D}}` | The date in any [format](#date-format-codes): `Tuesday, October 13` |
| `{{time:HH.mm}}` | The time in any format: `14.05` |
| `{{cursor}}` | Where the cursor is placed after you name the note |

For example:

```markdown
## {{date:dddd, MMMM D}}

**Attendees:** {{cursor}}

### Notes

### Action items
- [ ]
```

### A template for daily notes

To start daily notes from a template, choose it in **Settings → Notes → Daily notes → Template**. Placeholders use the date of the daily note, so tomorrow's note shows tomorrow's date.

## The Inbox

Select text in any app, right-click it, and choose **Services → New Jetfold Note with Selection**. Jetfold saves the text as a new note in your **inbox folder**.

To give this service a keyboard shortcut, use **System Settings → Keyboard → Keyboard Shortcuts → Services**.

For capturing from scripts and Shortcuts, see [Opening Jetfold from Other Apps](url-scheme.md).

Next: [Images and Attachments](images.md)

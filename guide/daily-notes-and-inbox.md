# Daily Notes, Templates, and the Inbox

## Daily notes

Daily notes give you a note for every day, for a journal, a work log, or a scratchpad for the day. Press **⌘T** for today's note; **Go** has yesterday's and tomorrow's too.

The note is created the first time you open it, from your [daily template](#a-template-for-daily-notes) if you have one.

### The calendar

At the bottom of the sidebar, a small calendar shows your days at a glance: a dot means a daily note, and an accent-colored dot means tasks or events are due. Click a day to see everything on it, or double-click it to open that day's note.

![The sidebar calendar under the folders: October with dots under days that have daily notes, accent dots under days with dated tasks, today highlighted, and a picked day's daily note, tasks, and events in the middle column](screenshots/56-calendar.png)

### Where daily notes go

By default, daily notes are named after the date and kept in a `Daily` folder: `Daily/2026-10-06.md`. You can change this in **Settings → Notes → Daily note path**, where text inside `{curly braces}` is a date format:

| Template | Today's note |
|---|---|
| `Daily/{YYYY-MM-DD}` | `Daily/2026-10-06.md` |
| `Daily/{YYYY}/{YYYY-MM-DD}` | `Daily/2026/2026-10-06.md` |
| `Journal/{YYYY}/{MM} {MMMM}/{D}` | `Journal/2026/10 October/6.md` |
| `{dddd, MMMM D, YYYY}` | `Tuesday, October 6, 2026.md` |

![Settings → Notes: the Daily note path field with a hint, and the resulting path for today below it](screenshots/32-settings-notes.png)

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

A template is an ordinary note that new notes start from: a meeting agenda, a book review, a weekly plan. Keep them in a **Templates** folder at the top of your notes folder, then choose **File → New Note from Template…** (⌥⌘N). You can also type `/` and a template's name to add it to the note you're in.

![New Note from Template open, listing Meeting, Book Review, and Weekly Plan from the Templates folder](screenshots/54-templates.png)

A template can hold placeholders that fill in when it's used:

| Placeholder | Becomes |
|---|---|
| `{{date}}` | Today's date: `2026-10-13` |
| `{{time}}` | The time: `14:05` |
| `{{date:dddd, MMMM D}}` | The date in any [format](#date-format-codes): `Tuesday, October 13` |
| `{{time:HH.mm}}` | The time in any format: `14.05` |
| `{{cursor}}` | Where the cursor goes after you name the note |

For example:

```markdown
## {{date:dddd, MMMM D}}

**Attendees:** {{cursor}}

### Notes

### Action items
- [ ]
```

### A template for daily notes

Choose a template in **Settings → Notes → Daily notes → Template**, and every new daily note starts from it. Placeholders fill in for that note's day, so tomorrow's note says tomorrow's date.

## The Inbox

Select text in any app, then right-click it and choose **Services → New Jetfold Note with Selection**. Jetfold saves it as a new note in your **inbox folder**.

You can give it a keyboard shortcut in **System Settings → Keyboard → Keyboard Shortcuts → Services**.

For capturing from scripts and Shortcuts, see [Opening Jetfold from Other Apps](url-scheme.md).

Next: [Images and Attachments](images.md)

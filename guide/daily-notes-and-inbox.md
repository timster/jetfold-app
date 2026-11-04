# Daily Notes, Templates, and the Inbox

## Daily notes

Daily notes give each day its own note, for a journal, a work log, or a scratchpad for the day.

| Command | Shortcut |
|---|---|
| Go → Today's Note | ⌘T |
| Go → Yesterday's Note | |
| Go → Tomorrow's Note | |

Today's note is also in the Dock icon's right-click menu. The note is created the first time you open it, from your [daily template](#a-template-for-daily-notes) if you have one.

### The calendar

At the bottom of the sidebar, a small month calendar shows your daily notes at a glance:

- A **dot** under a day means it has a daily note; an **accent-colored dot** means tasks or events are due.
- **Click a day** to see the daily note, tasks, and events for that day.
- **Double-click a day** to open that day's daily note, creating it if needed.
- **‹ ›** step through the months; **Today** comes back to this one.

![The sidebar calendar under the folders: October with dots under days that have daily notes, accent dots under days with dated tasks, today highlighted, and a picked day's daily note, tasks, and events in the middle column](screenshots/56-calendar.png)

Don't need it? Turn off **View → Sidebar → Calendar**.

### Where daily notes go

By default, daily notes are named after the date and kept in a `Daily` folder: `Daily/2026-10-06.md`. You can change this in **Settings → Notes → Daily note path**.

The path is a template. Text inside `{curly braces}` is a date format; everything else is used as written. For example:

| Template | Today's note |
|---|---|
| `Daily/{YYYY-MM-DD}` | `Daily/2026-10-06.md` |
| `Daily/{YYYY}/{YYYY-MM-DD}` | `Daily/2026/2026-10-06.md` |
| `Journal/{YYYY}/{MM} {MMMM}/{D}` | `Journal/2026/10 October/6.md` |
| `{dddd, MMMM D, YYYY}` | `Tuesday, October 6, 2026.md` |

Settings shows today's path as you type.

![Settings → Notes: the Daily note path field with its hint, and the resulting path for today below it](screenshots/32-settings-notes.png)

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
| `[text]` | Literal text inside a format | `{YYYY [week]}` → 2026 week |

## Templates

A template is an ordinary note that new notes start from: a meeting agenda, a book review, a weekly plan. Keep them in a **Templates** folder at the top of your notes folder (you can rename it in **Settings → Notes → Templates folder**).

To use one, choose **File → New Note from Template…** (⌥⌘N) and pick it. A new note opens in the current folder with the template's text.

To add a template to the note you're in, type `/` and its name: templates are listed last in the [slash menu](writing.md#the-slash-menu).

![New Note from Template open, listing Meeting, Book Review, and Weekly Plan from the Templates folder](screenshots/54-templates.png)

A template can hold placeholders that fill in when it's used:

| Placeholder | Becomes |
|---|---|
| `{{date}}` | Today's date: `2026-10-13` |
| `{{time}}` | The time: `14:05` |
| `{{date:dddd, MMMM D}}` | The date in any [format](#date-format-codes): `Tuesday, October 13` |
| `{{time:HH.mm}}` | The time in any format: `14.05` |
| `{{cursor}}` | Where the cursor goes after you name the note (it's removed) |

For example:

```markdown
## {{date:dddd, MMMM D}}

**Attendees:** {{cursor}}

### Notes

### Action items
- [ ]
```

Templates are left out of the Tasks and Agenda views, so their example tasks and dates don't show up as real ones.

### A template for daily notes

Choose a template in **Settings → Notes → Daily notes → Template**, and each new daily note starts from it. Placeholders fill in for that note's day, so tomorrow's note says tomorrow's date.

## The Inbox: capturing text from any app

Jetfold adds a macOS Service called **New Jetfold Note with Selection**. Select text in any app, then choose **Services → New Jetfold Note with Selection** from the app menu or by right-clicking the selection. Jetfold opens a new note with that text.

These notes go into your **inbox folder**, `Inbox` by default. Change it in **Settings → Notes → Inbox folder**, or leave it empty to use the notes folder itself.

### Giving it a keyboard shortcut

1. Open **System Settings → Keyboard → Keyboard Shortcuts…**
2. Choose **Services**, then open the **Text** section.
3. Make sure **New Jetfold Note with Selection** is ticked.
4. Double-click to the right of it and press the shortcut you want.

> If the service doesn't show up, make sure Jetfold is in your Applications folder and has been opened at least once. Logging out and back in also refreshes the Services list.

For capturing from scripts and Shortcuts, see the `new` link in [Opening Jetfold from Other Apps](url-scheme.md).

Next: [Images and Attachments](images.md)

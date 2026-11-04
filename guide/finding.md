# Finding Things

## The palettes

Jetfold's palettes are one search box with four modes, all in the **Go** menu. Each has its own shortcut, and pressing the same shortcut again closes it.

| Palette | Shortcut | What you search |
|---|---|---|
| **Command Palette** | ⌘P | Every command in the app |
| **Go to Note** | ⌘O | Note and folder names (and, below them, note text) |
| **Search in Notes** | ⇧⌘F | The text inside every note |
| **Go to Heading** | ⇧⌘O | The headings in the current note |

In every palette, type to filter, use **↑ / ↓** to choose, **Return** to open, and **Escape** to close.

- Letters only need to appear in order: `dn` finds "**D**aily **N**otes".
- Words can come in any order: `review 2025` finds "2025 Annual Review".
- Numbers match whole: `2025` matches "2025-03-21" but not "2024-03-25".

The palettes work in [note windows](organizing-notes.md#note-windows) too.

## Commands (⌘P)

Every command in the app, including ones that aren't in any menu, with their shortcuts.

![The command palette open over a note, listing commands with their shortcuts](screenshots/23-command-palette.png)

The palette always has the commands for getting around: going to notes and views, opening daily notes, and the View menu's options. It adds more for what you're working on:

- **With a note selected:** commands for that note, such as rename, pin, and export.
- **With several notes selected:** commands for all of them at once.
- **With a folder selected:** commands for that folder.
- **When opened from inside a note:** formatting and folding.
- **In a git repository:** git commands, such as commit.

## Go to Note (⌘O)

Jump to any note or folder by name. With nothing typed, it lists your **most recently edited** notes, so ⌘O then Return reopens whatever you were just working on.

![Go to Note with nothing typed, listing the most recently edited notes with their folders](screenshots/24-go-to-note.png)

## Search in Notes (⇧⌘F)

Searches the full text of every note.

- A note matches when it contains **every word** you typed, in any order and any case.
- Each result shows a snippet with the match highlighted.
- Opening a result opens the note with the match selected and scrolled into view.
- Words in **pictures and scanned PDFs** count too: a photo of a whiteboard is found by what's written on it. See [Text in images](images.md#text-in-images-and-pdfs).

![Search in Notes with results for "load test", with highlighted snippets](screenshots/25-search.png)

Search is fast, even across thousands of notes, and picks up changes made outside the app.

## Go to Heading (⇧⌘O)

Lists the current note's headings in order, indented by level. As you move through the list, the note scrolls to show each heading. **Return** puts the cursor on it; **Escape** puts the note back where it was.

![Go to Heading over Atlas Launch Plan, listing its headings](screenshots/26-go-to-heading.png)

## Tags

Type `#` followed by a word anywhere in a note to tag it: `#dinner`, `#Mike-Flynn`, `#project/atlas`. Tags show as small chips, and they're plain text in your notes, nothing hidden.

Your tags are listed in the sidebar, where you can browse them like folders, drag notes onto them, and rename them; see [Tags in the sidebar](organizing-notes.md#tags-in-the-sidebar).

- **Click a tag** in a note to list every note that uses it.
- **Nested tags** (`#project/atlas`) sit under their parent, and picking `#project` includes them.
- Tags are the same whatever their capitals: `#Work` and `#work` are one tag.

## Dates and the agenda

Type `@` and a date, `@2026-10-10`, anywhere in a note to put a date on it: `Standup with Sam @2026-10-10`. Dates show as a small chip, and they're plain text in your notes, nothing hidden.

![A task list with @dates shown as chips, one ticked](screenshots/28-dates.png)

### Writing dates in words

You don't have to type the date out. Type `@` and a word, and Jetfold offers the dates it could mean:

![Typing "@fr" in a task offers "@friday" with its date, "Fri, Oct 16", in a small list](screenshots/47-natural-dates.png)

| You type | You get (on Tuesday 13 October 2026) |
|---|---|
| `@today`, `@tomorrow`, `@yesterday` | `@2026-10-13`, `@2026-10-14`, `@2026-10-12` |
| `@friday` or `@fri` (any weekday) | the coming one: `@2026-10-16` |
| `@next week` | next Monday: `@2026-10-19` |
| `@next month` | the same day next month: `@2026-11-13` |
| `@in 3 days`, `@in 2 weeks` | `@2026-10-16`, `@2026-10-27` |

Pick one from the list with **Return** or **Tab**. For one-word dates you don't even need the list: type `@tomorrow` and a space (or punctuation), and it turns into the date as you go. The note only ever holds the real date, so it means the same thing tomorrow as it does today.

**Go → Agenda** (⌥⌘A) shows the sidebar's **Agenda** view: every date in your notes, grouped as **Overdue**, **Today**, **Tomorrow**, **Next 7 days**, and **Later** (see [Views](organizing-notes.md#views-tasks-and-agenda)). **Click a date** in a note to see everything on that day: its daily note, tasks, and events, with the note you were in staying open.

- **On a task**, the date is a deadline: `- [ ] Send the invoice @2026-10-10` is **Overdue** once the day has passed, until you tick it. Ticked tasks leave the agenda.
- **Anywhere else**, the date is an event (a meeting, a trip). It shows until its day is over, then drops out.

## Tasks

**Go → Tasks** (⌥⌘L) shows the sidebar's **Tasks** view: every open task (`- [ ] …`) in all your notes, in the middle column while you work through them (see [Views](organizing-notes.md#views-tasks-and-agenda)). They're grouped:

- **Overdue:** tasks whose `@date` has passed
- **Today**
- **Upcoming:** dated tasks still to come, soonest first
- **No Date:** the rest, most recently edited notes first

- Click the circle, or press **Space**, to tick a task off.

## Back and forward

**Go → Back** (⌘[) returns to the previous note, right where you left it, and **Go → Forward** (⌘]) goes the other way, however you moved on.

## Note Info

Click **ⓘ** at the top of the editor, or press **⌥⌘O** (Note → Note Info), to open a panel about the note you're in. It has three tabs:

- **Statistics:** words, characters, paragraphs, and an estimated reading time, plus when the note was created and last modified.
- **Table of Contents:** the note's headings, indented by level, with the one the cursor is in highlighted. Click one to jump to it.
- **Backlinks:** the notes that [link to this one](links.md#backlinks), with a snippet of each link. Click one to open it.

![Note Info open on its Statistics tab: words, characters, paragraphs, read time, and the created and modified dates](screenshots/30-note-info-stats.png)

![Note Info open on its Table of Contents tab, with the heading the cursor is in highlighted](screenshots/31-note-info-contents.png)

## Open Random Note

**Go → Random Note** opens a note chosen at random. It's a nice way to rediscover old notes.

Next: [Daily Notes, Templates, and the Inbox](daily-notes-and-inbox.md)

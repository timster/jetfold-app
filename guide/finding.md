# Finding Things

## The palette

Use the palette to find anything in Jetfold. Each kind of search has a shortcut:

| Mode | Shortcut | What you search |
|---|---|---|
| **Command Palette** | ⌘P | Every command in the app |
| **Go to Note** | ⌘O | Note and folder names |
| **Search in Notes** | ⇧⌘F | The text inside every note |
| **Go to Heading** | ⇧⌘O | The headings in the current note |

Matching is forgiving. Letters only need to appear in order, so `dn` finds "**D**aily **N**otes". Words can come in any order, so `review 2025` finds "2025 Annual Review".

## Commands (⌘P)

The Command Palette lists every command in the app, including commands that aren't in any menu. You also see commands that fit what you're doing, like formatting when you're in a note, or commit in a git repository.

![The command palette open over a note, listing commands with their shortcuts](screenshots/23-command-palette.png)

## Go to Note (⌘O)

Jump to any note or folder by name. Before you type, Go to Note lists your **most recently edited** notes, so ⌘O then Return reopens the note you were just working on.

![Go to Note with nothing typed, listing the most recently edited notes and their folders](screenshots/24-go-to-note.png)

## Search in Notes (⇧⌘F)

Search in Notes searches the full text of your notes quickly, even with thousands of notes. A note matches when it contains every word you typed.

![Search in Notes showing results for "load test" with highlighted snippets](screenshots/25-search.png)

Search also finds words in **pictures and scanned PDFs**, so you can find a photo of a whiteboard by what's written on it. See [Text in images](images.md#text-in-images-and-pdfs).

## Go to Heading (⇧⌘O)

Go to Heading lists the headings in the current note. The note scrolls to the selected heading as you move through the list.

![Go to Heading listing the headings in Atlas Launch Plan](screenshots/26-go-to-heading.png)

## Tags

To tag a note, type `#` followed by a word anywhere in the note: `#dinner`, `#project/atlas`. Tags are stored as plain text in your notes. Click a tag to list the notes that use it.

Your tags are also listed in the sidebar; see [Tags in the sidebar](views-and-tags.md#tags-in-the-sidebar).

## Dates and the agenda

To date a line, type `@` and the date anywhere in a note: `Standup with Sam @2026-10-10`.

![A task list with @dates shown as chips, with one task ticked off](screenshots/28-dates.png)

### Writing dates in words

You don't have to type the date out. Type `@` and a word to see matching dates:

![Typing "@fr" in a task suggests "@friday" with the date, "Fri, Oct 16", in a small list](screenshots/47-natural-dates.png)

| You type | You get (on Tuesday 13 October 2026) |
|---|---|
| `@today`, `@tomorrow`, `@yesterday` | `@2026-10-13`, `@2026-10-14`, `@2026-10-12` |
| `@friday` or `@fri` (any weekday) | the coming one: `@2026-10-16` |
| `@next week` | next Monday: `@2026-10-19` |
| `@next month` | the same day next month: `@2026-11-13` |
| `@in 3 days`, `@in 2 weeks` | `@2026-10-16`, `@2026-10-27` |

Jetfold writes the actual date into the note, so the date doesn't change later.

**Go → Agenda** (⌥⌘A) lists the dates in your notes, with overdue dates first (see [Tasks and Agenda](views-and-tags.md#tasks-and-agenda)). Click a date in a note to see everything on that day.

- **On a task**, the date is a deadline: `- [ ] Send the invoice @2026-10-10` is overdue once the day has passed.
- **Anywhere else**, the date is an event, like a meeting or a trip.

## Tasks

**Go → Tasks** (⌥⌘L) lists the open tasks in all your notes, with overdue tasks first and undated tasks last (see [Tasks and Agenda](views-and-tags.md#tasks-and-agenda)).

## Back and forward

**Go → Back** (⌘[) returns to the previous note where you left off. **Go → Forward** (⌘]) moves forward again.

## Note Info

Click **ⓘ** at the top of the editor, or press **⌥⌘O**, to see word counts, reading time, a table of contents, and [backlinks](links.md#backlinks) for the current note.

![Note Info on the Statistics tab, with word, character, and paragraph counts, read time, and created and modified dates](screenshots/30-note-info-stats.png)

![Note Info on the Table of Contents tab, with the current heading highlighted](screenshots/31-note-info-contents.png)

## Open Random Note

**Go → Random Note** opens a note chosen at random, which is a nice way to rediscover old notes.

Next: [Daily Notes, Templates, and the Inbox](daily-notes-and-inbox.md)

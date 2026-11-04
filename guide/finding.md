# Finding Things

## The palette

The palette finds anything in Jetfold, with a shortcut for each kind of search:

| Mode | Shortcut | What you search |
|---|---|---|
| **Command Palette** | ⌘P | Every command in the app |
| **Go to Note** | ⌘O | Note and folder names |
| **Search in Notes** | ⇧⌘F | The text inside every note |
| **Go to Heading** | ⇧⌘O | The headings in the current note |

Matching is forgiving: letters only need to appear in order, so `dn` finds "**D**aily **N**otes", and words can come in any order, so `review 2025` finds "2025 Annual Review".

## Commands (⌘P)

Every command in the app, including ones that aren't in any menu. The palette offers more as you work, like formatting when you're in a note, or commit in a git repository.

![The command palette open over a note, listing commands with their shortcuts](screenshots/23-command-palette.png)

## Go to Note (⌘O)

Jump to any note or folder by name. With nothing typed, it lists your **most recently edited** notes, so ⌘O then Return reopens whatever you were just working on.

![Go to Note with nothing typed, listing the most recently edited notes with their folders](screenshots/24-go-to-note.png)

## Search in Notes (⇧⌘F)

Searches the full text of every note, fast, even across thousands of them. A note matches when it contains every word you typed.

![Search in Notes with results for "load test", with highlighted snippets](screenshots/25-search.png)

Words in **pictures and scanned PDFs** count too: a photo of a whiteboard is found by what's written on it. See [Text in images](images.md#text-in-images-and-pdfs).

## Go to Heading (⇧⌘O)

Lists the current note's headings, and scrolls the note to each one as you move through the list.

![Go to Heading over Atlas Launch Plan, listing the headings](screenshots/26-go-to-heading.png)

## Tags

Type `#` followed by a word anywhere in a note to tag it: `#dinner`, `#project/atlas`. Tags are plain text in your notes, nothing hidden. Click a tag to list every note that uses it.

Your tags are also listed in the sidebar; see [Tags in the sidebar](views-and-tags.md#tags-in-the-sidebar).

## Dates and the agenda

Type `@` and a date anywhere in a note to put a date on it: `Standup with Sam @2026-10-10`.

![A task list with @dates shown as chips, one ticked](screenshots/28-dates.png)

### Writing dates in words

You don't have to type the date out. Type `@` and a word, and Jetfold offers the dates it could mean:

![Typing "@fr" in a task offers "@friday" with the date, "Fri, Oct 16", in a small list](screenshots/47-natural-dates.png)

| You type | You get (on Tuesday 13 October 2026) |
|---|---|
| `@today`, `@tomorrow`, `@yesterday` | `@2026-10-13`, `@2026-10-14`, `@2026-10-12` |
| `@friday` or `@fri` (any weekday) | the coming one: `@2026-10-16` |
| `@next week` | next Monday: `@2026-10-19` |
| `@next month` | the same day next month: `@2026-11-13` |
| `@in 3 days`, `@in 2 weeks` | `@2026-10-16`, `@2026-10-27` |

The note holds the real date, so it means the same thing tomorrow as it does today.

**Go → Agenda** (⌥⌘A) shows every date in your notes, from overdue to later (see [Tasks and Agenda](views-and-tags.md#tasks-and-agenda)). Click a date in a note to see everything on that day.

- **On a task**, the date is a deadline: `- [ ] Send the invoice @2026-10-10` is overdue once the day has passed.
- **Anywhere else**, the date is an event, like a meeting or a trip.

## Tasks

**Go → Tasks** (⌥⌘L) shows every open task in all your notes, from overdue to undated (see [Tasks and Agenda](views-and-tags.md#tasks-and-agenda)).

## Back and forward

**Go → Back** (⌘[) returns to the previous note, right where you left it, and **Go → Forward** (⌘]) goes the other way.

## Note Info

Click **ⓘ** at the top of the editor, or press **⌥⌘O**, for word counts, reading time, a table of contents, and [backlinks](links.md#backlinks).

![Note Info open on the Statistics tab: words, characters, paragraphs, read time, and the created and modified dates](screenshots/30-note-info-stats.png)

![Note Info open on the Table of Contents tab, with the heading the cursor is in highlighted](screenshots/31-note-info-contents.png)

## Open Random Note

**Go → Random Note** opens a note chosen at random. It's a nice way to rediscover old notes.

Next: [Daily Notes, Templates, and the Inbox](daily-notes-and-inbox.md)

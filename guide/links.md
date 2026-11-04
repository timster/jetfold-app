# Links and Wikilinks

## Wikilinks

Type a note's name in double square brackets to link to it:

```markdown
See [[Project Plan]] for the details.
```

The brackets are hidden, so it reads "See Project Plan for the details". **⌘-click** the link to open that note.

| You type | It links to | It shows |
|---|---|---|
| `[[Project Plan]]` | the note named "Project Plan" | Project Plan |
| `[[Project Plan\|the plan]]` | the note named "Project Plan" | the plan |
| `[[work/Project Plan]]` | `Project Plan` in the `work` folder | work/Project Plan |
| `[[Project Plan#Budget]]` | the "Budget" heading in Project Plan | Project Plan#Budget |
| `[[#Budget]]` | the "Budget" heading in the **same** note | #Budget |

### Autocomplete

Type `[[` and a list of notes pops up, recent ones first. Keep typing to narrow it down: `[[prpl` finds "Project Plan". After a note name, type `#` to pick a heading.

![Wikilink autocomplete after typing \[\[Or: Orbital Mechanics, or a new note called Or](screenshots/21-wikilink-autocomplete.png)

### Previewing a linked note

Rest the pointer on a link and the note pops up beside it, so you can check it without leaving the one you're in.

![The pointer resting on a wikilink, with the linked note shown rendered in a preview beside it](screenshots/20-link-preview.png)

### Embedding a note

Put a `!` in front of a wikilink, on a line by itself, to show that note right inside this one. With a heading, just that section shows.

```markdown
![[Q3 Plan]]
![[Q3 Plan#Budget]]
```

![A meeting note embedding the Budget section of Q3 Plan in a box headed "Q3 Plan › Budget"](screenshots/51-embed.png)

### Links to notes that don't exist yet

Follow a link to a note that doesn't exist, and Jetfold creates it. That makes it easy to sketch out a set of notes: write the links first, then click through and fill them in.

### Links stay up to date

When you rename or move a note or folder in Jetfold, every link to it is updated across all your notes.

### Extracting part of a note

When a section gets too big, select it and choose **Note → Extract Selection to New Note**. The text moves into a new note, and a link to the new note is left behind.

## Backlinks

[Note Info](finding.md#note-info) (**ⓘ**, or ⌥⌘O) has a **Backlinks** tab listing every note that links to this one, with the text around each link.

![Note Info open on the Backlinks tab: two notes that link here, with snippets](screenshots/22-backlinks.png)

## Web links

Standard Markdown links work too, like `[Jetfold](https://example.com)`. **⌥⌘K** (Link and Fill Title) makes a link from a URL and fills in the page title for you.

## Links from outside Jetfold

**Note → Copy Link** copies a `jetfold://` link to the note. Paste it into a calendar event, a task in another app, or a document, and clicking it opens the note in Jetfold. See [Opening Jetfold from Other Apps](url-scheme.md).

Next: [Finding Things](finding.md)

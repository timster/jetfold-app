# Links and Wikilinks

## Wikilinks

To link to a note, type its name in double square brackets:

```markdown
See [[Project Plan]] for the details.
```

The brackets are hidden, so you see "See Project Plan for the details." **⌘-click** the link to open the note.

| You type | Links to | You see |
|---|---|---|
| `[[Project Plan]]` | the note named "Project Plan" | Project Plan |
| `[[Project Plan\|the plan]]` | the note named "Project Plan" | the plan |
| `[[work/Project Plan]]` | `Project Plan` in the `work` folder | work/Project Plan |
| `[[Project Plan#Budget]]` | the "Budget" heading in Project Plan | Project Plan#Budget |
| `[[#Budget]]` | the "Budget" heading in the **same** note | #Budget |

### Autocomplete

Type `[[` to see a list of notes, with recent notes first. Keep typing to narrow the list: `[[prpl` finds "Project Plan". After a note name, type `#` to pick a heading.

![Wikilink autocomplete after typing \[\[Or, suggesting Orbital Mechanics or a new note called Or](screenshots/21-wikilink-autocomplete.png)

### Previewing a linked note

Rest the pointer on a link to preview the linked note without leaving the note you're editing.

![A preview of a linked note beside the wikilink under the pointer](screenshots/20-link-preview.png)

### Embedding a note

To show another note inside the current one, put a `!` in front of a wikilink on a line by itself. If the link includes a heading, only that section is shown.

```markdown
![[Q3 Plan]]
![[Q3 Plan#Budget]]
```

![A meeting note embedding the Budget section of Q3 Plan in a box headed "Q3 Plan › Budget"](screenshots/51-embed.png)

### Links to notes that don't exist yet

When you follow a link to a note that doesn't exist, Jetfold creates the note. To sketch out a set of notes, write the links first, then click through and fill in the notes.

### Updating links when you rename or move notes

When you rename or move a note or folder in Jetfold, links to it are updated everywhere.

### Extracting part of a note

When a section gets too big, select it and choose **Note → Extract Selection to New Note**. Jetfold moves the text into a new note and puts a link to the new note where the text was.

## Backlinks

The **Backlinks** tab in [Note Info](finding.md#note-info) (**ⓘ**, or ⌥⌘O) lists the notes that link to the current note, with the text around each link.

![Note Info on the Backlinks tab, listing two linking notes with snippets](screenshots/22-backlinks.png)

## Web links

Standard Markdown links also work, like `[Jetfold](https://example.com)`. Press **⌥⌘K** (Link and Fill Title) to make a link from a URL with the page title filled in.

## Links from outside Jetfold

Choose **Note → Copy Link** to copy a `jetfold://` link to the note. Paste the link into a calendar event, a task in another app, or a document, and click it to open the note in Jetfold. See [Opening Jetfold from Other Apps](url-scheme.md).

Next: [Finding Things](finding.md)

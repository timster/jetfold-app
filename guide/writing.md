# Writing

Jetfold has a **live preview** Markdown editor. You write ordinary Markdown, and Jetfold formats it as you type. Markdown symbols are hidden until you move the cursor into them, so a note reads as formatted text and remains easy to edit.

![The cursor inside bold text, with the ** markers shown dimmed while the rest of the line remains formatted](screenshots/11-reveal.png)

Jetfold saves exactly the characters you typed, so your files are safe to use with other editors, git, or any sync service.

For the Markdown syntax of each format, see [Formatting](formatting.md).

## The Format menu

Type any format by hand or apply it from the **Format** menu. Format commands are **toggles**: run one again to remove the formatting.

| Command | Shortcut | Markdown |
|---|---|---|
| Headings → Heading 1–6 | | `# ` to `###### ` |
| Bold | ⌘B | `**text**` |
| Italic | ⌘I | `*text*` |
| Strikethrough | | `~~text~~` |
| Highlight | | `==text==` |
| Link | ⌘K | `[text](url)` |
| Link and Fill Title | ⌥⌘K | `[Page Title](url)` |
| Follow Link | ⌃Return | |
| Bullet List | ⇧⌘8 | `- ` |
| Ordered List | | `1. ` |
| Task List | | `- [ ] ` |
| Toggle Task | ⌘. | `- [ ]` ↔ `- [x]` |
| Quote | | `> ` |
| Comment | ⌘/ | `<!-- text -->` |
| Code | | `` `text` `` |
| Code Block | | ```` ``` ```` fences |
| Math | | `$x^2$` |
| Math Block | | `$$ … $$` |
| Footnote | | `[^1]` and `[^1]: …` |
| Table | | a new table; see [Tables](formatting.md#tables) |
| Clear Formatting | ⌥⌘⌫ | removes inline markup |

![The Format menu open, with icons beside the commands and the Headings and Table submenus](screenshots/12-format-menu.png)

## The slash menu

Type `/` at the start of a line to insert a heading, list, callout, table, diagram, date, or one of your [templates](daily-notes-and-inbox.md#templates) without remembering the Markdown. Keep typing to filter the menu: `/tab` narrows it to Table.

![The slash menu open under "/", grouped into Text, Lists, Callouts, Blocks, Insert, and Templates](screenshots/48-slash-menu.png)

## Folding sections

Click the chevron beside a heading to fold the section under it. Press **⌘'** to fold or unfold the section that contains the cursor.

![Atlas Launch Plan with the Milestones section folded into a ••• pill and the fold chevron beside the heading](screenshots/13-fold.png)

## Calculator

Type a sum followed by `=`, and Jetfold suggests the answer. Press **Return** to insert it.

```markdown
254,652+10348=265,000
```

Variables work too. After a line like `x=265,000`, type `x+43534=` and Jetfold suggests `308,534`.

## Pasting from other apps

When you paste text copied from a web page, an email, or a word processor, Jetfold converts it to Markdown with the formatting intact.

## Selecting

Use **Expand Selection** (⌃⇧⌘→) to select a larger piece of text around the cursor: first the word, then the sentence, the paragraph, the section, and finally the whole note. Use **Shrink Selection** (⌃⇧⌘←) to step back down.

![The Selection menu: Expand and Shrink Selection, Expand Selection to Line, the occurrence commands, and the multiple-cursor commands](screenshots/18-selection-menu.png)

### Multiple cursors

With multiple cursors, you can edit several places at once. Typing, deleting, and formatting apply at all of the cursors.

| Action | How |
|---|---|
| Add a cursor | ⌘-click |
| Add a cursor on the line above / below | ⌥⌘↑ / ⌥⌘↓ |
| Select the next occurrence of the selection | ⌘D |
| Select every occurrence | ⇧⌘L |
| Rectangular (column) selection | ⌥-drag |
| Back to one cursor | Escape |

## Find and replace

Press **⌘F** to find in the note, or **⌥⌘F** to find and replace. Press **⌥Return** to put a cursor on all of the matches.

![The find and replace bar over a Python code block, showing "2 of 5" for "row" and the Aa, W, and .* options](screenshots/19-find-replace.png)

To search across *all* notes, use **Search in Notes** (⇧⌘F); see [Finding Things](finding.md).

## Focus mode

Turn on **View → Focus Mode** (⇧⌘J) to fade everything except the paragraph you're writing and keep the current line in the middle of the window, like paper in a typewriter. It works well with **View → Editor** (⌘1), which hides the other columns.

## Line numbers

Turn on **View → Line Numbers** to number the lines in all workspaces. A wrapped paragraph counts as one line.

## Vim mode

Turn on **View → Vim Mode** to edit notes with Vim key bindings in all workspaces. Notes open in Normal mode, and a badge at the bottom of the window indicates the current mode. Motions, text objects, macros, and `:s` work as they do in Vim.

Jetfold adds these commands:

| Command | Does |
|---|---|
| `:w` | Saves the note |
| `:q`, `:wq`, `:x`, `ZZ` | Closes a note window |
| `:e` | Opens Go to Note |
| `:e name` | Opens the note with that name, or lists the notes that match |
| `:sp`, `:vs` | Opens the note in a separate window |
| `gf`, `Ctrl-]` | Follows the link under the cursor |
| `:bn`, `:bp` | Moves to the next or previous note in the list, or in a stack of notes |
| `:grep words` | Searches all your notes |
| `:f name` | Renames the note |
| `:history` | Shows the note's history |
| `:commit` | Commits your changes |
| `:set nu`, `:set rnu` | Shows line numbers, or numbers relative to the cursor |
| `:help` | Opens this page |

There might be a few other commands ;)

Next: [Formatting](formatting.md)

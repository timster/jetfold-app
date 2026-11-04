# Writing

Jetfold's editor is a **live preview** Markdown editor. You write ordinary Markdown, and Jetfold shows it formatted as you go. The Markdown symbols are hidden until your cursor moves into them, so a note looks finished but is still easy to edit.

![The cursor inside bold text, with the ** markers shown dimmed while the rest of the line stays formatted](screenshots/11-reveal.png)

Your file always contains exactly the characters you typed, so it's safe to use alongside other editors, git, or any sync service.

For the Markdown behind every format, from headings to math, see [Formatting](formatting.md).

## The Format menu

Everything can be typed by hand, or applied from the **Format** menu. Every Format command is a **toggle**: run it again to remove the formatting.

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

![The Format menu open, with an icon beside every command and the Headings and Table submenus](screenshots/12-format-menu.png)

## The slash menu

Type `/` at the start of a line to insert a heading, list, callout, table, diagram, date, or one of your [templates](daily-notes-and-inbox.md#templates) without remembering the Markdown. Keep typing to narrow the list: `/tab` finds Table.

![The slash menu open under "/", grouped into Text, Lists, Callouts, Blocks, Insert, and Templates](screenshots/48-slash-menu.png)

## Folding sections

Click the chevron beside a heading to fold the section under it. **⌘'** folds or unfolds the section the cursor is in.

![Atlas Launch Plan with the Milestones section folded into a ••• pill and the fold chevron beside the heading](screenshots/13-fold.png)

## Calculator

Type a sum followed by `=` and Jetfold offers the answer. Press **Return** to insert it.

```markdown
254,652+10348=265,000
```

It remembers variables too: after a line like `x=265,000`, typing `x+43534=` offers `308,534`.

## Pasting from other apps

Text copied from a web page, an email, or a word processor pastes as Markdown, with formatting intact.

## Selecting

**Expand Selection** (⌃⇧⌘→) selects the next bigger piece of text around the cursor: the word, then the sentence, the paragraph, the section, and finally the whole note. **Shrink Selection** (⌃⇧⌘←) steps back down.

![The Selection menu: Expand and Shrink Selection, Expand Selection to Line, the occurrence commands, and the multiple-cursor commands](screenshots/18-selection-menu.png)

### Multiple cursors

Jetfold can edit in several places at once. Typing, deleting, and formatting apply at every cursor.

| Action | How |
|---|---|
| Add a cursor | ⌘-click |
| Add a cursor on the line above / below | ⌥⌘↑ / ⌥⌘↓ |
| Select the next occurrence of the selection | ⌘D |
| Select every occurrence | ⇧⌘L |
| Rectangular (column) selection | ⌥-drag |
| Back to one cursor | Escape |

## Find and replace

Press **⌘F** to find in the note, or **⌥⌘F** to find and replace. **⌥Return** selects every match as multiple cursors.

![The find and replace bar over a Python code block, showing "2 of 5" for "row" and the Aa, W, and .* options](screenshots/19-find-replace.png)

To search across *all* notes, use **Search in Notes** (⇧⌘F); see [Finding Things](finding.md).

## Focus mode

**View → Focus Mode** (⇧⌘J) fades everything but the paragraph you're writing, and keeps your line in the middle of the window, like paper in a typewriter. It pairs well with **View → Editor** (⌘1), which hides the other columns.

Next: [Formatting](formatting.md)

# Opening Jetfold from Other Apps

## Shortcuts, Siri, and Spotlight

Jetfold's actions are in the Shortcuts app, under Apps → Jetfold, so you can build your own shortcuts around your notes.

| Action | Does |
|---|---|
| **Create Note** | Makes a note with a title and text, in the inbox folder or a folder you pick |
| **Add to Note** | Adds text at the end of a note |
| **Add to Daily Note** | Adds text at the end of a daily note |
| **Open Note** / **Open Today's Note** / **Open Daily Note** | Opens a note, or a daily note |
| **Get Note Text** | Returns a note's Markdown |
| **Find Notes** | Returns the notes containing all the words, like Search in Notes |
| **Get Open Tasks** | Returns the unticked tasks, all of them or just overdue, today's, or upcoming ones |

Some are ready to use without building anything. Ask Siri or type them into Spotlight:

- “Add to today's note in Jetfold”
- “New Jetfold note”
- “Open today's note in Jetfold”
- “Get my tasks from Jetfold”

## Share menu

Jetfold is in the Share menu of Safari and other apps. Share a page or some text, then save it as a new note in your inbox or add it to today's note.

## The Service

Select text in any app and choose **Services → New Jetfold Note with Selection** to save it as a note in your inbox. You can give it a keyboard shortcut in **System Settings → Keyboard → Keyboard Shortcuts → Services**.

## jetfold:// links

Jetfold answers to `jetfold://` links, from scripts, bookmarks, calendar events, and other apps. **Note → Copy Link** copies a link to the note you're in, ready to paste anywhere.

| Link | Does |
|---|---|
| `open?note=Name` | Opens a note, resolved like a `[[wikilink]]` (by name, or by path when it contains `/`). `&heading=Tasks` puts the cursor on a heading. `&create=true[&text=…]` makes the note first if it's missing. |
| `new?note=…&text=…` | Makes a note. `Name` goes in the inbox folder, `folder/Name` in that folder. The note opens in a separate window. |
| `new?…&append=true` | If that exact note exists, adds `text` at the end; otherwise creates it. |
| `new?…&overwrite=true` | If that exact note exists, replaces the text, after a confirmation. Otherwise creates it. |
| `new?…&silent=true` | Doesn't open the note. |
| `daily?offset=N` | Today's note, or N days away (`-1` yesterday). Created if missing. |
| `daily?…&text=…` | Adds `text` at the end of that day's note. |
| `search?q=text` | Opens Search in Notes with `text` typed in. |

`note` may also be written `path`. Encode spaces as `%20`, `#` as `%23`, `&` as `%26`, newlines as `%0A`.

```sh
open 'jetfold://open?note=Atlas%20Launch%20Plan&heading=Tasks'
open 'jetfold://new?note=Journal/Log&append=true&silent=true&text=Ran%205k'
open 'jetfold://search?q=load%20test'
```

Next: [Settings and Themes](settings.md)

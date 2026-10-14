# Opening Jetfold from Other Apps

Jetfold answers to `jetfold://` links, from Shortcuts, scripts, bookmarks, calendar events and other apps. From Terminal:

```sh
open 'jetfold://daily'
```

A link that arrives while Jetfold isn't running starts it, and runs once the workspace has loaded.

The easiest way to get a link to a note is **Note → Copy Link**, which copies its `open` link (below) ready to paste anywhere.

## Routes

| Link | Does |
|---|---|
| `open?note=Name` | Opens a note, resolved like a `[[wikilink]]` (by name, or by path from the notes folder when it contains `/`). `&heading=Tasks` or `Name%23Tasks` puts the cursor on a heading. `&create=true[&text=…]` makes the note first if it's missing (placed as `new` would); without it an unknown name shows an error. |
| `new?note=…&text=…` | Makes a note. `Name` goes in the inbox folder (Settings, default `Inbox`), `folder/Name` in that folder, `folder/` makes `Untitled` there. Missing folders are created; a taken name becomes `Name 2`. The note opens in its own window. |
| `new?…&append=true` | If that exact note exists, adds `text` on a line of its own; otherwise creates it. |
| `new?…&overwrite=true` | If that exact note exists, replaces its text, after a confirmation (always, even with `silent`). Otherwise creates it. |
| `new?…&silent=true` | Doesn't open the note. |
| `daily?offset=N` | Today's note, or N days away (`-1` yesterday). Created if missing. |
| `search?q=text` | Opens Search in Notes with `text` typed in. |

`note` may also be written `path`. Encode spaces as `%20`, `#` as `%23`, `&` as `%26`, newlines as `%0A`.

```sh
open 'jetfold://open?note=Atlas%20Launch%20Plan&heading=Tasks'
open 'jetfold://new?note=Journal/Log&append=true&silent=true&text=Ran%205k'
open 'jetfold://search?q=load%20test'
```

Problems (unknown note, invalid name or folder, read-only note) show in Jetfold's error alert.

## Service: New Jetfold Note with Selection

Select text in any app, then use the app menu → Services → New Jetfold Note with Selection (or the text context menu). It creates `Untitled.md` in the inbox folder holding the text and opens it in a note window. To enable it or give it a shortcut: System Settings → Keyboard → Keyboard Shortcuts → Services → Text → New Jetfold Note with Selection.

Next: [Settings and Themes](settings.md)

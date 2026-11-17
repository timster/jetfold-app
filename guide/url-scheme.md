# Opening Jetfold from Other Apps

## Shortcuts, Siri, and Spotlight

Use the Jetfold actions in the Shortcuts app, under Apps → Jetfold, to build shortcuts for your notes.

| Action | Does |
|---|---|
| **Create Note** | Makes a note with a title and text, in the inbox folder or a folder you pick |
| **Add to Note** | Adds text at the end of a note |
| **Add to Daily Note** | Adds text at the end of a daily note |
| **Open Note** / **Open Today's Note** / **Open Daily Note** | Opens a note, or a daily note |
| **Get Note Text** | Returns a note's Markdown |
| **Find Notes** | Returns notes that contain all the given words, like Search in Notes |
| **Get Open Tasks** | Returns unticked tasks: all of them, or only overdue, today's, or upcoming tasks |

You can use some actions without building a shortcut. Ask Siri, or type one of these phrases into Spotlight:

- “Add to today's note in Jetfold”
- “New Jetfold note”
- “Open today's note in Jetfold”
- “Get my tasks from Jetfold”

## Today widget

Add the Jetfold **Today** widget to your desktop or Notification Center to see what's due in your notes. Click a task or event to open its note at that line.

![The medium Today widget on the desktop: the date beside an open task and an event due today](screenshots/66-today-widget.png)

## Focus filters

Set a Focus to switch Jetfold to another workspace while the Focus is on, for example to see your work notes only during the Work Focus. In **System Settings → Focus**, choose a Focus, then click **Add Filter…** and choose **Jetfold**. Optionally, pick a view, tag, or folder to show.

![The Jetfold Focus filter in System Settings, with Workspace and Show set](screenshots/65-focus-filter.png)

When the Focus ends, you see the workspace you had open before.

## Share menu

Share a page or text to Jetfold from the Share menu in Safari and other apps, and save it as a new inbox note or add it to today's note.

## The Service

Select text in any app and choose **Services → New Jetfold Note with Selection** to save it as a note in your inbox. To give it a keyboard shortcut, use **System Settings → Keyboard → Keyboard Shortcuts → Services**.

## jetfold:// links

Use `jetfold://` links in scripts, bookmarks, calendar events, and other apps to open notes, views, and searches. To copy a link to the note you're in, choose **Note → Copy Link**. To copy a link to a view, right-click it in the sidebar and choose **Copy Link**.

| Link | Does |
|---|---|
| `open?note=Name` | Opens a note, resolved like a `[[wikilink]]` (by name, or by path when it contains `/`). `&heading=Tasks` puts the cursor on a heading. `&create=true[&text=…]` makes the note first if it's missing. `&at=N[&length=M]` puts the cursor N characters in, selecting M. |
| `new?note=…&text=…` | Makes a note. `Name` creates the note in the inbox folder, and `folder/Name` creates it in that folder. The note opens in a separate window. |
| `new?…&append=true` | If that exact note exists, adds `text` at the end; otherwise creates it. |
| `new?…&overwrite=true` | If that exact note exists, replaces the text, after a confirmation. Otherwise creates it. |
| `new?…&silent=true` | Doesn't open the note. |
| `daily?offset=N` | Opens today's note, or the daily note N days away (`-1` is yesterday). Jetfold creates the note if it's missing. |
| `daily?…&text=…` | Adds `text` at the end of that day's note. |
| `search?q=text` | Opens Search in Notes with `text` typed in. |
| `view?name=Tasks` | Opens a view: Tasks, Agenda, or one of your own, by name. |

`path` works in place of `note`. Encode spaces as `%20`, `#` as `%23`, `&` as `%26`, newlines as `%0A`.

```sh
open 'jetfold://open?note=Atlas%20Launch%20Plan&heading=Tasks'
open 'jetfold://new?note=Journal/Log&append=true&silent=true&text=Ran%205k'
open 'jetfold://search?q=load%20test'
open 'jetfold://view?name=Waiting%20On'
```

Next: [Settings and Themes](settings.md)

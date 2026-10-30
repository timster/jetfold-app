# Opening Jetfold from Other Apps

Jetfold answers to `jetfold://` links, from scripts, bookmarks, calendar events and other apps. From Terminal:

```sh
open 'jetfold://daily'
```

A link that arrives while Jetfold isn't running starts it, and runs once the workspace has loaded.

The easiest way to get a link to a note is **Note → Copy Link**, which copies its `open` link (below) ready to paste anywhere.

## Routes

| Link | Does |
|---|---|
| `open?note=Name` | Opens a note, resolved like a `[[wikilink]]` (by name, or by path from the notes folder when it contains `/`). `&heading=Tasks` or `Name%23Tasks` puts the cursor on a heading. `&create=true[&text=…]` makes the note first if it's missing (placed as `new` would); without it an unknown name shows an error. `&at=N[&length=M]` puts the cursor N characters in (UTF-16 code units), selecting M. |
| `new?note=…&text=…` | Makes a note. `Name` goes in the inbox folder (Settings, default `Inbox`), `folder/Name` in that folder, `folder/` makes `Untitled` there. Missing folders are created; a taken name becomes `Name 2`. The note opens in its own window. |
| `new?…&append=true` | If that exact note exists, adds `text` on a line of its own; otherwise creates it. |
| `new?…&overwrite=true` | If that exact note exists, replaces its text, after a confirmation (always, even with `silent`). Otherwise creates it. |
| `new?…&silent=true` | Doesn't open the note. |
| `daily?offset=N` | Today's note, or N days away (`-1` yesterday). Created if missing. |
| `daily?…&text=…` | Adds `text` on a line of its own at the end of that day's note, then opens it (not with `&silent=true`). |
| `search?q=text` | Opens Search in Notes with `text` typed in. |

`note` may also be written `path`. Encode spaces as `%20`, `#` as `%23`, `&` as `%26`, newlines as `%0A`.

```sh
open 'jetfold://open?note=Atlas%20Launch%20Plan&heading=Tasks'
open 'jetfold://new?note=Journal/Log&append=true&silent=true&text=Ran%205k'
open 'jetfold://search?q=load%20test'
```

Problems (unknown note, invalid name or folder, read-only note) show in Jetfold's error alert.

## Shortcuts, Siri and Spotlight

Jetfold's actions are in the Shortcuts app, under Apps → Jetfold. They work on the notes folder that's open in Jetfold, and like links, an action that arrives while Jetfold isn't running starts it first.

| Action | Does |
|---|---|
| **Create Note** | Makes a note with a title and text, in the inbox folder or a folder you pick. A taken name becomes `Name 2`. Returns the note. |
| **Add to Note** | Adds text on a line of its own at the end of a note. |
| **Add to Daily Note** | Adds text at the end of today's (or yesterday's, or tomorrow's) note, making it from your daily template if it's missing. |
| **Open Note** / **Open Today's Note** / **Open Daily Note** | Opens a note, today's note, or yesterday's or tomorrow's, in the main window. |
| **Get Note Text** | Returns a note's Markdown. |
| **Find Notes** | Returns the notes containing all the words, best matches first, like Search in Notes. |
| **Get Open Tasks** | Returns the unticked tasks as the Tasks view lists them: all, or just the overdue, due today, upcoming or undated ones. |

When an action asks for a note, you can pick one from a list of recent notes or type to search by name. A note returned by one action can go straight into the next: Find Notes → Get Note Text, or Create Note → Open Note.

Some actions are ready to use without building a shortcut. Ask Siri or type them into Spotlight:

- “Add to today's note in Jetfold”
- “New Jetfold note”
- “Open today's note in Jetfold”
- “Open a note in Jetfold”
- “Get my tasks from Jetfold”

Actions that change notes need Jetfold unlocked, and leave read-only notes alone. A note that's open in Jetfold saves first and then shows the added text.

## Today widget

Add Jetfold's **Today** widget from the desktop (right-click it and choose **Edit Widgets…**) or Notification Center. It shows what's due in your open workspace, as the Agenda does:

- **Small:** the date, how many tasks are overdue, and the next thing due.
- **Medium:** the date beside the next few tasks and events.
- **Large:** Overdue, Today, Tomorrow and Coming Up, each with its tasks and events.

Click a task or event to open its note at that line, or anywhere else to open today's note. The widget updates when your notes change, and moves on to the next day at midnight by itself. It shows the workspace that's open in Jetfold.

![The Today widget on the desktop in its medium and large sizes](screenshots/66-today-widget.png)

## Focus filters

A Focus can open a workspace for as long as it's on: your work notes during Work, your own the rest of the time. In **System Settings → Focus**, choose a Focus, then under **Focus Filters** click **Add Filter…** and choose **Jetfold**.

![The Jetfold Focus filter in System Settings, with Workspace and Show set](screenshots/65-focus-filter.png)

- **Workspace** is the one to open. It's one of the workspaces you've opened in Jetfold.
- **Show** is optional: today's note, Tasks, Agenda, one of your own views, a tag or a folder from that workspace.

When the Focus turns on, Jetfold saves your edits and switches. When it turns off, it goes back to the workspace you had open before, unless you've switched to another one yourself in the meantime. If Jetfold isn't running when the Focus changes, it catches up the next time you open it.

## Share menu

Jetfold is in the Share menu of Safari and other apps (in the toolbar's Share button, or File → Share). Share a page or some text and a small sheet opens with a link to the page (`[Page Title](https://…)`) and any text, ready to edit. Choose **New Note** to save it in the inbox folder, named after the page, or **Today's Note** to add it at the end of today's note. Jetfold saves it in the background; the note doesn't open.

If Jetfold isn't in the menu, turn it on in System Settings → General → Login Items & Extensions → Sharing (or the Share menu's Edit Extensions…).

## Service: New Jetfold Note with Selection

Select text in any app, then use the app menu → Services → New Jetfold Note with Selection (or the text context menu). It creates `Untitled.md` in the inbox folder holding the text and opens it in a note window. To enable it or give it a shortcut: System Settings → Keyboard → Keyboard Shortcuts → Services → Text → New Jetfold Note with Selection.

Next: [Settings and Themes](settings.md)

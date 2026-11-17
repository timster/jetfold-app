# Settings and Themes

Settings are saved in the notes folder of the open [workspace](getting-started.md#choosing-your-notes-folder), so they apply wherever you open that folder.

## General

![Settings → General: the Appearance switch and theme previews, with Jetfold selected](screenshots/40-settings-general.png)

### Appearance and theme

Under **Theme**, choose one of eight built-in themes from the previews. The themes have light and dark versions ([see them all](/themes/)) and color the whole window, including the sidebar and note list. The Jetfold theme also uses the accent color you set in **System Settings → Appearance**.

![The main window in the Catppuccin theme, light: sidebar, note list, and editor in matching soft lavender greys with mauve selections](screenshots/41-theme-catppuccin.png)

![The same window in the Nord theme, dark](screenshots/42-theme-nord.png)

### Your own theme

To give a workspace a custom theme, add a file called `theme.json` to the `.jetfold` folder inside the notes folder. The file names a built-in theme to start from and lists only the colors to change, so it can be as short as one color:

```json
{
  "name": "Forest",
  "base": "nord",
  "light": {
    "accent": "#2f7d4f",
    "selection": "#2f7d4f",
    "surface": "#f7f5ef",
    "sidebar": "#f7f5ef"
  },
  "dark": {
    "accent": "#7fd1a0",
    "selection": "#3f8f5f",
    "on-selection": "#ffffff"
  }
}
```

**`base`** is the built-in theme to start from: `jetfold`, `solarized`, `nord`, `catppuccin`, `rose-pine`, `gruvbox`, `tokyo-night`, or `high-contrast`. Colors can be any CSS color. Your theme appears as **Workspace**, and the preview updates as you edit the file. Anyone who opens the notes folder can use the theme.

#### The colors

| Key | Used for |
|---|---|
| `surface` | The note, the note list, and the window behind them |
| `sidebar` | The sidebar background (transparent in the Jetfold theme, so the system sidebar shows through) |
| `bg` | Text fields in the find bar |
| `text`, `muted` | Text, and quieter text (previews, dates, counts, Markdown symbols) |
| `border` | Column dividers, table lines, quote bars, rules |
| `hover` | Buttons in the find bar when the pointer is over them |
| `accent`, `accent-text`, `on-accent` | The accent color; links and accent-colored text; text on the accent |
| `accent-soft` | Light accent backgrounds: `#tags`, `@dates`, selected table cells |
| `selection`, `on-selection` | A selected row (sidebar, note list, palette) and the text on it |
| `selection-blur` | A selected row while you're typing in another part of the window, and selected text |
| `highlight-bg` | `==highlights==` |
| `code-bg` | Code, code blocks, and table headers |
| `find-match`, `find-current` | Find results in the note, and the current one |
| `danger` | Errors, deletions |
| `warn`, `warn-soft` | Warnings, and the "changed on disk" bar |
| `git-added`, `git-modified`, `git-removed` | Git letters, folder dots, and changed-line marks |
| `syn-keyword`, `syn-string`, `syn-comment`, `syn-number`, `syn-function`, `syn-type`, `syn-property` | Code highlighting |

## Editor

![Settings → Editor: the editor and monospace fonts with Change… buttons, Text width, Fill in link titles, and the live preview note below](screenshots/43-settings-editor.png)

Choose the fonts for writing and for code, and how wide lines get before they wrap. You can see your changes in a sample note below the settings.

When **Fill in link titles when pasting a URL** is on, a web address you paste becomes a link with the page title as its text.

## Notes

In the **Notes** settings, you can set the [daily note path](daily-notes-and-inbox.md#where-daily-notes-are-saved) and [daily template](daily-notes-and-inbox.md#a-template-for-daily-notes), the [templates folder](daily-notes-and-inbox.md#templates), the [inbox folder](daily-notes-and-inbox.md#the-inbox), and the [image path](images.md#where-images-are-saved).

### Find text in images and PDFs

When this setting is on (the default), you can search for words in the images and PDFs in your notes. Text is recognized on your Mac. See [Text in images and PDFs](images.md#text-in-images-and-pdfs).

### Deleted notes

With **System Trash** (the default), deleted notes are moved to the macOS Trash. With **Trash folder**, they are kept in a `.trash` folder in your notes folder, where you can see them and your sync service syncs them.

Next: [Keyboard Shortcuts](shortcuts.md)

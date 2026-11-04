# Settings and Themes

Settings belong to the open [workspace](getting-started.md#choosing-your-notes-folder) and are saved in the notes folder, so they travel with it.

## General

![Settings → General: the Appearance switch, the Theme menu, and the Workspace folder with the Open Folder… button](screenshots/40-settings-general.png)

### Appearance and theme

**Theme** picks Jetfold's colors, and every theme has a light and a dark look:

| Theme | Light | Dark |
|---|---|---|
| **Jetfold** (the default) | Crisp white, with the standard Mac sidebar | Near-black, with the standard Mac sidebar |
| **Solarized** | Warm cream | Deep teal |
| **Nord** | Cool frost grey | Polar night blue |
| **Catppuccin** | Soft lavender grey (Latte) | Dark blue-grey with pastels (Mocha) |
| **High Contrast** | Black on white | White on black |

A theme colors the whole window, not just the note. The Jetfold theme also follows your Mac's accent color, set in **System Settings → Appearance**.

![The main window in the Catppuccin theme, light: sidebar, note list, and editor in matching soft lavender greys with mauve selections](screenshots/41-theme-catppuccin.png)

![The same window in the Nord theme, dark](screenshots/42-theme-nord.png)

### Your own theme

A workspace can have a custom theme: a file called `theme.json` in the notes folder's `.jetfold` folder. It starts from a built-in theme and changes only the colors you list, so it can be as short as one color:

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

**`base`** is the built-in theme to start from: `jetfold`, `solarized`, `nord`, `catppuccin`, or `high-contrast`. Colors can be any CSS color. The theme shows up in the Theme menu as **Workspace**, and since the file travels with the notes folder, anyone who opens the folder can use it.

#### The colors

| Key | Used for |
|---|---|
| `surface` | The note, the note list, and the window behind them |
| `sidebar` | The sidebar's fill (in the default theme, see-through to the system's sidebar) |
| `bg` | The find bar's text fields |
| `text`, `muted` | Text, and quieter text (previews, dates, counts, Markdown symbols) |
| `border` | Column dividers, table lines, quote bars, rules |
| `hover` | The find bar's buttons under the pointer |
| `accent`, `accent-text`, `on-accent` | The accent color; links and accent-colored text; text on the accent |
| `accent-soft` | Light accent backgrounds: `#tags`, `@dates`, selected table cells |
| `selection`, `on-selection` | A selected row (sidebar, note list, palette) and the text on it |
| `selection-blur` | A selected row while another part of the window has the keyboard, and selected text |
| `highlight-bg` | `==highlights==` |
| `code-bg` | Code, code blocks, and table headers |
| `find-match`, `find-current` | Find results in the note, and the current one |
| `danger` | Errors, deletions |
| `warn`, `warn-soft` | Warnings, and the "changed on disk" bar |
| `git-added`, `git-modified`, `git-removed` | Git letters, folder dots, and changed-line marks |
| `syn-keyword`, `syn-string`, `syn-comment`, `syn-number`, `syn-function`, `syn-type`, `syn-property` | Code highlighting |

## Editor

![Settings → Editor: the editor and monospace fonts with Change… buttons, Text width, Fill in link titles, and the live preview note below](screenshots/43-settings-editor.png)

Choose the fonts for your writing and for code, and how wide lines get before they wrap. A sample note below the settings shows your choices as you make them.

**Fill in link titles when pasting a URL** turns a pasted web address into a link named after the page.

## Notes

The **Notes** settings say where things go: the [daily note path](daily-notes-and-inbox.md#where-daily-notes-go) and [daily template](daily-notes-and-inbox.md#a-template-for-daily-notes), the [templates folder](daily-notes-and-inbox.md#templates), the [inbox folder](daily-notes-and-inbox.md#the-inbox), and the [image path](images.md#where-images-are-saved).

Next: [Keyboard Shortcuts](shortcuts.md)

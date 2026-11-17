# Git Integration

If your notes folder is a **git repository**, you can see what has changed since your last commit, browse and restore older versions of any note, and commit from Jetfold. Otherwise, the git features are hidden.

> Git is built into Jetfold, so you don't need git installed. To share your notes with another Mac, push and pull them with git in Terminal or a git app. Changes you pull appear in Jetfold automatically.

## Status badges

In the note list, notes that have changed since the last commit are marked with a letter. In the sidebar, folders with changes are marked with a dot.

| Badge | Meaning |
|---|---|
| **M** | Modified |
| **A** | New, and added to git (staged) |
| **R** | Renamed (staged) |
| **U** | New and not yet tracked by git |

![Git letters M, A, and U beside notes in the list, and dots on folders with changes in the sidebar](screenshots/35-git-status.png)

## Changed lines in the editor

While you edit, the margin is marked where the note differs from the last commit. Added lines have a green bar, changed lines have an orange bar, and a red triangle marks where lines were deleted.

![Changed-line marks in the margin: an orange bar beside a modified line, a green bar beside an added one, and a red triangle where lines were deleted](screenshots/36-changed-lines.png)

## Note history

Choose **Note → Show History…** (⇧⌘H) to see all versions of the current note, including those from before a rename or move. Select a version to see what has changed since then, or the note as it was.

![The history of Atlas Launch Plan: the list of versions on the left and, on the right, the lines changed since the selected version in red and green](screenshots/37-history.png)

To bring back the selected version, click **Restore This Version**.

## Committing

Choose **File → Commit Changes…** (⇧⌘K) to see the notes you've changed. Type a message and press **Return** to commit. If you leave the message empty, the date and time are used instead.

![Commit Changes: the message field above the list of changed notes, with icons for the kind of change](screenshots/38-commit.png)

Next: [Exporting](exporting.md)

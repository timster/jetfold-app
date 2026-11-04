# Git Integration

If your notes folder is a **git repository**, Jetfold shows what has changed since your last commit, lets you browse and restore older versions of any note, and can commit for you. If it isn't, the git features stay out of the way.

> Git is built into Jetfold, so you don't need git installed. To share your notes with another Mac, push and pull them with git in Terminal or a git app; Jetfold picks up whatever arrives.

## Status badges

Notes that have changed since the last commit get a letter in the note list, and folders with changes get a dot:

| Badge | Meaning |
|---|---|
| **M** | Modified |
| **A** | New, and added to git (staged) |
| **R** | Renamed (staged) |
| **U** | New and not yet tracked by git |

![Git letters M, A, and U beside notes in the list, and dots on folders with changes in the sidebar](screenshots/35-git-status.png)

## Changed lines in the editor

While you edit, colored marks in the margin show how the note differs from the last commit: green for added lines, orange for changed ones, and a red triangle where lines were deleted.

![Changed-line marks in the margin: an orange bar beside a modified line, a green bar beside an added one, and a red triangle where lines were deleted](screenshots/36-changed-lines.png)

## Note history

**Note → Show History…** (⇧⌘H) shows every version of the note, even across renames and moves. Pick a version to see what changed since then, or the note as it was.

![The history of Atlas Launch Plan: the list of versions on the left and, on the right, the lines changed since the selected version in red and green](screenshots/37-history.png)

**Restore This Version** brings back the selected version.

## Committing

**File → Commit Changes…** (⇧⌘K) lists every changed note. Type a message and press **Return** to commit, or leave the message empty to use the date and time.

![Commit Changes: the message field above the list of changed notes, with icons for how they changed](screenshots/38-commit.png)

Next: [Exporting](exporting.md)

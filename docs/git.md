---
title: 'git'
date: 2023-05-04 09:03
last_modified_at: 2023-06-20 22:01
tags:
    - command-line-tool
    - git
    - reviewed
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)

# git

## add

```shell
# Tell git you intend to add an untracked file.
git add -N file.txt

# Add all changes including untracked files.
git add -A

# Interactive adding.
git add [-p | --patch]
```

## bisect

### Identifying buggy commits

The bisect tool helps to identify the commit that introduced a bug.

To start, you need to tell git when the code last ran without problems:

```shell
git bisect start
git bisect bad
# Current commit has a bug.
git bisect good v2.1
# v2.1 passes the test.
```

`git` will then check out the commit that is halfway between the good and bad commits. You test the code and if there was no problem:

```shell
git bisect good
```

If there was a problem:

```shell
git bisect bad
```

You continue doing this until `git` identifies the first bad commit. When you finish you need to reset to the original state:

```shell
git bisect reset
```

Via [Enki](https://app.enki.com/public/insight/56c5a1823e75da0600154730).

## blame

```shell
# Show who authored each line in <file>.
git blame <file>

# Show who authored each line in <file> as of <rev>.
git blame <file> <rev>
```

## branch

```shell
# Move a branch.
git branch -m old_branch_name new_brach_name

# Move the current branch.
git branch -m new_brach_name

# List all local branches
git branch

# List branches that have been merged into your current branch.
git branch --merged

# List branches that have not been merged into your current branch.
git branch --no-merged

# List branches (including remote).
git branch [-a | --all]

# List remote branches.
git branch [-r | --remotes]

# See the last commit on each branch.
git branch -v

# Delete all Git branches that have been merged.
git branch --delete $(git branch --merged master --no-contains master --format='%(refname:short)')
```

## bundle

### Sharing data by bundling

As well as sharing `git` data over a network, you can also bundle the data into one file. The `bundle` command creates a binary file which you can email or physically transfer to another computer.

To create a file `myBundle` from your repository:

```text
git bundle create myBundle HEAD master
```

To access the commits on another computer:

```Shell
# Verify that the commit is valid before cloning.
git bundle verify myBundle

# Then use `git clone` to create a unbundled repo.
git clone myBundle bundled_repo
```

Via [Enki](https://app.enki.com/public/insight/56c5ab363e75da06001547cc).

## checkout

```shell
# Interactive checkout.
git checkout [-p | --partial]

# Move to the previous branch.
git checkout -
```

## clean

```shell
# Delete untracked files in the current directory.
git clean [-f | --force]

# Delete untracked files and directories recursively and interactively.
git clean [-i | --interactive] -d

# Don't actually remove anything, just show what would be done.
git clean [-n | --dry-run]

# Delete directories
git clean -d

# Delete ignored files as well.
git clean -x
```

## clone

```shell
# Clone a repo with submodules.
git clone --recursive <repo url>
```

## commit

```shell
# Fix last git commit and interactively rebase with auto-squashing.
git commit --fixup HEAD && git stash && git rebase -i HEAD~2 --autosquash

# Make changes to your most recent commit.
git commit --amend

# Include diff of committed changes in the commit message screen.
git commit -v

# Commit using contexts of file.
git commit [-F | --file] filename
# Commit using contexts of stdin.
git commit -F -
# Open commit message template in editor.
git commit --template=filename/-t filename 
```

### Empty commits

Commits can be pushed with no code changes by adding `--allow-empty`:

```shell
git commit -m "Empty commit" --allow-empty
```

Some use-cases for this (that make sense), include:

-   The first commit of a repository.
-   Annotating the start of a new bulk of work or a new feature.
-   Documenting when you make changes to the project that aren't code related.
-   Communicating with people using your repository.

### Commit messages

The seven rules of a [great git commit message](http://chris.beams.io/posts/git-commit/):

-   Separate subject from body with a blank line
-   Limit the subject line to 50 characters
-   Capitalize the subject line
-   Do not end the subject line with a period
-   Use the imperative mood in the subject line ("Merge branch")
-   Wrap the body at 72 characters
-   Use the body to explain what and why vs. how

## config

```shell
# Set global .gitignore file.
git config --global core.excludesfile ~/.gitignore_global

# Repo is accessible to all users.
git config core.sharedrepository [all | world | everybody]
# Repo is accessible only to all group members.
git config core.sharedrepository [group | true]
# Repo is accessible to users as determined by umask of files.
git config core.sharedrepository [umask | false]

# Set author name.
git config [--global] user.name "Name"
# Set author email.
git config [--global] user.email "a@b.com"

# List git config.
git config [-l | --list] [--global]

# Remove a setting.
git config --unset --global user.name

# Configure Git's colored terminal output.
# The default setting is `auto`, which colors output when it's going straight to a terminal, but omits the color-control codes when the output is redirected to a pipe or a file.
# You can also set it to `always` or `true` to ignore the difference between terminals and pipes.
# Set to `false` to turn color output off.
git config --global color.ui [auto | true | always | false]

git config --global merge.tool opendiff

# Warn about whitespace when you use `git diff`.
git config --global core.whitespace warn
```

### Autocorrect

```shell
git config --global help.autocorrect 30
```

Via [Enki](https://app.enki.com/public/insight/56b9cd144a409006009087c6).

### Caching credentials

```shell
git config --global credential.helper 'cache --timeout=300'  # In seconds.
```

Via [jbranchaud](https://github.com/jbranchaud/til/blob/master/git/caching-credentials.md).

## count-objects

```shell
# Count unpacked number of objects and their disk consumption.
git count-objects

# Report in more detail and in human readable format.
git count-objects --human-readable --verbose
```

## diff

```shell
# Diff between two commits.
git diff HEAD~2 HEAD~1

# Show you the difference between that COMMIT's ancestor and the COMMIT.
git diff COMMIT^ COMMIT

# Differences between file from two different commits.
git diff <revision_1>:<file_1> <revision_2>:<file_2>

# Show you the size of your branch's diff from main. Under 400 lines is best.
git diff --shortstat origin/main
```

## fetch

```shell
# Prune remote-tracking branches for the origin remote.
git fetch --prune origin

```

## log

```shell
# Greping commit messages.
git log --grep="#123"

# Limit log output to a specific time period.
git log [--since | --after]="last month"
git log [--until | --before]="3 hours ago"

# Show color.
git log --color

# Include an ASCII-art commit graph.
git log --graph

# Include branch and tag names.
git log --decorate

# Include stats (files changed, insertions, and deletions).
git log --stat

# Include full diffs.
git log [-p | --patch]

# Filter by author.
git log --author=foo

# Filter by date.
git log --after="MMM DD YYYY"
git log --before="MMM DD YYYY"

# Only show commits involved in current merge conflicts.
git log --merge

git log --oneline
git log --pretty=oneline
git log --pretty=short
git log --pretty=full
git log --pretty=fuller

# See https://git-scm.com/docs/pretty-formats for format options.
git log --format="%Cgreen%h%Creset %an"
```

### Show the history of a function or line of code

```shell
git log -L :myFunction:myFile.js
```

This will show all the changes made to myFunction in the file `myFile.js` as a series of patches. Then `git` will attempt to work out the bounds of the function. You can also give the tool a range of lines to search for.

Via [Enki](https://app.enki.com/public/insight/56c48439bb514406009a8dd6).

## ls-files

```shell
# List only untracked files.
git ls-files --others --exclude-standard
```

## merge

```shell
# Aborting a merge with conflicts.
git merge --abort

# Append one-line commit message from all commits in the branch to be merged to the commit message.
# Makes it easier to remember what you've done.
git merge --log

# Merge if fast-forward is possible and without message.
git merge --ff-only --no-commit name_of_branch
```

## notes

```shell
# Link a note to the current commit.
git notes add -m "Test note"

# Link a multiline long note.
git notes add
```

## pull

```shell
# Recursively update submodules.
git pull --recurse-submodules
```

## push

```shell

# Rename the upstream branch.
# First delete the branch with the old name.
git push origin :old_branch_name
# Or
git push origin --delete old_branch_name
# Next push the new branch and set it as the upstream branch.
git push --set-upstream origin new_brach_name

# Rename the upstream branch in one line.
git push --set-upstream origin :old_branch_name new_branch_name

# Update remote tags with local tags.
git push --tags

# Push a single tag.
git push origin [tagname]

# Git doesn’t push/pull notes by default.
# You can explicitly handle remote notes with the following commands.
git push <remote> refs/notes/*  
git fetch origin refs/notes/*:refs/notes/*
```

### force-with-lease

Instead of using `—-force`, use `--force-with-lease`:

```text
$ git push --force-with-lease origin master
```

To summarize Git's [documentation](https://git-scm.com/docs/git-push#git-push---force-with-leaseltrefnamegt), using `force-with-lease` tells `git` to check whether the remote repo is the same as the one you're trying to push up. If it isn't, `git` will throw an error instead of blindly overwriting the remote repo. This will save you from accidentally overwriting work that you don't intend to.

Via [medium.freecodecamp.com](https://web.archive.org/web/20170531085421/https://medium.freecodecamp.com/git-please-a182f28efeb5).

## rebase

```shell
# Interactive rebase last two commits.
git rebase -i HEAD~2
```

## reflog

```shell
# List all commits containing foo.txt.
git reflog -- foo.txt
```

## rev-parse

```shell
# Get the current commit.
git rev-parse HEAD
```

## shortlog

```shell
# Produce a top-contributor list with their emails.
git shortlog --email --numbered --summary
```

## show

```shell
git show --name-only

git show --oneline
```

## stash

```shell
# Stash just unstaged changes.
git stash [-k | --keep-index]

# Stash including untracked files.
git stash [-u | --include-untracked]

# Interactive stashing.
git stash [-p | --patch]
```

## status

```shell
# Get a simplified status output.
git status [-s | --short]
```

## submodule

```shell
# Add a submodule within existing git repo.
git submodule add <repo url> repo
```

## switch

```shell
# Go back to previous branch.
git switch -
```

## tag

```shell
# List all tags.
git tag

# List all tags start with v1.4 - note the quotes are required.
git tag -l 'v1.4.*'

# Create annotated, gpg-signed tag.
git tag --annotate --sign v2.1.0 --message 'Version 2.1.0'

# Create annotated, gpg-signed tag from a previous commit.
git tag --annotate --sign v2.1.0 --message 'Version 2.1.0' 9fceb02

```

## Miscellaneous

### Running git commands in another directory

`git` has `-C`, `--work-tree` and `--git-dir` options, but these are not always respected. Instead just use a subshell:

```shell
(cd /other/path && git push)
ssh machine "(cd /other/path && git pull)"
```

### Git keep files

Git cannot add a completely empty directory. People who want to track empty directories in Git have created the convention of putting files called `.gitkeep` in these directories. The file could be called anything; Git assigns no special significance to this name.

Via [Stack Overflow](http://stackoverflow.com/a/7229996/1257318).

### Verbose output

```shell
GIT_CURL_VERBOSE=1 GIT_TRACE=1 git clone <repo url>
```

Via [haacked.com](http://haacked.com/archive/2014/07/28/github-flow-aliases/).

## Links

* [Git pretty formats](https://git-scm.com/docs/pretty-formats).

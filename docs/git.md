---
title: 'git'
date: 2023-05-04 09:03
last_modified_at: 2023-05-04 09:03
tags:
    - command-line-tool
    - git
---

# git

## Miscellaneous

## commit

```shell
# Fix last git commit and interactively rebase with auto-squashing.
git commit --fixup HEAD && git stash && git rebase -i HEAD~2 --autosquash
```

### Commit messages

The seven rules of a [great git commit message](http://chris.beams.io/posts/git-commit/%3E):

-   Separate subject from body with a blank line
-   Limit the subject line to 50 characters
-   Capitalize the subject line
-   Do not end the subject line with a period
-   Use the imperative mood in the subject line ("Merge branch")
-   Wrap the body at 72 characters
-   Use the body to explain what and why vs. how

## log

```shell
# Greping commit messages.
git log --grep="#123"
```

## ls-files

```shell
# List only untracked files.
git ls-files --others --exclude-standard
```

## merge

```shell
# Aborting a merge with conflicts.
git merge --abort
```

## push

### force-with-lease

Instead of using `—-force`, use `--force-with-lease`:

```text
$ git push --force-with-lease origin master
```

To summarize Git's [documentation](https://git-scm.com/docs/git-push#git-push---force-with-leaseltrefnamegt), using `force-with-lease` tells `git` to check whether the remote repo is the same as the one you're trying to push up. If it isn't, `git` will throw an error instead of blindly overwriting the remote repo. This will save you from accidentally overwriting work that you don't intend to.

Via [medium.freecodecamp.com](https://medium.freecodecamp.com/git-please-a182f28efeb5#.r7fhgucxh).

## stash

```shell
# Stash just unstaged changes.
git stash [-k | --keep-index]

# Stash including untracked files.
git stash [-u | --include-untracked]
```

## tag

```shell
# Create annotated, signed tag.
git tag --annotate --sign v2.1.0 --message 'Version 2.1.0'
```

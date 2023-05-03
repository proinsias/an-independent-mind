---
tags:
    - command-line-tool
    - git
---

```shell
# Fix last git commit and interactively rebase with auto-squashing.
git commit --fixup HEAD && git stash && git rebase -i HEAD~2 --autosquash

# Create annotated, signed tag.
git tag --annotate --sign v2.1.0 --message 'Version 2.1.0'
```

---
title: "pre-commit"
date: 2023-06-06 16:28
last_modified_at: 2023-06-06 16:32
tags:
  - command-line-tool
  - git
  - pre-commit
---

### [git](git.md)

# pre-commit

## Miscellaneous

```shell
brew install pre-commit

pre-commit --version
pre-commit sample-config > .pre-commit-config.yaml
pre-commit install  

# Run on all files, not just changed files.  
pre-commit run --all-files  

# You can update your hooks to the latest version automatically.  
# By default, this will bring the hooks to the latest tag on the default branch.  
pre-commit autoupdate  

# To run individual hooks  
pre-commit run <hook_id>  
# For some reason, you have to install hook types individually  
for type in pre-commit pre-merge-commit pre-push prepare-commit-msg commit-msg post-commit post-checkout post-merge;  
do  
pre-commit install -t $typedone  
  
# Setup pre-commit by default for git repos  
git config --global init.templateDir ~/.git-template
# This uses the `--allow-missing-config` option from pre-commit install  
# so repos without a config will be skipped.  
  
# pre-commit can also be used as a tool for continuous integration.  
# For instance, adding:  
pre-commit run --all-files
# as a CI step will ensure everything stays in tip-top shape.  
# To check only files which have changed, which may be faster,  
# use something like:  
pre-commit run --from-ref origin/HEAD --to-ref HEAD

git commit -m "Skipping all git hooks" --no-verify
SKIP=hook_id git commit -m "Skipping individual git hook"
```

## Links

* [Main website](https://pre-commit.com).

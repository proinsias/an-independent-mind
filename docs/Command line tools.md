---
title: 'Command line tools'
date: 2023-05-04 09:13
last_modified_at: 2023-05-06 04:16:24
tags:
    - command-line-tool
---

# Command line tools

## Miscellaneous

### Split a file into multiple files

```shell
file="filename.md"
basename="${file%.*}"

split --lines 500 --numeric-suffixes --additional-suffix=.md "${file}" "${basename}"
# Sample output:
# filename00.md filename01.md
```

## Links

-   [license-up](https://github.com/nikitavoloboev/license-up): Create a license quickly.

---
title: 'tr'
date: 2023-05-07 20:35
last_modified_at: 2023-05-17 10:00
tags:
    - command-line-tool
    - programming
---

### [\*nix](*nix.md)

# tr

## Miscellaneous

```shell
# Convert all input to upper case.
ls | tr a-z a-z

# Take the output and put into a single line.
ls | tr  "\n" " "

# Get rid of all numbers.
ls -lt | tr -d 0-9
```

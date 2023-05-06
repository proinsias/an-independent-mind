---
tags:
    - command-line-tool
    - operating-system
date: 2023-05-06 00:18
last_modified_at: 2023-05-06 00:42
---
[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Operating systems MOC](Operating%20systems%20MOC.md)

## Command line

### Split a file into multiple files

```shell
file="filename.md"
basename="${file%.*}"

split --lines 500 --numeric-suffixes --additional-suffix=.md "${file}" "${basename}"
# Sample output:
# filename00.md filename01.md
```

---
title: 'tr'
date: 2023-05-07 20:35
last_modified_at: 2023-05-26 14:08
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

# Encrypt some text as ROT13 (move each letter forward in the alphabet by 13 places).
echo 'Hello this is a test' | tr 'A-Za-z' 'N-ZA-Mn-za-m'

# Now decrypt.
echo 'Uryyb guvf vf n grfg' | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

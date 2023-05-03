---
tags:
    - command-line-tool
    - cspell
    - spelling
---

```shell

# Create cspell project words file.
cspell --words-only --unique --no-summary --no-progress ** | sort --ignore-case > project-words.txt
```

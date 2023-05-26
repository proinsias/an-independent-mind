---
title: "jq"
date: 2023-05-26 10:43
last_modified_at: 2023-05-26 10:48
tags:
  - command-line-tool
  - jq
---

### [Command line tools MOC](Command%20line%20tools%20MOC.md)

# jq

## Delete element(s)

```shell
# Delete elements in place using sponge.
jq 'del(."field-one", .fieldtwo)' file.json | sponge file.json
```

## Element length

```shell
jq '.topElement.bottomElement|length' file.json
```

## Miscellaneous

## Links

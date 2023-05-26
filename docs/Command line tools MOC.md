---
title: 'Command line tools'
date: 2023-05-04 09:13
last_modified_at: 2023-05-26 10:42
tags:
    - command-line-tool
---

# Command line tools MOC

```dataview
list
from [[]] and !outgoing([[]])
where file.name != "README"
```

## Miscellaneous

### wttr.in

```
# Get weather for current location.
curl --silent wttr.in
# Get weather for specific location.
curl --silent wttr.in/Baltimore,MD
```

### shuf

```
# Randomly shuffle lines from file.
shuf file.txt
# Randomly shuffle arguments.
shuf --echo arg1 arg2 arg3
# Randomly shuffle numbers in range.
shuf --input-range=1-10
```

## Links

-   [shot-scraper](https://shot-scraper.datasette.io/en/stable/index.html): A command-line utility for taking automated screenshots of websites.
-   [wifi-password](https://github.com/rauchg/wifi-password): Get the password of the wifi you're on.

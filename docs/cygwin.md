---
title: 'cygwin'
date: 2023-05-04 09:03
last_modified_at: 2023-05-16 22:25
tags:
    - cygwin
    - windows
---

[windows](windows.md)

# cygwin

## Miscellaneous

To open the current `cygwin` folder in [windows](windows.md) Explorer, type:

```shell
explorer .
```

List [windows](windows.md) processes in `cygwin`:

```text
ps -W
```

To mute the following warning:

```shell
cygwin warning: MS-DOS style path detected:
```

set the `CYGWIN` environment variable to `nodosfilewarning` via the System control panel.

List installed `cygwin` packages:

```shell
cygcheck -c
```

To open a file from `cygwin` as if you had double-clicked on it, use:

```shell
cygstart
```

To list `cygwin` Installed packages (via [cygwin.com](http://cygwin.com/cygwin-ug-net/using-utils.html)):

```text
cygcheck -c -d
```

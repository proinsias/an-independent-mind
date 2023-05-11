---
title: "windows"
date: 2023-05-04 09:06
last_modified_at: 2023-05-11 10:11
tags:
  - operating-system
  - windows
---

# Windows

```dataview
list from [[]] and !outgoing([[]])
```

## Miscellaneous

The windows environmental variables are set in the System Properties Control Panel, Advanced Tab.
The `PATH` variable here should include `%HOME%\\bin`.
Note the `"%%"` instead of the `"$"`, and the `";"` instead of the `":"`.

To type a pound symbol in Windows, type `Alt-0163`.

In order to take a screenshot, use `Alt-Print Screen`, and then paste into `Accessories > Paint`. Save as PNG. It will save a screenshot of the front-most window.

`Ctrl-Shift-Esc` brings up Task Manager normally. To get Task Manager under Remote Desktop, use `Ctrl-Alt-End`, rather than `Ctrl-Alt-Delete`.

To update the IP address: `ipconfig /release` then `ipconfig /renew`.

## Chocolatey

[chocolatey](http://chocolatey.org/) is basically apt-get for Windows.

Some useful commands:

```text
cup all # update all installed packages
cver all -localonly # see what versions of what packages are installed
```

For Chocolately, some packages need me to specify `$env:ChocolateyBinRoot` as an environment variable. Set to `C:/ProgramData/chocolatey/bin`.

```text
export ChocolateyBinRoot="ProgramData/chocolatey/bin"
export chocolatey_bin_root="ProgramData/chocolatey/bin"
```

## Fix windows permissions from command line

Run in cmd prompt with elevated privileges:

```text
cd C:\Users\username
icacls * /reset /T
```

The `/T` switch makes it run recursively. `/reset`, as the KB article explains, replaces the ACL on each file and folder with the default inherited ACL that just uses the ACL on the parent folder.

Via [Microsoft's knowledge base article on icacls.exe](http://technet.microsoft.com/en-us/library/cc753525%28WS.10%29.aspx).

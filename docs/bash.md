---
title: "bash"
date: 2023-05-23 16:34
last_modified_at: 2023-06-20 14:47
tags:
  - bash
  - nix
  - reviewed
---

### [*nix](*nix.md)

# bash

## bash

```shell
# Start shell without any configuration.
env --ignore-environment bash --noprofile --norc

# Start shell with only system-wide configuration.
env --ignore-environment bash --rcfile /etc/profile
```

## Shortcuts

```shell
!!  # Repeat last command.
!$  # Repeat the last argument of the last command.
!:1-$  # Repeat all the arguments of the last command.
!*  # Equivalent, but without the possibility of subselection of arguments.
!$:h  # The :h applies `dirname` to the argument.
```

## Miscellaneous

## Links

- [Bash retry function with exponential backoff](https://gist.github.com/sj26/88e1c6584397bb7c13bd11108a579746).
- [Type-ish](https://github.com/Mythra/typeish) - Runtime type checker for bash functions, implemented entirely in bash.
- [Variant](https://github.com/mumoshu/variant2) - Turn your bash scripts into a modern, single-executable CLI app.
- [Ten Things I Wish I’d Known About bash](https://zwischenzugs.com/2018/01/06/ten-things-i-wish-id-known-about-bash/).

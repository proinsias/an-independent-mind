---
tags:
    - command-line-tool
    - nix
    - operating-system
date: 2023-05-06 00:18
last_modified_at: 2023-05-26 10:49
---

[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Operating systems MOC](Operating%20systems%20MOC.md)

## Command line

```shell
# Get the full path to file.txt.
realpath file.txt

# Get current process PID.
echo $$
```

### Split a file into multiple files

```shell
file="filename.md"
basename="${file%.*}"

split --lines 500 --numeric-suffixes --additional-suffix=.md "${file}" "${basename}"
# Sample output:
# filename00.md filename01.md
```

### List all commands/aliases/functions installed in $PATH

```shell
# List all commands installed in $PATH.
print -l $commands

# List all commands/aliases installed in $PATH.
whence -m \*

# List all commands/aliases/functions installed in $PATH.
print -rl - ${(k)builtins} ${(k)functions} ${(k)commands}
```

### shuf

```shell
# Randomly shuffle lines from file.
shuf file.txt
# Randomly shuffle arguments.
shuf --echo arg1 arg2 arg3
# Randomly shuffle numbers in range.
shuf --input-range=1-10
```

### sponge

Soak up standard input and write to a file.

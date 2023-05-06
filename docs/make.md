---
title: 'make'
date: 2023-05-04 09:04
last_modified_at: 2023-05-06 00:33
tags:
    - command-line-tool
    - make
    - programming-language
---
[Command line tools MOC](Command%20line%20tools%20MOC.md)
[Programming languages MOC](Programming%20languages%20MOC.md)

# Make

## Notable make options

```shell
# Unconditionally make all targets.
make --always-make
# Present debugging info - can provide additional flags.
make --debug
# Give variables taken from the environment precedence over variables from makefiles.
make --environment-overrides
# Use FILE as a makefile.
make --makefile=FILE
# Ignore all errors in commands executed to remake.
make --ignore-errors files
# Specifies a directory dir to search for included makefiles.
make --include-dir=dir
# Make will execute many recipes simultaneously..
make --jobs
# Continue as much as possible after an error.
make --keep-going
# Print the commands that would be executed, but do not execute them.
make --dry-run
# Return an exit status that is zero if the specified targets are already up to date.
make --question
# Do not print the commands as they are executed.
make --quiet
# Mark files up to date without really changing them.
make --touch
```

Via [GNU.org](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html).

## Phonies

A phony target is one that is not really the name of a file; rather it is just a name for a recipe to be executed when you make an explicit request. There are two reasons to use a phony target: to avoid a conflict with a file of the same name, and to improve performance.

If you write a rule whose recipe will not create the target file, the recipe will be executed every time the target comes up for remaking. Here is an example:

```text
clean:
        rm *.o temp
```

Because the `rm` command does not create a file named `clean`, probably no such file will ever exist. Therefore, the `rm` command will be executed every time you say `make clean`.

In this example, the `clean` target will not work properly if a file named `clean` is ever created in this directory. Since it has no prerequisites, `clean` would always be considered up to date and its recipe would not be executed. To avoid this problem you can explicitly declare the target to be phony by making it a prerequisite of the special target `.PHONY` as follows:

```text
.PHONY: clean
clean:
        rm *.o temp
```

Once this is done, `make clean` will run the recipe regardless of whether there is a file named `clean`.

Phony targets can have prerequisites. When one directory contains multiple programs, it is most convenient to describe all of the programs in one makefile ./Makefile. Since the target remade by default will be the first one in the makefile, it is common to make this a phony target named 'all' and give it, as prerequisites, all the individual programs. For example:

```text
all : prog1 prog2 prog3
.PHONY : all

prog1 : prog1.o utils.o
        cc -o prog1 prog1.o utils.o

prog2 : prog2.o
        cc -o prog2 prog2.o

prog3 : prog3.o sort.o utils.o
        cc -o prog3 prog3.o sort.o utils.o
```

Now you can say just `make` to remake all three programs, or specify as arguments the ones to remake (as in `make prog1 prog3`).

Via [GNU.org](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html).

## Setting default values for optional variables in Makefiles

```text
BINDIR ?= /usr/local/bin
```

Then when you run `make`, the default value for `BINDIR` will be `/usr/local/bin`, but this can be overrided, e.g.:

```text
make BINDIR=/usr/bin
```

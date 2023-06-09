---
title: 'Python'
date: 2023-05-04 09:05
last_modified_at: 2023-06-20 14:49
tags:
    - programming
    - reviewed
---

[Programming MOC](Programming%20MOC.md)

# Python

```dataview
list from [[]] and !outgoing([[]])
```

## Dictionary

```python
# Create dictionary from two lists.
dict(zip(keys, values))
# or
{key: value for key, value in zip(keys, values)}
```

## Enum

```python
# List names of enum elements.
[e.name for e in Color]
# List values of enum elements.
[e.value for e in Color]
```

## Miscellaneous

### Running python scripts with the ‘i’ option

If you run a script using the `-i` option: `python -i hello.py`, there are some advantages:

* Firstly, once the end of the program is reached, `python` doesn’t exit the interpreter. As such we can check the values of the variables and the correctness of the functions defined in our program.
* Secondly, we can easily invoke a python debugger since we are still in the interpreter: `import pdb; pdb.pm()`.
* 
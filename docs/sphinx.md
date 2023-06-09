---
title: 'sphinx'
date: 2023-05-04 09:05
last_modified_at: 2023-06-20 14:49
tags:
    - python
    - sphinx
    - reviewed
link: https://www.sphinx-doc.org/
---

[Python](Python.md)

# Sphinx

### Quickstart

From [docs](https://www.sphinx-doc.org/en/master/usage/installation.html):

-   Installing on mac:

```text
brew install sphinx-doc
```

-   Quickstart:

```bash
sphinx-quickstart doc \
    --project forecaster \
    --release 47 \
    --language en \
    --ext-autodoc \
    --ext-doctest \
    --ext-todo \
    --ext-coverage \
    --ext-mathjax \
    --ext-ifconfig \
    --ext-viewcode

cd doc

make html
```

-   Also installing `sphinx_autodoc_typehints`.

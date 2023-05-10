---
title: "poetry"
date: 2023-05-04 09:04
last_modified_at: 2023-05-10 08:11
tags:
  - poetry
  - python
link: https://python-poetry.org
---

[Python](Python.md)

# poetry

## Miscellaneous

```shell
pipx install poetry

# Create new project with poetry environment.
poetry new poetry-demo
# Or initialize poetry environment for existing project.
poetry init

# Add a dependency to the list to install.
poetry add pendulum

# Run a python script within the poetry environment.
poetry run python your_script.py

# Run a python cli tool within the poetry environment.
poetry run pytest

# Create a new shell. Exit using `exit`.
poetry shell

# Or manually activate the virtual environment. Exit using `deactivate`.
source {path_to_venv}/bin/activate
# or
source`poetry env info --path`/bin/activate

# Install dependencies.
poetry install

# Update dependencies.
poetry update
```

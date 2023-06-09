---
title: "Jupyter"
date: 2023-05-25 20:36
last_modified_at: 2023-06-21 10:35
tags:
  - data-science
  - jupyter
  - python
  - reviewed
---

### [Data science MOC](Data%20science%20MOC.md)

# Jupyter

## JupyterLab extensions

* [ipywidgets](https://github.com/jupyter-widgets/ipywidgets): interactive widgets.
* [jupyterlab_execute_time](https://github.com/deshaw/jupyterlab-execute-time): display cell timings.
* [jupyterlab-git](https://github.com/jupyterlab/jupyterlab-git): git.
* [jupyter-scheduler](https://github.com/jupyter-server/jupyter-scheduler) run Jupyter notebooks as jobs.
* [nbdime](https://github.com/jupyter/nbdime): tools for diffing and merging of Jupyter notebooks.
* [plotly.py](https://github.com/plotly/plotly.py): support for the plotly tool.

## Magic commands

```python
# If you get an exception while running the code cell
# type `%debug` in a new line and run it.
# This opens an interactive debugging environment
# that brings you to the position where the exception has occurred.
# To exit the debugger hit `q`.
%debug

# Toggle doctest mode on and off.
# This mode is intended to make IPython behave
# as much as possible like a plain Python shell,
# from the perspective of how its prompts, exceptions and output look.
# This makes it easy to copy and paste parts of a session into doctests.
%doctest_mode

# Print input history with most recent last.
%history

# Render the cell contents as LaTeX.
%%latex

# Render static matplotlib plots within the Jupyter notebook.
%matplotlib inline

# Render zoom-able & resize-able plots.
%matplotlib notebook

# Uploads code to Pastebin and return the URL.
%pastebin file.py

%run file.py

%writefile file.py
```

## Notes

```python
# Blue Alert Box: info.
<div class="alert alert-block alert-info">
<b>Tip:</b> Use blue boxes (alert-info) for tips and notes. 
If it’s a note, you don’t have to include the word “Note”.
</div>

# Yellow Alert Box: Warning.
<div class="alert alert-block alert-warning">
<b>Example:</b> Yellow Boxes are generally used to include additional examples or mathematical formulas.
</div>

# Green Alert Box: Success.
<div class="alert alert-block alert-success">
Use green box only when necessary like to display links to related content.
</div>

# Red Alert Box: Danger.
<div class="alert alert-block alert-danger">
It is good to avoid red boxes but can be used to alert users to not delete some important part of code etc. 
</div>
```

## Printing all the outputs of a cell

It is a normal property of the cell that only the last output gets printed and for the others, we need to add the `print()` function. Well, it turns out that we can print all the outputs just by adding the following snippet at the top of the notebook.

```python
from IPython.core.interactiveshell import InteractiveShell  InteractiveShell.ast_node_interactivity = "all"
```

To revert to the original setting :

```python
InteractiveShell.ast_node_interactivity = "last_expr"
```



## Links

* [10 Simple hacks to speed up your Data Analysis in Python](https://towardsdatascience.com/10-simple-hacks-to-speed-up-your-data-analysis-in-python-ec18c6396e6b).
* [Built-in magic commands¶](https://ipython.readthedocs.io/en/stable/interactive/magics.html).

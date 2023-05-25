---
title: 'pandas'
date: 2023-05-04 09:04
last_modified_at: 2023-05-22 20:05
tags:
    - pandas
    - python
---

[Python](Python.md)

# pandas

## Groups

```python
# List the 

# Get the DataFrame where the 'A' column is equal to 'foo'.
df.groupby('A').get_group('foo')
```

## Nulls

```python
# Check for columns in a pandas DataFrame that contain nulls.
df.columns[pd.isnull(df).sum() > 0]

# Check for null data in pandas DataFrame.
df.isnull().any().any()
```

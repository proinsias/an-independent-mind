---
title: 'pandas'
date: 2023-05-04 09:04
last_modified_at: 2023-05-25 16:12
tags:
    - pandas
    - python
---

[Python](Python.md)

# pandas

## Categories

Missing values should **not** be included in the Categorical’s `categories`, only in the `values`. Instead, it is understood that `np.nan` is different, and is always a possibility. When working with the Categorical’s `codes`, missing values will always have a code of `-1`.

The memory usage of a `Categorical` is proportional to the number of categories plus the length of the data. In contrast, an `object` dtype is a constant times the length of the data.

```python
In [1]: s = pd.Series(["foo", "bar"] * 1000)

# object dtype
In [2]: s.nbytes
Out[2]: 16000

# category dtype
In [3]: s.astype("category").nbytes
Out[3]: 2016
```

```python
# List the possible categorical values for a series with "category" dtype.
s.cat.categories

# Set list of categories.
s = s.cat.set_categories(new_categories)

# Rename list of categories.
s = s.cat.rename_categories(new_categories)

# Add new category values.
s = s.cat.add_categories([4])

# Remove category values - values which are removed are replaced by `np.nan`.
s = s.cat.remove_categories([4])

# Remove unused category values.
s = s.cat.remove_unused_categories()
```

## Groups

```python
# List the possible group names.
list(g.groups.keys()

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

## Series

```python
# Return the number of bytes in the series.
s.nbytes
```

---
title: "pandas"
date: 2023-05-04 09:04
last_modified_at: 2023-05-11 09:18
tags:
  - pandas
  - python
---

[Python](Python.md)

# pandas

## Miscellaneous

```python
# Check for columns in a pandas DataFrame that contain nulls.
df.columns[pd.isnull(df).sum() > 0]

# Check for null data in pandas DataFrame.
df.isnull().any().any()
```

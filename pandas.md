---
tags:
    - pandas
    - python
---

```python
# Check for columns in a pandas DataFrame that contain nulls.
df.columns[pd.isnull(df).sum() > 0]

# Check for null data in pandas DataFrame.
df.isnull().any().any()
```

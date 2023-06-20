---
date: 2023-05-05 00:30
last_modified_at: 2023-06-20 14:44
tags:
  - reviewed
---

## Items needing review

### Items marked as toreview but not incomplete

```dataview
LIST 
FROM #toreview 
AND -#incomplete
SORT file.mtime DESC
```
### Items not marked as reviewed, toreview, or incomplete
```dataview
LIST 
FROM -#reviewed
AND -#toreview
AND -#incomplete
SORT file.mtime DESC
```

---
date: 2023-05-16 20:14
last_modified_at: 2023-05-22 19:10
---

# Books MOC

```dataview

table
    author as Author
    , date as "Date Finished"
    , tags as "Tags"
    , grade as "Grade"

from "docs/Books"

where file.name != "Books MOC"

SORT title ascending

```

# Secret to Optimizing SQL Queries - Understand the SQL Execution Order 🚀

![rw-book-cover](https://dev.to/social_previews/article/1488018.png)

## Metadata
- Author: [[DEV Community]]
- Full Title: Secret to Optimizing SQL Queries - Understand the SQL Execution Order 🚀
- Category: #articles
- URL: https://dev.to/kanani_nirav/secret-to-optimizing-sql-queries-understand-the-sql-execution-order-28m1

## Highlights
- The execution order of this query is as follows:
  1. **FROM Clause**: The first step is to identify the tables involved in the query. In this case, they are customers and orders.
  2. **JOIN Clause**: The next step is to perform the join operation based on the join condition. In this case, it is customers.id = orders.customer_id, which connects the two tables by matching customer IDs.
  3. **WHERE Clause**: The third step is to apply the filter condition to the joined table. In this case, it is order_date >= '2023-01-01', which selects only orders made on or after January 1, 2023. Now, it's important to write a SARGABLE query to leverage indexes effectively, SARGABLE means Searched ARGUment ABLE and it refers to queries that can use indexes for faster execution. We Deep-Dive into SARGABLE Queries later in the article post.
  4. **GROUP BY Clause**: The fourth step is to group the rows by the specified columns. In this case, it is customers.name, which creates groups based on customer names.
  5. **HAVING Clause**: The fifth step is to filter the groups by a condition. In this case, it is total_spent >= 1000, which selects only groups with a total spent amount of 1000 or more.
  6. **SELECT Clause**: The sixth step is to select the columns and aggregate functions from each group. In this case, they are customers.name, COUNT(order_id) as Total_orders, and SUM(order_amount) as total_spent.
  7. **ORDER BY Clause**: The seventh step is to sort the rows by the specified columns. In this case, it is customers.name, which sorts the rows alphabetically by customer names.
  8. **LIMIT Clause**: The final step is to skip a number of rows from the sorted result set. In this case, it limits the result to a maximum of 100 rows. ([View Highlight](https://read.readwise.io/read/01h2dmh36weh3wxcn5672wqxvs))
- **SARGABLE stands for Searched ARGUment ABLE** and it refers to queries that can use indexes for faster execution. Indexes are data structures that store a subset of columns from a table in a sorted order, allowing quick lookups and comparisons. ([View Highlight](https://read.readwise.io/read/01h2dmjaj693vnde71c73krsf6))
- A query is SARGABLE if it uses operators and functions that can take advantage of indexes. For example, using equality (=), inequality (<>, !=), range (BETWEEN), or membership (IN) operators on indexed columns can make a query SARGABLE. ([View Highlight](https://read.readwise.io/read/01h2dmj7g35nszqd87tcsjbvm9))
- A query is not SARGABLE if it uses operators or functions that prevent index usage or require full table scans. For example, using negation (NOT), wildcard (LIKE), or arithmetic (+, -, *, /) operators on indexed columns can make a query not SARGABLE. ([View Highlight](https://read.readwise.io/read/01h2dmjhkgjkzbtwgzrmewkpwj))
- To write SARGABLE queries, we should follow some general guidelines:
  • Avoid using functions on indexed columns in the WHERE clause, such as UPPER(), LOWER(), SUBSTRING(), etc.
  • Avoid using arithmetic operations on indexed columns in the WHERE clause, such as column + 1 > 10, column * 2 < 20, etc.
  • Avoid using negation operators on indexed columns in the WHERE clause, such as NOT IN, NOT LIKE, NOT EXISTS, etc.
  • Avoid using wildcard operators on indexed columns in the WHERE clause with leading wildcards (%), such as LIKE '%abc', LIKE '%xyz%', etc.
  • Use appropriate data types for columns and literals to avoid implicit conversions that can affect index usage. ([View Highlight](https://read.readwise.io/read/01h2dmk7z89cmzrqr3djc26c56))
- Bad: SELECT ... WHERE Year(myDate) = 2022 Fixed: SELECT ... WHERE myDate >= '01-01-2022' AND myDate < '01-01-2023' Bad: Select ... WHERE SUBSTRING(DealerName,4) = 'Ford' Fixed: Select ... WHERE DealerName Like 'Ford%' Bad: Select ... WHERE DateDiff(mm, OrderDate, GetDate ()) >= 30 Fixed: Select ... WHERE OrderDate < DateAdd(mm, -30, GetDate()) ([View Highlight](https://read.readwise.io/read/01h2eem71zv7z1689vgjkb3tsh))
- Use INNER JOIN instead of OUTER JOIN when possible, as it typically results in better performance. Consider the order of joining multiple tables to minimize the intermediate result set size. ([View Highlight](https://read.readwise.io/read/01h2een74q9f3hyvhvn3fnf7k7))
- Apply filtering conditions as early as possible in the query execution order using the WHERE clause. ([View Highlight](https://read.readwise.io/read/01h2eenxz05c0a4pd633bgzatd))

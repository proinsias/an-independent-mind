# 10 Ways to Improve Your Python Application’s Performance

![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/0*bZWXJsT4Mv3Fx7mV)

## Metadata
- Author: [[Harsha Vardhan]]
- Full Title: 10 Ways to Improve Your Python Application’s Performance
- Category: #articles
- URL: https://betterprogramming.pub/10-ways-to-improve-your-python-applications-performance-78e697e8dc2a

## Highlights
- To sort in Python, avoid using the default sort function. Instead, utilize keys, which are always superior from an optimization standpoint, and work for both strings and integers. We are passing one index value to `item.getter` in the preceding snippet. I passed “0” in this case. When I change it, the output will be changed based on the index.
  import operatorli = [(1, 5, 8), (6, 2, 4), (9, 7, 5)]li.sort(key = operator.itemgetter(0))print("Sorted output basis of keys", li) ([View Highlight](https://read.readwise.io/read/01h2y76v9vzra6sx4eca2npxbd))

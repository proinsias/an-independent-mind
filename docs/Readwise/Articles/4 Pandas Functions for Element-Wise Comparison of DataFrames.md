# 4 Pandas Functions for Element-Wise Comparison of DataFrames

![rw-book-cover](https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)

## Metadata
- Author: [[Soner Yıldırım]]
- Full Title: 4 Pandas Functions for Element-Wise Comparison of DataFrames
- Category: #articles
- URL: https://towardsdatascience.com/4-pandas-functions-for-element-wise-comparison-of-dataframes-c7e06e51d399?source=rss----7f60cf5620c9---4

## Highlights
- The `combine` function does an element-wise comparison based on the given function.
  For instance, we can select the maximum value out of two values for each position ([View Highlight](https://read.readwise.io/read/01h2jwcsamc65t8y6a7kc7bn0s))
- combined_df = df1.combine(df2, np.maximum ([View Highlight](https://read.readwise.io/read/01h2jwcw13wzeza97hfp0xajne))
- If one of the values is `NaN` (i.e. missing value), the combined DataFrame at this position has `NaN` as well because Pandas can’t compare a value with a missing value.
  We can choose a constant value to be used in the case of missing values by using the `fill_value` parameter. Missing values are filled with this value before comparing them to the values in the other DataFrame.
  combined_df = df1.combine(df2, np.maximum, fill_value=0) ([View Highlight](https://read.readwise.io/read/01h2jwden6kkj51cets7sthm58))

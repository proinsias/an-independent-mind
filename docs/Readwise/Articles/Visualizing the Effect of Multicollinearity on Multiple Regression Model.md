# Visualizing the Effect of Multicollinearity on Multiple Regression Model

![rw-book-cover](https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)

## Metadata
- Author: [[Boriharn K]]
- Full Title: Visualizing the Effect of Multicollinearity on Multiple Regression Model
- Category: #articles
- URL: https://towardsdatascience.com/visualizing-the-effect-of-multicollinearity-on-multiple-regression-model-8f323ef542a9?source=rss----7f60cf5620c9---4

## Highlights
- **How to detect multicollinearity?**
  ### VIF (Variance Inflation Factor) equation: 
  VIF = 1/(1 - Rᵢ²) ([View Highlight](https://read.readwise.io/read/01h2s1k11y13nk3fe201bzf3f2))
- We can use VIF (Variance Inflation Factor) to estimate how much the variance of a regression coefficient is inflated due to multicollinearity. ([View Highlight](https://read.readwise.io/read/01h2s1jxdtabzjserpv0g82jwq))
- The following criteria can be used to interpret the result:
  #1 : not correlated 
  #1–5 : moderately correlated 
  #> 5 : highly correlated ([View Highlight](https://read.readwise.io/read/01h2s1k9ggm5fe6ate0zfsnj9n))
- Continue with plotting a [heat map](https://seaborn.pydata.org/generated/seaborn.heatmap.html) to show the correlation among the variables.
  plt.figure(figsize=(9, 6)) 
  sns.heatmap(df.corr(), cmap='coolwarm', annot=True) 
  plt.show() ([View Highlight](https://read.readwise.io/read/01h2s1nbpvepa6smh9ar8aq7j4))
- calculating the VIF values with the [Statsmodels](https://www.statsmodels.org/dev/generated/statsmodels.stats.outliers_influence.variance_inflation_factor.html) library.
  from statsmodels.stats.outliers_influence import variance_inflation_factor as vif 
  vif_data = pd.DataFrame() 
  vif_data["feature"] = df.columns 
  # calculating VIF for each feature 
  vif_data["VIF"] = [vif(df.values, i) for i in range(len(df.columns))] 
  print(vif_data) ([View Highlight](https://read.readwise.io/read/01h2s1nw84qfmgexgn2b9bn125))

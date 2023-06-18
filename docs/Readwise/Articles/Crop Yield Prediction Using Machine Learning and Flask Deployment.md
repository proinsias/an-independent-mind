# Crop Yield Prediction Using Machine Learning and Flask Deployment

![rw-book-cover](https://www.analyticsvidhya.com/wp-content/plugins/powerpress/rss_default.jpg)

## Metadata
- Author: [[Avikumar Talaviya]]
- Full Title: Crop Yield Prediction Using Machine Learning and Flask Deployment
- Category: #articles
- URL: https://www.analyticsvidhya.com/blog/2023/06/crop-yield-prediction-using-machine-learning-and-flask-deployment/

## Highlights
- Heatmap of the Dataset
  # create featureset and target variable from the dataset
  features_df = df.drop('yield', axis=1)
  tar = df['yield']
  # plot the heatmap from the dataset
  plt.figure(figsize=(15,15))
  sns.heatmap(df.corr(), annot=True, vmin=-1, vmax=1)
  plt.show() ([View Highlight](https://read.readwise.io/read/01h35xnny2784jp99zts0y6d07))
- Distribution of the Target Variable
  # plot the boxplot using seaborn library of the target variable 'yield'
  plt.figure(figsize=(5,5))
  sns.boxplot(x='yield', data=df)
  plt.show() ([View Highlight](https://read.readwise.io/read/01h35xnstepdf29ft2hhs47zak))
- Distribution by the Categorical Features of the Dataset
  # matplotlib subplot for the categorical feature 
  nominal_df = df[['MaxOfUpperTRange','MinOfUpperTRange','AverageOfUpperTRange','MaxOfLowerTRange',
  'MinOfLowerTRange','AverageOfLowerTRange','RainingDays','AverageRainingDays']]
  fig, ax = plt.subplots(2,4, figsize=(20,13))
  for e, col in enumerate(nominal_df.columns):
  if e<=3:
  sns.boxplot(data=df, x=col, y='yield', ax=ax[0,e])
  else:
  sns.boxplot(data=df, x=col, y='yield', ax=ax[1,e-4]) 
  plt.show() ([View Highlight](https://read.readwise.io/read/01h35xp2868cd69e17rgvat7dm))
- Mutual Info Regression
  # run the MI scores of the dataset
  mi_score = mutual_info_regression(features_df, tar, n_neighbors=3,random_state=42)
  mi_score_df = pd.DataFrame({'columns':features_df.columns, 'MI_score':mi_score})
  mi_score_df.sort_values(by='MI_score', ascending=False) ([View Highlight](https://read.readwise.io/read/01h35xpx89he3j68dp202nb8ry))

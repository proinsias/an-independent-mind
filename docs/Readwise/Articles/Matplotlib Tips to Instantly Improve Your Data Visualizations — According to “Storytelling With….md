# Matplotlib Tips to Instantly Improve Your Data Visualizations — According to “Storytelling With…

![rw-book-cover](https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)

## Metadata
- Author: [[Leonie Monigatti]]
- Full Title: Matplotlib Tips to Instantly Improve Your Data Visualizations — According to “Storytelling With…
- Category: #articles
- URL: https://towardsdatascience.com/matplotlib-tips-to-instantly-improve-your-data-visualizations-according-to-storytelling-with-8e75601b38cb?source=rss----7f60cf5620c9---4

## Highlights
- By default, Matplotlib plots have a box of so-called spines around the edges of the figure. Especially the top and right spines can clutter the data visualization and thus should be removed.
  You can simply remove the irrelevant spines with the following code snippet:
  # Remove top and right spines 
  ax.spines['right'].set_visible(False) 
  ax.spines['top'].set_visible(False) ([View Highlight](https://read.readwise.io/read/01h3b57kgnmqycy9a6hxxjrycb))
- And if you want to remove the border, including the full x- and y-axis as well, you can use `ax.axis('off')`. ([View Highlight](https://read.readwise.io/read/01h3b57vr1td9pn92n3bb1gnqm))
- Ticks are usually not considered clutter. But in some cases, as in this example, the ticks of the x-axis of a bar chart are redundant.
  # Remove ticks on x-axis 
  ax.tick_params(bottom = False) ([View Highlight](https://read.readwise.io/read/01h3b5811rpzgqe7dm94rrs233))
- Replace the `color` parameter of the `sns.barplot` method with the `palette` parameter to control each bar’s color. By doing this, you can use light grey to de-emphasize less important bars and only highlight the relevant bar with the main color.
  # Define colors of individual bars 
  custom_colors = ['lightgrey', 'tan', 'lightgrey', 'lightgrey'] 
  # De-emphasize less important bars 
  sns.barplot(data = df, 
  x = 'feature 1', 
  y = 'feature 2', 
  palette = custom_colors) ([View Highlight](https://read.readwise.io/read/01h3b59grp62sm667sb52gxkbz))
- Next, we also want to mute the colors of the x- and y-axis. To do so, we need to mute the color of the axis’ spine, ticks, and labels:
  # Mute colors of spines 
  ax.spines['left'].set_color('grey') 
  ax.spines['bottom'].set_color('grey') 
  # Mute colors of ticks 
  ax.tick_params(colors = 'grey') 
  # Mute colors of labels 
  ax.set_xlabel('feature 1', color = 'grey') 
  ax.set_ylabel('feature 2', color = 'grey') ([View Highlight](https://read.readwise.io/read/01h3b59vdv9d6jbzd65f7sdyp4))
- “If there is a conclusion you want your audience to reach, state it in words.” — Cole Nussbaumer Knaflic in “Storytelling with Data” ([View Highlight](https://read.readwise.io/read/01h3b5ag9342qm622qcpq85rd8))
- To add text to a Matplotlib figure, you can use the `ax.annotate()` method, which takes the text and its location in the plot as arguments. Additionally, you can specify aspects like the horizontal (`ha`) or vertical alignment (`va`) or font size.
  # Add text annotations 
  ax.annotate('Look at "cat 2". \nThis is important!', 
  xy = (1.5, 360), 
  ha = 'center', 
  fontsize = 11, 
  ) ([View Highlight](https://read.readwise.io/read/01h3b5amxwfveptsfgh7a60ne5))
- To add the value to every individual bar, we need to iterate over the `ax.patches`. For every `bar`, you can use the `get_height()`, `get_width()`, and `get_x()` methods to place the value above the bar.
  # Annotate bar chart with values 
  for bar in ax.patches: 
  ax.annotate(int(bar.get_height()), 
  xy = (bar.get_x() + bar.get_width() / 2, bar.get_height()), 
  ha = 'center', 
  va = 'center', 
  xytext = (0, 8), 
  textcoords = 'offset points' 
  ) ([View Highlight](https://read.readwise.io/read/01h3b5b2mtk1ps15ybeh86sy9a))
- Using bold text can help highlight important parts of your data visualization. If you want to only highlight part of your annotation, you can use `$\\bf{}$` in your string and place the text to be emphasized in the curly brackets. If you want to highlight the whole annotation, just add the parameter `fontweight = 'bold'`.
  # Make only part of text bold 
  ax.annotate('Look at "cat 2". \nThis is $\\bf{important}$!', 
  #... 
  ) 
  # Make all of the text bold 
  ax.annotate('Look at "cat 2". \nThis is important!', 
  #... 
  fontweight='bold', 
  ) ([View Highlight](https://read.readwise.io/read/01h3b5byghpkdf85kmdbtmvje3))
- To associate specific texts with specific elements in the data visualization, you can leverage the association by the same color. To give the text annotation color, just add the parameter `color` to the `ax.annotate()` method.
  # Remove ticks on x-axis 
  ax.tick_params(bottom = False) 
  # Add important take away to plot 
  ax.annotate('Look at "cat 2". \nThis is $\\bf{important}$!', # Emphasize important terms 
  xy = (1.5, 360), 
  ha = 'center', 
  color = 'tan', 
  fontsize = 11, 
  ) ([View Highlight](https://read.readwise.io/read/01h3b5c38792wrf7zjjhdrhy7d))
- By simply [removing clutter](https://towardsdatascience.com/matplotlib-tips-to-instantly-improve-your-data-visualizations-according-to-storytelling-with-8e75601b38cb?source=rss----7f60cf5620c9---4#b690), [adding text annotations](https://towardsdatascience.com/matplotlib-tips-to-instantly-improve-your-data-visualizations-according-to-storytelling-with-8e75601b38cb?source=rss----7f60cf5620c9---4#be3f), and [de-emphasizing](https://towardsdatascience.com/matplotlib-tips-to-instantly-improve-your-data-visualizations-according-to-storytelling-with-8e75601b38cb?source=rss----7f60cf5620c9---4#8422) less important information and instead [emphasizing](https://towardsdatascience.com/matplotlib-tips-to-instantly-improve-your-data-visualizations-according-to-storytelling-with-8e75601b38cb?source=rss----7f60cf5620c9---4#4c12) important information, you can instantly see a strong difference in the readability of the example data visualization. ([View Highlight](https://read.readwise.io/read/01h3b5cnnrq39r57ke5njdjer6))

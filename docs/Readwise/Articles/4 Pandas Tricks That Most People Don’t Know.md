# 4 Pandas Tricks That Most People Don’t Know

![rw-book-cover](https://miro.medium.com/max/1200/1*iSzOZdQJl7J9g68r8SYxjQ.jpeg)

## Metadata
- Author: [[Christopher Tao]]
- Full Title: 4 Pandas Tricks That Most People Don’t Know
- Category: #articles
- URL: https://towardsdatascience.com/4-pandas-tricks-that-most-people-dont-know-86a70a007993

## Highlights
- • Copy the area of the data that you need.
  • Go to Python, use `pd.read_clipboard()`. ([View Highlight](https://read.readwise.io/read/01h2vt3gn3x71xws15qm2jfacy))
- pd.util.testing.N = 10 
  pd.util.testing.K = 5 
  pd.util.testing.makeDataFrame() ([View Highlight](https://read.readwise.io/read/01h2vt41tvr4eff2e6emjmya6b))
- It is not uncommon to have the year, month and day as separated columns in a data frame. In fact, we can use `pd.to_dateframe()` to convert them into a DateTime column in one step.
  df['date'] = pd.to_datetime(df[['year', 'month', 'day']]) ([View Highlight](https://read.readwise.io/read/01h2vt4v2zmz1x3fpybqt3h0j2))

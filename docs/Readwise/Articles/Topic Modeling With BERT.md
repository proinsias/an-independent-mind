# Topic Modeling With BERT

![rw-book-cover](https://miro.medium.com/max/1200/1*W94GjvT6vBzDGY50qPHZDA.png)

## Metadata
- Author: [[Maarten Grootendorst]]
- Full Title: Topic Modeling With BERT
- Category: #articles
- URL: https://towardsdatascience.com/topic-modeling-with-bert-779f7db187e6

## Highlights
- we first need to lower the dimensionality of the embeddings as many clustering algorithms handle high dimensionality poorly.
  UMAP
  Out of the few dimensionality reduction algorithms, [UMAP](https://github.com/lmcinnes/umap) is arguably the best performing as it keeps a significant portion of the high-dimensional local structure in lower dimensionality. ([View Highlight](https://read.readwise.io/read/01h38qfpn2asx284hdr4n1s2jw))
- After having reduced the dimensionality of the documents embeddings to 5, we can cluster the documents with **HDBSCAN**. HDBSCAN is a density-based algorithm that works quite well with UMAP since UMAP maintains a lot of local structure even in lower-dimensional space. Moreover, HDBSCAN does not force data points to clusters as it considers them outliers. ([View Highlight](https://read.readwise.io/read/01h38qhyqy1mgpfgc6e74czj0t))

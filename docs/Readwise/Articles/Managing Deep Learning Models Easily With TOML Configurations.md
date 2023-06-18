# Managing Deep Learning Models Easily With TOML Configurations

![rw-book-cover](https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)

## Metadata
- Author: [[Shubham Panchal]]
- Full Title: Managing Deep Learning Models Easily With TOML Configurations
- Category: #articles
- URL: https://towardsdatascience.com/managing-deep-learning-models-easily-with-toml-configurations-fb680b9deabe?source=rss----7f60cf5620c9---4

## Highlights
- TOML, stands for [*Tom’s Obvious Minimal Language*](https://toml.io/en/), is file-format designed specifically for configuration files. The concept of a TOML file is quite similar to [YAML/YML files](https://yaml.org/) which have the ability to store key-value pairs in a tree-like hierarchy. [An advantage of TOML over YAML is its readability](https://www.reddit.com/r/devops/comments/6f82nu/yaml_vs_toml/) which becomes important when there are multiple nested levels. ([View Highlight](https://read.readwise.io/read/01h31546y8k4dj586bf9wezp3t))
- read the configuration from a TOML files, two Python packages can be used, `[toml](https://github.com/uiri/toml)` and `[munch](https://github.com/uiri/toml)` . `toml` will help us read the TOML file and return the contents of the file as a Python `dict` . `munch` will convert the contents of the `dict` to enable attribute-style access of elements. For instance, instead of writing, `config[ "training" ][ "num_epochs" ]` , we can just write `config.training.num_epochs` which enhances readability. ([View Highlight](https://read.readwise.io/read/01h3159bny1g8rgzy41pyjywb5))

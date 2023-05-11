---
title: "dvc"
date: 2023-05-08 22:32
last_modified_at: 2023-05-11 09:18
tags:
  - command-line-tool
  - data-science
  - git
link: https://dvc.org/doc/get-started
---

### [Command line tools MOC](Command%20line%20tools%20MOC.md)

### [Data science MOC](Data%20science%20MOC.md)

# dvc

DVC is a tool for data science that takes advantage of existing software engineering tool set. It helps machine learning teams manage large datasets, make projects reproducible, and collaborate better.
Apply version control to machine learning development, make your repo the backbone of your project, and instill best practices across your team.

```shell
# Install dvc.
brew cask install iterative/homebrew-dvc/dvc
# Install dvc bash completion.
wget \-O /usr/local/etc/bash_completion.d/dvc \
https://raw.githubusercontent.com/iterative/dvc/master/scripts/completion/dvc.bash

# Setup git repo for DVC.
mkdir ~/dvc
cd ~/dvc
git init
dvc init
git commit -m 'Initialize DVC'

# Add local remote.
dvc remote add -d myremote /tmp/dvc-storage
git commit .dvc/config -m "Initialize DVC local remote"

# Add sample data file.
wget https://dvc.org/s3/get-started/data.xml
dvc add data.xml
# .dvc file has human-readable description.
# Commit it to Git to track versions of your file.
git add .gitignore data.xml.dvc
git commit -m "Add source data to DVC"

# To modify or replace a data file that is under DVC control
# you may need to run `dvc unprotect` or `dvc remove` first.
# Use `dvc move` to rename or move a data file that is under dvc control.

# Get or set per repository or global options.
dvc config

dvc push
dvc pull

# Go through tutorial.
pyenv virtualenv dvc
pyenv local dvc
pip install -U -r requirements.txt
git add .git commit -m 'Add code'

dvc run \
    --deps prepare.py --deps data.xml \
    --outs data.tsv --outs data-test.tsv \
    python prepare.py data.xml
git add .gitignore data.tsv.dvc
git commit -m "Add data preparation stage"
dvc push

dvc run -d featurization.py -d data.tsv \
    -o matrix.pkl \
    python featurization.py data.tsv matrix.pkl
dvc run -d train.py -d matrix.pkl \
    -o model.pkl \
    python train.py matrix.pkl model.pkl
git add .gitignore matrix.pkl.dvc model.pkl.dvc
git commit -m "add featurization and train steps to the pipeline"
dvc push

# Pipeline visualization.
dvc pipeline show --ascii model.pkl.dvc
dvc pipeline show --ascii model.pkl.dvc --commands
dvc pipeline show --ascii model.pkl.dvc --outs

# Rerun stale parts of pipeline, if any.
dvc repro model.pkl.dvc

# Rerun changed parts of pipeline in new branch.
git checkout -b bigram
# Edit to use bigrams.
edit featurization.py
# Get and save the new model.pkl.
dvc repro model.pkl.dvc
git commit -a -m "Bigram model"

# Go back to master version of code and data files.
git checkout master
dvc checkout

# Adjust the feature extraction to split for training and test datasets.
dvc run -d featurization.py -d data.tsv -d data-test.tsv \
    -o matrix.pkl -o matrix-test.pkl \
    python featurization.py data.tsv matrix.pkl \
    data-test.tsv matrix-test.pkl

git commit .gitignore matrix.pkl.dvc -m "Change featurization stage"

# Evaluate this branch using AUC.
dvc run \
    -d evaluate.py -d model.pkl -d matrix-test.pkl \
    -M auc.metric \
    python evaluate.py model.pkl matrix-test.pkl auc.metric
git add auc.metric auc.metric.dvc
git commit -m "Add evaluation step with AUC metric"

# Evaluate the bigram model.
git checkout bigram
dvc checkout
git merge -X theirs master
dvc repro auc.metric.dvc
git commit -a -m "Evaluate bigram model"
dvc metrics show -a
```

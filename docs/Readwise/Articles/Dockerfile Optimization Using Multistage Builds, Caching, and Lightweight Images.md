# Dockerfile Optimization Using Multistage Builds, Caching, and Lightweight Images

![rw-book-cover](https://dev.to/social_previews/article/1486129.png)

## Metadata
- Author: [[DEV Community]]
- Full Title: Dockerfile Optimization Using Multistage Builds, Caching, and Lightweight Images
- Category: #articles
- URL: https://dev.to/er_dward/dockerfile-optimization-using-multistage-builds-caching-and-lightweight-images-2ec6

## Highlights
- Here's a simple Github Actions workflow file that builds a Docker image using the Docker layer caching:
  name: Docker Build, Push, and Deploy
  on:
  push:
  branches:
  - master
  jobs:
  build:
  runs-on: ubuntu-latest
  steps:
  - name: Check out the repo
  uses: actions/checkout@v2
  - name: Login to DockerHub
  uses: docker/login-action@v1 
  with:
  username: ${{ secrets.DOCKERHUB_USERNAME }}
  password: ${{ secrets.DOCKERHUB_TOKEN }}
  - name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v1
  - name: Cache Docker layers
  uses: actions/cache@v2
  with:
  path: /tmp/.buildx-cache
  key: ${{ runner.os }}-buildx-${{ github.sha }}
  restore-keys: |
  ${{ runner.os }}-buildx-
  - name: Build and push Docker image
  uses: docker/build-push-action@v2
  with:
  context: .
  push: true
  tags: your_dockerhub_username/your_repository:your_tag
  cache-from: type=local,src=/tmp/.buildx-cache
  cache-to: type=local,dest=/tmp/.buildx-cache ([View Highlight](https://read.readwise.io/read/01h2ef52hds30vnt7x76qy6rka))

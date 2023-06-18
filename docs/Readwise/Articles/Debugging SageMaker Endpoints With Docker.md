# Debugging SageMaker Endpoints With Docker

![rw-book-cover](https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)

## Metadata
- Author: [[Ram Vegiraju]]
- Full Title: Debugging SageMaker Endpoints With Docker
- Category: #articles
- URL: https://towardsdatascience.com/debugging-sagemaker-endpoints-with-docker-7a703fae3a26?source=rss----7f60cf5620c9---4

## Highlights
- At it’s core SageMaker Inference has two constructs:
  • **Container**: This establishes the runtime environment for the model, it is also integrated with the model server that you are utilizing. You can either utilize one of the existing [Deep Learning Containers](https://github.com/aws/deep-learning-containers/blob/master/available_images.md) (DLCs) or [Build Your Own Container](https://towardsdatascience.com/bring-your-own-container-with-amazon-sagemaker-37211d8412f4).
  • **Model Artifacts**: In the [CreateModel](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sagemaker/client/create_model.html) API call we specify an S3 URL with the model data present in the format of a model.tar.gz (tarball). This model data is loaded into the opt/ml/model directory on the container, this also includes any inference script that you provide. ([View Highlight](https://read.readwise.io/read/01h32jxadrxqppnts1dp4gp5we))
- The key here is that the container needs a web server implemented that responds to port 8080 on the /invocations and /ping paths ([View Highlight](https://read.readwise.io/read/01h32jxgnc8n3mgqq4hvxmekrs))
- To work with existing AWS provided images we first need to login to [AWS Elastic Container Registry (ECR)](https://towardsdatascience.com/pushing-docker-images-to-amazon-elastic-container-registry-830c301b8971) to retrieve the image, you can do that with the following shell command.
  $(aws ecr get-login --region us-east-1 --no-include-email --registry-ids 763104351884) ([View Highlight](https://read.readwise.io/read/01h32jzk5vrgdkg38k8646r4vw))
- Once logged in we can get to the path where our model artifacts are stored and run the following command which will launch the model server. If you have not already retrieved the image, this will also be pulled from ECR.
  docker run \ 
  -v /home/ec2-user/SageMaker:/opt/ml/model \ 
  --cpu-shares 512 \ 
  -p 8080:8080 \ 
  763104351884.dkr.ecr.us-east-1.amazonaws.com/djl-inference:0.21.0-deepspeed0.8.0-cu117 \ 
  serve ([View Highlight](https://read.readwise.io/read/01h32k0106m0wvxpfw1gjrb8nt))
- We can also verify this container is running by utilizing the following Docker command.
  docker container ls ([View Highlight](https://read.readwise.io/read/01h32k0dsejnh166xxbym8wr85))
- we can send sample requests to via curl. Notice we specify the /invocations path that SageMaker Containers expect.
  curl -X POST http://localhost:8080/invocations -H "Content-type: text/plain" 
  "This is a sample test string" ([View Highlight](https://read.readwise.io/read/01h32k0v5rvsy19azjfsm5qmb5))
- Note that you are not limited to utilizing just curl to test your container. We can also use something like the [Python requests](https://pypi.org/project/requests/) library to interface and work with the container. A sample request would look like the following: ([View Highlight](https://read.readwise.io/read/01h32xd2ppeftae0nztrsp2jm9))
- import requests 
  headers = { 
  'Content-type': 'text/plain', 
  } 
  response = requests.post('http://localhost:8080/invocations', headers=headers) ([View Highlight](https://read.readwise.io/read/01h32xcxnn8bsvmqen6q96rcbh))

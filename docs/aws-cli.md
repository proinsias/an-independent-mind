---
title: 'aws-cli'
date: 2023-05-09 11:01
last_modified_at: 2023-06-20 14:47
tags:
    - cloud-computing
    - command-line-tool
    - reviewed
---

### [Cloud computing MOC](Cloud%20computing%20MOC.md)

### [Command line tools MOC](Command%20line%20tools%20MOC.md)

# aws-cli

## Miscellaneous

### Am I on the Master?

Use the following to run code in bootstrap action only on the master:

```shell
if grep isMaster /mnt/var/lib/info/instance.json | grep true; then
fi
```

## EMR

```shell
# Wait for cluster status RUNNING.
aws emr wait cluster-running --cluster-id "${CLUSTER_ID}"
```

### Adding multiple Spark Steps

```shell
--steps Type=Spark,Name="Spark Program",ActionOnFailure=CONTINUE,Args=[--class,org.apache.spark.examples.SparkPi,/usr/lib/spark/lib/spark-examples.jar,10] \
```

This uses the "shorthand" syntax for the jobs. I found that in order to add multiple steps, I had to use the json string syntax:

```shell
--steps "[
{
\"Name\": \"${CLUSTER_NAME}-setup-cluster\",
\"Type\": \"CUSTOM_JAR\",
\"ActionOnFailure\": \"CANCEL_AND_WAIT\",
\"Jar\": \"s3://elasticmapreduce/libs/script-runner/script-runner.jar\",
\"Args\":
[
\"${S3_PATH}/setup-cluster\",
\"-u\", \"${GITHUB_USERNAME}\",
\"-t\", \"${GITHUB_TOKEN}\",
\"-c\", \"${EMR_PATH}\",
\"-s\", \"${S3_PATH}\",
\"-b\", \"${CURRENT_BRANCH}\",
\"-i\", \"${AWS_ACCESS_KEY_ID}\",
\"-k\", \"${AWS_SECRET_ACCESS_KEY}\"
]
},
{
\"Name\": \"${CLUSTER_NAME}-spark\",
\"Type\": \"CUSTOM_JAR\",
\"ActionOnFailure\": \"CANCEL_AND_WAIT\",
\"Jar\": \"s3://elasticmapreduce/libs/script-runner/script-runner.jar\",
\"Args\":
[
\"${EMR_PATH}/${REPO_NAME}/${CMD_PATH}\",
${FORMATTED_ARGS}
]
}
]"
```

## Links

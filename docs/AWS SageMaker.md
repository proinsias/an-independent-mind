---
title: "AWS SageMaker"
date: 2023-05-18 13:57
last_modified_at: 2023-05-18 15:16
tags:
    - cloud-computing
    - data-science
---

### [Cloud computing MOC](Cloud%20computing%20MOC.md)
[Data science MOC](Data%20science%20MOC.md)

# AWS SageMaker

## SageMaker Experiments

Here’s a non-exhaustive list of things you may want to keep track of:

-   **Parameters**: hyperparameters, model architectures, training algorithms
-   **Jobs**: pre-processing job, training job, post-processing job — these consume other infrastructure resources such as compute, networking and storage
-   **Artifacts**: training scripts, dependencies, datasets, checkpoints, trained models
-   **Metrics**: training and evaluation accuracy, loss
-   **Debug data**: Weights, biases, gradients, losses, optimizer state
-   **Metadata**: experiment, trial and job names, job parameters (CPU, GPU and instance type), artifact locations (e.g. S3 bucket)

```python
# Define variables for experiment name and rf estimators
experiment_name = "sm-experiments-sample-sklearn"
estimators = [10, 20, 30, 40, 50]

for est in enumerate(estimators):
    with sagemaker.experiments.load_run(
        experiment_name=experiment_name,
        run_name=f"run-{est[0]}",
        sagemaker_session=sagemaker.session.Session(),
    ) as run:
        run.log_parameter("estimators", est[1])
        regressor = sklearn.ensemble.RandomForestRegressor(n_estimators=est[1])
        regressor.fit(X_train, y_train)
        y_pred = regressor.predict(X_test)
        run.log_metric(
            name = "RMSE",
            value = sklearn.metrics.mean_squared_error(y_test, y_pred, squared=False),
        )
        # Can also use run.log_parameter(), run.log_artifact(), run.log_run().
```

### Links

* [SageMaker Experiments: Organizing and Tracking your ML Training and Experimentation](https://aws.plainenglish.io/sagemaker-experiments-b6016ff2c609).
* [A quick guide to managing machine learning experiments](https://towardsdatascience.com/a-quick-guide-to-managing-machine-learning-experiments-af84da6b060b).

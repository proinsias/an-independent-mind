---
title: "AWS SageMaker"
date: 2023-05-18 13:57
last_modified_at: 2023-05-18 21:19
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

Properties of an experiment, trial and trial component:

-   An Experiment is uniquely characterized by its objective or hypothesis.
-  An experiment includes a list of variables (called controlled factors) that you vary across a number of trials.
-   An Experiment usually contains more than one Trial, one Trial for each variable set.
-   A Trial is uniquely characterized by its variable set, sampled from the variable space defined by you.
-   A Trial component is any artifact, parameter or job that is associated with a specific Trial.
-   A Trial component is usually part of a Trial, but it can exist independent of an experiment or trial.
-   A Trial component cannot be directly associated with an Experiment. It has to be associated with a Trial which is associated with an Experiment.
-   A Trial component can be associated with multiple Trials. This is useful to track datasets, parameters and metadata that is common across all Trials in an Experiment.

### Relevant packages

```shell
pip install \
	awscli \
	sagemaker \
	sagemaker-experiments \
	smdebug
```

### Example 1

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

### Example 2

```python
sagemaker_session=sagemaker.session.Session(boto_session=boto_sess)

datasets = sagemaker_session.upload_data(path='cifar10', key_prefix='datasets/cifar10-dataset')
```

### Cleanup experiments

```python
sm = boto3.Session().client('sagemaker')

exp_names = [exp.experiment_name for exp in smexperiments.experiment.Experiment.list(sagemaker_boto_client=sm)]

for exp in exp_names:
    experiment = smexperiments.experiment.Experiment.load(exp)
	for trial_summary in experiment.list_trials():
		try:
			trial = smexperiments.trial.Trial.load(sagemaker_boto_client=sm, trial_name=trial_summary.trial_name)
			for trial_component_summary in trial.list_trial_components():
				tc = smexperiments.trial_component.TrialComponent.load(
					sagemaker_boto_client=sm,
					trial_component_name=trial_component_summary.trial_component_name,
					)
				try:
					trial.remove_trial_component(tc)
					print(f'Deleting trial component: {tc.trial_component_name}')
					tc.delete()
				except:
					time.sleep(0.4)
					continue
			print(f'Deleting trial: {trial.trial_name}')
			trial.delete()
		except:
			continue
	print(f'Deleting experiment: {experiment.experiment_name}')
	experiment.delete()    
```

### Cleanup unassigned trial components

```python
for tc in smexperiments.trial_component.TrialComponent.list(sagemaker_boto_client=sm):
    try:
        sm.delete_trial_component(TrialComponentName=tc.trial_component_name)
        print(f'Deleted: {tc.trial_component_name}')
        time.sleep(0.4)
    except:
        continue
```

### Cleanup all endpoints

```python
for en in sm.list_endpoints()['Endpoints']:
    try:
        print(en['EndpointName'])
        sm.delete_endpoint(EndpointName=en['EndpointName'])
        time.sleep(0.4)
    except:
        continue
```

### Links

* [SageMaker Experiments: Organizing and Tracking your ML Training and Experimentation](https://aws.plainenglish.io/sagemaker-experiments-b6016ff2c609).
* [A quick guide to managing machine learning experiments](https://towardsdatascience.com/a-quick-guide-to-managing-machine-learning-experiments-af84da6b060b).
* [Sagemaker Experiments examples](https://github.com/shashankprasanna/sagemaker-experiments-examples).

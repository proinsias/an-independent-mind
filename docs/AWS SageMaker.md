---
title: "AWS SageMaker"
date: 2023-05-18 13:57
last_modified_at: 2023-06-20 14:47
tags:
    - cloud-computing
    - data-science
    - reviewed
---

### [Cloud computing MOC](Cloud%20computing%20MOC.md)
[Data science MOC](Data%20science%20MOC.md)

# AWS SageMaker

## Endpoints

### How to invoke the endpoint after deployment?

```python
sts_client = boto3.client('sts')
role_arn = "..."
cfa_endpoint = "..."

assumed_role_object = sts_client.assume_role(
    RoleArn=role_arn,
    RoleSessionName='SageMakerInferenceSession'
)

credentials = assumed_role_object['Credentials']

kwargs = {
    'aws_access_key_id': credentials['AccessKeyId'],
    'aws_secret_access_key': credentials['SecretAccessKey'],
    'aws_session_token': credentials['SessionToken']
}

runtime = boto3.client(service_name="runtime.sagemaker", **kwargs)

payload = "..."
response = runtime.invoke_endpoint(
    EndpointName=cfa_endpoint, ContentType="text/csv", Body=payload
)
result = json.loads(response["Body"].read().decode())
test_pred = np.array([r["predicted_label"] for r in result["predictions"]])
print(result)
print(test_pred)
```

## Experiments

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
# Create a SageMaker Experiment.
sagemaker_session=sagemaker.session.Session(boto_session=boto_sess)
bucket_name = sagemaker_session.default_bucket()

datasets = sagemaker_session.upload_data(path='cifar10', key_prefix='datasets/cifar10-dataset')

training_experiment = smexperiments.experiment.Experiment.create(
    experiment_name = f"cifar10-training-experiment-{int(time.time())}",
    description = "Hypothesis: Custom model architecture delivers higher validation accuracy for classification compared to ResNet50 and VGG on the CIFAR10 dataset",
    sagemaker_boto_client=sm,
)

# Model architecture is our first variable or controlled factor.
# We also want to study the effect of other hyperparameters on the response.

hyperparam_options = {
    'model': ['resnet', 'custom'],
    'optimizer': ['adam', 'sgd', 'rmsprop'],
    'epochs': [30, 60, 120],
}

hypnames, hypvalues = zip(*hyperparam_options.items())
trial_hyperparameter_set = [
	dict(zip(hypnames, h))
	for h in itertools.product(*hypvalues)
]

static_hyperparams = {
    'batch-size': 128,
    'learning-rate': 0.001,
    'weight-decay' : 1e-6,
    'momentum'     : 0.9,
}

# Create an 'experiment-metadata' Tracker.
# This tracker is a Trial component that is not currently associated with an experiment.
# Recall that a Trial Component cannot be associated with an Experiment directly. It must be associated with a Trial first.
# In the next section, we’ll associate this common Trial Component with all the Trials in the Experiment.

with smexperiments.tracker.Tracker.create(
    display_name="experiment-metadata", 
    artifact_bucket=bucket_name,
    artifact_prefix=training_experiment.experiment_name,
    sagemaker_boto_client=sm,
) as exp_tracker:
    exp_tracker.log_input(name="cifar10-dataset", media_type="s3/uri", value=datasets)
    exp_tracker.log_parameters(static_hyperparams)
    exp_tracker.log_parameters(hyperparam_options)
    exp_tracker.log_artifact(file_path='generate_cifar10_tfrecords.py')

# Here we loop through the variable sets and create a Trial and a training job for each set.

for trial_hyp in trial_hyperparameter_set:
    # Combine static hyperparameters and trial specific hyperparameters.
    hyperparams = {**static_hyperparams, **trial_hyp}
    
    # Create unique job name with hyperparameter and time.
    time_append = int(time.time())
    hyp_append = "-".join([str(elm) for elm in trial_hyp.values()])
    job_name = f'cifar10-training-{hyp_append}-{time_append}'
    
    # Create a Tracker to track Trial specific hyperparameters.
    with smexperiments.tracker.Tracker.create(
        display_name=f"trial-metadata-{time_append}",
        artifact_bucket=bucket_name,
        artifact_prefix=f"{training_experiment.experiment_name}/{job_name}",
        sagemaker_boto_client=sm,
    ) as trial_tracker:
        trial_tracker.log_parameters(hyperparams)

    # Create a new Trial and associate Tracker to it.
    tf_trial = smexperiments.trial.Trial.create(
        trial_name=f'trial-{hyp_append}-{time_append}', 
        experiment_name=training_experiment.experiment_name,
        sagemaker_boto_client=sm,
    )
    tf_trial.add_trial_component(exp_tracker.trial_component)
    time.sleep(2) #To prevent ThrottlingException
    tf_trial.add_trial_component(trial_tracker.trial_component)
    
    # Create an experiment config that associates training job to the Trial.
    experiment_config = {
        "ExperimentName": training_experiment.experiment_name,
        "TrialName": tf_trial.trial_name,
        "TrialComponentDisplayName": job_name,
    }
    
    metric_definitions = [
        {'Name': 'loss', 'Regex': 'loss: ([0-9\\.]+)'},
        {'Name': 'acc', 'Regex': 'acc: ([0-9\\.]+)'},
        {'Name': 'val_loss', 'Regex': 'val_loss: ([0-9\\.]+)'},
        {'Name': 'val_acc', 'Regex': 'val_acc: ([0-9\\.]+)'},
        {'Name': 'test_acc', 'Regex': 'test_acc: ([0-9\\.]+)'},
        {'Name': 'test_loss', 'Regex': 'test_loss: ([0-9\\.]+)'},
    ]
    
    # Create a TensorFlow Estimator with the Trial specific hyperparameters.
    tf_estimator = sagemaker.tensorflow.TensorFlow(
        entry_point='cifar10-training-sagemaker.py', 
        source_dir='code',
        output_path=f's3://{bucket_name}/{training_experiment.experiment_name}/',
        code_location=f's3://{bucket_name}/{training_experiment.experiment_name}',
        role=role,
        train_instance_count=1, 
        train_instance_type ='ml.p3.2xlarge',
        framework_version='1.15', 
        py_version='py3',
        script_mode=True,
        metric_definitions=metric_definitions,
        sagemaker_session=sagemaker_session,
        hyperparameters=hyperparams,
        enable_sagemaker_metrics=True,
    )
    
    # Launch a training job.
    tf_estimator.fit(
        {
            'training': datasets,
            'validation': datasets,
            'eval': datasets,
        },
        job_name=job_name,
        wait=False,
        experiment_config=experiment_config,
    )
    
    time.sleep(3) #To prevent ThrottlingException

```

### Analyzing Experiment results

```python
experiment_name = training_experiment.experiment_name

trial_component_analytics = sagemaker.analytics.ExperimentAnalytics(
    sagemaker_session=sagemaker_session, 
    experiment_name=experiment_name,
)
trial_comp_ds = trial_component_analytics.dataframe()

idx_jobs = ~trial_comp_ds['test_acc - Last'].isna()
trial_comp_ds_jobs = trial_comp_ds_sorted.loc[idx_jobs]
trial_comp_ds_jobs = trial_comp_ds_jobs.sort_values('test_acc - Last', ascending=False)
trial_comp_ds_jobs['col_names'] = trial_comp_ds_jobs['model'] + '-' + trial_comp_ds_sorted['optimizer']
trial_comp_ds_jobs['col_names'] = trial_comp_ds_jobs[['col_names']].applymap(lambda x: x.replace('"', ''))

fig = plt.figure()
fig.set_size_inches([15, 10])
trial_comp_ds_jobs.plot.bar('col_names', 'test_acc - Last',ax=plt.gca())
trial_comp_ds_jobs[['TrialComponentName', 'test_acc - Last', 'model', 'batch-size', 'epochs', 'learning-rate', 'optimizer']]
```

### Using SageMaker Debugger to visualize performance curves

SageMaker Debugger automatically captures some default debug information from every training job, and you can also customize what data should be emitted for later analysis.

```python
def tensor_df(tname):
    tval = trial.tensor(tname).values()
    df   = pd.DataFrame.from_dict(tval,orient='index',columns=[tname])
    df_tval = df.reset_index().rename(columns={'index':'steps'})
    return df_tval

def trial_perf_curves(job_name, tname, experiment_name):
    debug_data = f's3://{bucket_name}/{experiment_name}/{job_name}/debug-output'
    trial = smdebug.trials.create_trial(debug_data)
    tval = trial.tensor(tname).values()
    df   = pd.DataFrame.from_dict(tval,orient='index',columns=[tname])
    return df

def get_metric_dataframe(metric, trial_comp_ds, experiment_name):
    df = pd.DataFrame()
    for tc_name in trial_comp_ds['DisplayName']:
        print(f'\nLoading training job: {tc_name}')
        print(f'--------------------------------\n')
        trial_perf = trial_perf_curves(tc_name, metric, experiment_name)
        trial_perf.columns = [tc_name]
        df = pd.concat([df, trial_perf],axis=1)
    return df

val_acc_df = get_metric_dataframe('val_acc', trial_comp_ds_jobs, experiment_name)

fig = plt.figure()
fig.set_size_inches([15, 10])

# Replace the Trial names with the ones you want to plot, or remove indexing to plot all jobs
val_acc_df[['cifar10-training-adam-custom-120-1594536575','cifar10-training-adam-custom-60-1594536571','cifar10-training-rmsprop-custom-30-1594536622']].plot(style='-',ax=plt.gca())
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

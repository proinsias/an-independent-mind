---
title: 'Creating impact with machine learning'
date: 2023-05-16 17:42
last_modified_at: 2023-05-22 19:10
tags:
    - data-science
    - machine-learning
---

### [Data science MOC](Data%20science%20MOC.md)

# Creating impact with machine learning

### Why You're Not Getting Value from Your Data Science

[Kalyan Veeramachaneni](http://www.kalyanv.org/) in the [Harvard Business Review](https://hbr.org/2016/12/why-youre-not-getting-value-from-your-data-science).

> In its rawest form, even clean data is too overwhelming and complex to be understood at first glance, even by experts. It has too many tables and fields and is often collected at a very high granularity. ... Machine learning experts are used to working with data that's already been aggregated into useful variables.

> While business experts are coming up with problems, machine learning experts cannot always keep up.

> If companies want to get value from their data, they need to focus on accelerating human understanding of data, scaling the number of modeling questions they can ask of that data in a short amount of time, and assessing their implications. In our work with companies, we ultimately decided that creating true impact via machine learning will come from a focus on four principles:
>
> -   **Stick with simple models:** We decided that simple models, like logistic regression or those based on [random forests](https://en.wikipedia.org/wiki/Random_forest) or decision trees, are sufficient for the problems at hand. The focus should instead be on reducing the time between the data acquisition and the development of the first simple predictive model.
> -   **Explore more problems:** Data scientists need the ability to rapidly define and explore multiple prediction problems, quickly and easily. Instead of exploring one business problem with an incredibly sophisticated machine learning model, companies should be exploring dozens, building a simple predictive model for each one and assessing their value proposition.
> -   **Learn from a sample of data—not all the data:** Instead of focusing on how to apply distributed computing to allow any individual processing module to handle big data, invest in techniques that will enable the derivations of similar conclusions from a data subsample. By circumventing the use of massive computing resources, they will enable the exploration of more hypotheses.
> -   **Focus on automation:** To achieve both _reduced time to first model_ and _increased rate of exploration_, companies must automate processes that are normally done manually. Over and over across different data problems, we found ourselves applying similar data processing techniques, whether it was to transform the data into useful aggregates, or to prepare data for predictive modeling—it's time to streamline these, and to develop algorithms and build software systems that do them automatically.

### Why models fail to deliver value and what you can do about it

[David Bloch](https://www.dominodatalab.com/blog/author/david-bloch) in the [Domino blog](https://www.dominodatalab.com/blog/why-models-fail-to-deliver-value-and-what-you-can-do-about-it).

> Data Science creates value by providing an evidence-based approach to decision making. Decisions made based on model results should ultimately reduce cost or increase revenue.

> VentureBeat AI concluded that just 13% of data science projects make it into production. ... Gartner predicts that only 20% of analytics projects will deliver business outcomes that improve performance.

> Many data science projects fail to deliver value because, at the highest level, Data Science and the business simply aren't connected. This devolves into a variety of challenges:
>
> -   Data science projects start without business support or a key stakeholder to act as the domain expert during model development.
> -   Organizations struggle to translate business challenges into solvable data science problems. Often, data science teams emphasize finding novel insights rather than pinpointing how a business process can be improved. This means many projects get stuck in endless research and experimentation.
> -   The question being asked cannot be sufficiently answered with the available data or the costs associated with data extraction from systems are too high due to a lack of connectivity across applications.
> -   There is a lack of clarity between Data Science and IT teams on how to deploy models into production. Without a feasible, repeatable method for deploying model code, models can languish on the shelf while business opportunity passes.

> Data scientists should start each new project by answering three critical questions:
>
> 1. Do we have a \[clearly and concisely defined\] business problem with a clear path to value?
> 2. Is the problem feasible for us to solve?
> 3. Can the business make the necessary changes resulting from data science insights?

> It's important to note that answering these questions often requires an exploration phase during which data scientists work with business stakeholders to assess the problem, profile the data available, and build a rough idea of their approach to solve the problem.
> A good rule of thumb is:
>
> If you're unable to answer these questions with business stakeholders within two to four weeks -- or at least be able to identify what is required to be able to answer them -- the odds of a successful outcome diminish.

> Problem statements should ultimately:
>
> -   Include a problem definition.
> -   Identify a driver of cost or revenue within the business.
> -   Identify a source of variability in that driver.
> -   Identify metrics that measure this variability.
> -   Identify a clear path to creating quantifiable value.

> \[Some\] factors to assess whether the problem identified in the problem statement can actually be solved:
>
> -   Do we have enough data \[consistently\] available, and is it accurate \[and understood by us\] enough?
> -   Do we have the technical capabilities to produce the model?
>
> *   Do we have business support that can be involved in our approach to solving the problem?
> *   Are there any potential issues that may be critical failure points in deploying a model?

> In many failed projects, communication between subject matter experts and data scientists stops once the problem statement is approved. ... Sharing insights early and often helps the business understand the actions they need to take to leverage the model output. ... \[Work\] with business analysts and solution architects to understand their business processes and any technology implications that changing them would generate.

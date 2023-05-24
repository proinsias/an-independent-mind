---
title: "LLMs"
date: 2023-05-23 11:03
last_modified_at: 2023-05-24 13:37
tags:
  - data-science
  - llms
---

### [Data science MOC](Data%20science%20MOC.md)

# Large language models (LLMs)

## Introduction

-   Generative AI ([GenAI](GenAI.md)) is the area of AI that focuses on creating (generating) new content
	-   Audio
	-   Images
	- Text
-   GenAI models are trained on large amounts of data and learn to mimic patterns in that data
-   LLMs are a type of GenAI focused on text data
	-   “Large”
		- Trained on vast amount of data (GPT-3.5 ~45 terabytes of data)
		- Huge number of parameters in the model (GPT-3.5 175 billion)
	-   Generate human-like text and understand context
* All current high performing NLP (like BERT) are based on the idea of denoising auto-encoders. (From Machine Learning to Autonomous Intelligence, Yann LeCun, Meta Chief DS)

## ChatGPT

-   LLM developed by OpenAI
-   GPT - Generative Pretraining Transformer
-   Can write essays, summarize text/data, translate languages, answer questions, write code
-   It can understand context and intent, allowing it to provide relevant human like response to prompts 
-  Trained on data up to September 2021
- Predicts what words and sentences are associated with the input and chooses what to output
- Randomization element ensures output is not always the same
* Training stages
	* Generative Pretraining
		* A language model takes a history of text as input and predicts the next element.
		* During training we use patterns and sequences in the data set to maximize the probability of getting the best choice of next element.
		* Calculates what comes next and at what fraction of the time.
		* Produces a ranked (by probability) list of words that might follow.
		* Model chooses the “best” next element step by step until it hits a "stop".
	* Supervised Fine Tuning
		* Human contractors play role of user and ideal chatbot.
		* Conversations are recorded and added to the model and training data.
		* For a given history maximize the probability the model assigns to the sequence in the ideal response.
		* Mimic the ideal action distribution.
		* Model learns context and meaning and how to respond in a natural way.
	* Reinforcement Learning from Human Feedback
		* Trainers have conversations with model and are given a list of alternative responses.
		* Human labeler ranks the responses in order of preference.
		* These rankings are used to create a rewards model that guides the AI to give better responses.
* Main Types of Output
	* Synthesizing Info - Summarize large amounts of content in a concise way.
	* Content creation - generate new content on a specific topic.
	* Learning and research - get questions answered for specific needs.
	* Coding - generate code, debug code.
* Hallucinations and Security
	* Generation of outputs that may sound plausible but are either factually incorrect or unrelated to the given context.
	* OpenAI receives all prompt data and reserves the right to use this data for training purposes.

## The future of LLMs

> The model would be reliable enough to be a novelty but not enough to be actionable. 

> Consumers are far more forgiving when it comes to hallucination than businesses can afford to be. 

Via [vinvashishta.substack.com](https://vinvashishta.substack.com/p/why-your-ceo-shouldnt-be-taking-ai).

> The hard work is these incremental improvements. It's not as glamorous as the splashy announcements of early releases, but this is where value is created. Incremental problem-solving and innovation support productization and commercialization. This is where novel use cases, products, operating models, and business models will be discovered.
>
> Data is an advantage that will endure over the next 12-18 months. Horizontal scaling is only an advantage, while some companies struggle to integrate LLMs into their products and operations. Services and platform providers are rushing in to level that playing field. IBM, Microsoft, SAP, and AWS already offer products. Salesforce and many others are a month or two away from entering the arena. This space will soon be as overcrowded as today's data engineering and MLOps landscape.
>
> Vertical scaling will provide more opportunities for businesses to differentiate their products and streamline operations. Proprietary data enables both monetization routes. Advantages are built on what competitors cannot easily copy. Companies must move beyond what LLMs can do horizontally and develop vertical capabilities.
>
> Most businesses struggle to understand what data they currently have and share that view across the business. Few business units have access to the data they need when they need it. Generative AI will force firms to confront these challenges, or they will fail to see the benefits.

Via [vinvashishta.substack.com](https://vinvashishta.substack.com/p/scaling-foundational-ai-models-will).

## Miscellaneous

## Links

---
title: "LLMs"
date: 2023-05-23 11:03
last_modified_at: 2023-05-23 11:11
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


## Miscellaneous

## Links

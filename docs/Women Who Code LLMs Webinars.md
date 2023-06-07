---
title: "Women Who Code LLMs Webinars"
date: 2023-06-06 22:03
last_modified_at: 2023-06-06 23:15
tags:
  - data-science
  - llms
---

### 

# Women Who Code LLMs Webinars

## Intro to LLMs

* Archana Vaidheeswaran (Data Product Manager @ Women Who Code)
* The recording will be uploaded to [WWCode Youtube Channel](https://www.youtube.com/c/WomenWhoCodeGlobal).
* Tokenization
	* Both RNNs and CNNs involved significant data preprocessing. This is where tokenization comes in. Tokenization is the process of splitting a sentence into individual words or characters(tokens). It's like chopping a sentence into pieces so the model can look at each piece.
* In 2017, Vaswani et al. at Google Brain introduced the Transformer model in their paper, "Attention is All You Need'. The Transformer model was a major breakthrough as it could process all tokens in the input data in parallel (like CNNs) while also maintaining a sense of order or sequence (like RNN).
* Paying "attention" to different words
	* Attention to different words, importance changes.
	* Positional Encoding: You need to have a structure to a sentence, so that the model (transformer) knows the order of words.
* Birth of GPT(2018)
	* In 2018, OpenAl introduced the first Generative Pretrained Transformer (GPT) model. It was trained on a large corpus of text from the internet in an unsupervised manner, meaning it learned to predict the next word in a sentence without any explicit instruction.
	* GPT was a transformer decoder model, meaning it was designed to generate text. It used the attention mechanism to consider all prior words in the generated text when predicting the next word. This allowed it to generate coherent and contextually relevant sentences.
* In Al models, parameters are the parts of the model that are learned from historical training data. They are the 'knobs' the model tweaks to get better at its task. In the GPT series, the number of parameters grew astronomically from 117 million in GPT to a whopping 175 billion in GPT-3. It's like going from a small town's population to almost double the population of the Earth!
* Vocabulary Size refers to the number of unique tokens the model knows. It's like the model's personal dictionary. The larger the vocabulary size, the more nuanced and varied the language the model can understand and generate. Imagine having a dictionary that, instead of containing a few thousand words, contains tens of thousands of words - that's a big vocabulary!
* Fine-tuning
	* After a model like GPT-3 is pre-trained on a large dataset, it can be fine-tuned on a more specific task, like translating English to French, or writing poetry. Fine-tuning is like going to medical school after graduating from college: you've got a broad base of knowledge, and now you're specializing.
* Few-shot learning refers to the model's ability to understand a task given only a few examples. It's like showing a super-smart alien a few examples of a bicycle and then asking it to build one. GPT-3's performance on few-shot learning tasks was a big part of what made it so exciting.
* Context Length refers to the amount of recent input that the model can "remember" or use to produce output. It's kind of like having a conversation with Dory. After a few rounds of swimming, Dory forgets what you said. Similarly, the context length is the number of "laps" the model can "remember." The longer the context length, the better the model can keep track of long conversations or documents.
* In 2019, OpenAl released GPT-2. It was essentially a larger and more powerful version of GPT, boasting 1.5 billion parameters. Its architecture remained largely the same, but it was trained on even more data.
* LLaMA is known to perform better than GPT-3, why is that the case?
	* GPT-3 (2020)
		* 50,257 vocabulary size
		* 2048 context length
		* 175B parameters
	* LLaMA (2023)
		* 32,000 vocabulary size
		* 2048 context length
		* 65B parameters
	* LLAMA was actually trained on 1.4T token vs GPT-3 trained on 300B tokens!
* LLMs
	* Good at:
		* Creativity
		* Human-like text
		* Simplify complex language
		* Translate
	* Bad at:
		* Handling ambiguity
		* Guaranteeing truthfulness
		* Recognizing and responding to emotional states
* Base models can be prompted into completing tasks – Make your model look like a document!


| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |


## Links


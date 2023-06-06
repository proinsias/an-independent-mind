---
date: 2023-06-06 14:57
last_modified_at: 2023-06-06 14:57
---
# How to Do Code Reviews Like a Human

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Michael Lynch]]
- Full Title: How to Do Code Reviews Like a Human
- Category: #articles
- URL: https://mtlynch.io/human-code-reviews-1/

## Highlights
- I prefer to keep my team’s style guide as Markdown under source control (e.g., GitHub pages). That way, any changes to the style guide go through the normal review process — someone has to explicitly approve the change, and everyone on the team has a chance to raise concerns
- The absolute maximum turnaround on a review round should be one business day
- day. If you’re struggling with a higher-priority issue and can’t complete a round of review in under a day, let your teammate know and give them the opportunity to reassign it to someone else
- The more notes you write in a given review round, the more you risk making the author feel overwhelmed. The exact limit varies by developer, but the danger zone generally begins in the range of 20-50 notes in a single round of review.
- restrict yourself to high-level feedback in the early rounds.
- Your low-level notes might become moot once the author integrates your high-level notes. By deferring them to a later round, you save yourself the nontrivial work of writing carefully-worded comments calling out the issues, and you spare the author from processing unnecessary notes. This technique also segments the layers of abstraction you focus on during the review, helping you and the author work through the changelist in a clear, systematic way.
- If you lighten the author’s load by writing out some of the changes you’re suggesting, you demonstrate that you are generous with your time as a reviewer.
- I’ll often create my own branch of the code to demonstrate a large proof of concept to the author, such as breaking up a large function or adding a unit test to cover an additional edge case.
- Limit yourself to two or three code examples per review round. If you start writing the author’s whole changelist for them, it signals that you don’t think they’re capable of writing their own code.
- This one is going to sound weird, but hear me out: never use the word “you” in a code review.
- Option 1: Replace ‘you’ with ‘we’
- Another way to avoid using “you” is to use a shorthand that omits the subject from the sentence:
- Compare the same note framed in two different ways: Feedback framed as command Feedback framed as request Move the Foo class to a separate file. Can we move the Foo class to a separate file?
- explain both your suggested change and the reason for the change.
- Grounding your notes in principles frames the discussion in a constructive way.
- Software development is both an art and science. You can’t always articulate exactly what is wrong with a piece of code in terms of established principles. Sometimes code is just ugly or unintuitive, and it’s hard to pin down why. In these cases, explain what you can, but keep it objective. If you say, “I found this hard to understand,” that’s at least an objective statement, as opposed to, “this is confusing,” which is a value judgment and may not be true for every person.
# How to Do Code Reviews Like a Human

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Michael Lynch]]
- Full Title: How to Do Code Reviews Like a Human
- Category: #articles
- URL: https://mtlynch.io/human-code-reviews-1/

## Highlights
- I prefer to keep my team’s style guide as Markdown under source control (e.g., GitHub pages). That way, any changes to the style guide go through the normal review process — someone has to explicitly approve the change, and everyone on the team has a chance to raise concerns
- The absolute maximum turnaround on a review round should be one business day
- day. If you’re struggling with a higher-priority issue and can’t complete a round of review in under a day, let your teammate know and give them the opportunity to reassign it to someone else
- The more notes you write in a given review round, the more you risk making the author feel overwhelmed. The exact limit varies by developer, but the danger zone generally begins in the range of 20-50 notes in a single round of review.
- restrict yourself to high-level feedback in the early rounds.
- Your low-level notes might become moot once the author integrates your high-level notes. By deferring them to a later round, you save yourself the nontrivial work of writing carefully-worded comments calling out the issues, and you spare the author from processing unnecessary notes. This technique also segments the layers of abstraction you focus on during the review, helping you and the author work through the changelist in a clear, systematic way.
- If you lighten the author’s load by writing out some of the changes you’re suggesting, you demonstrate that you are generous with your time as a reviewer.
- I’ll often create my own branch of the code to demonstrate a large proof of concept to the author, such as breaking up a large function or adding a unit test to cover an additional edge case.
- Limit yourself to two or three code examples per review round. If you start writing the author’s whole changelist for them, it signals that you don’t think they’re capable of writing their own code.
- This one is going to sound weird, but hear me out: never use the word “you” in a code review.
- Option 1: Replace ‘you’ with ‘we’
- Another way to avoid using “you” is to use a shorthand that omits the subject from the sentence:
- Compare the same note framed in two different ways: Feedback framed as command Feedback framed as request Move the Foo class to a separate file. Can we move the Foo class to a separate file?
- explain both your suggested change and the reason for the change.
- Grounding your notes in principles frames the discussion in a constructive way.
- Software development is both an art and science. You can’t always articulate exactly what is wrong with a piece of code in terms of established principles. Sometimes code is just ugly or unintuitive, and it’s hard to pin down why. In these cases, explain what you can, but keep it objective. If you say, “I found this hard to understand,” that’s at least an objective statement, as opposed to, “this is confusing,” which is a value judgment and may not be true for every person.

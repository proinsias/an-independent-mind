---
title: "Code review"
date: 2023-05-23 20:55
last_modified_at: 2023-05-25 10:28
tags:
  - git
---

### [git](git.md)

# Code review

## The point of code review

* To catch bugs (fresh eyes on code)
* To share knowledge
* To increase codebase familiarity
* To increase coherence and maintainability of ever-evolving code base
* To enforce norms
* To evolve norms

Per [Google’s Code Review Guidelines](https://google.github.io/eng-practices/review/reviewer/standard.html): _A key point here is that there is no such thing as "perfect" code—there is only better code_.

## Effective pull requests

### Everyone

-   Accept that many programming decisions are opinions. Discuss tradeoffs, which you prefer, and reach a resolution quickly.
-   Ask good questions; don't make demands. ("What do you think about naming this `:user_id`?")
-   Good questions avoid judgment and avoid assumptions about the author's perspective.
-   Ask for clarification. ("I didn't understand. Can you clarify?")
-   Avoid selective ownership of code. ("mine", "not mine", "yours")
-   Avoid using terms that could be seen as referring to personal traits. ("dumb", "stupid"). Assume everyone is intelligent and well-meaning.
-   Be explicit. Remember people don't always understand your intentions online.
-   Be humble. ("I'm not sure - let's look it up.")
-   Don't use hyperbole. ("always", "never", "endlessly", "nothing")
-   Don't use sarcasm.
-   Keep it real. If emoji, animated gifs, or humor aren't you, don't force them. If they are, use them with aplomb.
-   Talk synchronously (e.g. chat, screen-sharing, in person) if there are too many "I didn't understand" or "Alternative solution:" comments. Post a follow-up comment summarizing the discussion.
-   If you learned something new, share your appreciation. ("I did not know about this. Thank you for sharing it".)

### As the contributor

#### 

* Link to the code review from the ticket/story.
* Discuss the overall technical approach *before* coding, not after. 
* Use informative commit messages to help reviewer understand the decisions you made.
* Write a pull request description that sets your reviewer up for success by helping them understand why the code exists and what the PR intends to accomplish. If you have a particularly complex PR, consider doing a code walk-through with a reviewer first.
* Don’t couple dev tasks 1-to-1 with pull requests. It’s OK to split development of a feature across multiple pull requests. It’s also OK to create pull requests that aren’t associated with a specific task. Code reviews of large change sets are less effective.
	* Keep pull requests short whenever possible. `git diff --shortstat origin/main` will show you the size of your branch's diff from main; under 400 lines changed is a great goal.
-  Seek to understand the reviewer's perspective.
-  Try to respond to every comment.
* Push commits based on earlier rounds of feedback as isolated commits to the branch. Do not squash until the branch is ready to merge. Reviewers should be able to read individual updates based on their earlier feedback.
* Use tooling and conventions to reduce tedious arguments. 
* Follow the campsite rule and leave the codebase cleaner than you found it – though these sort of changes should be made in a separate PR.
* Consider fixing just the critical, merge-blocking issues within the same PR, and fixing other, non-critical issues in a fast-follow PR. This allows a PR submitter to merge their changes with less delay, while still addressing all issues raise in code review.
*   Be grateful for the reviewer's suggestions. ("Good call. I'll make that change.")

### As the reviewer

- Don't delay on sending feedback! The goal should be to merge quickly.
* If a PR is too large for you to reasonably review, you can ask the author to split it into multiple PRs.
* Use a naming convention to explicitly categorize your code review feedback. The PR submitter should know which code review comments are calling out must-fix issues, and which are simply stylistic feedback, without ambiguity. For example: BLOCKER, FAST-FOLLOW, NIT.
* Don't just focus on line-by-line, relatively minor issues. Make sure to spend time on the big picture to find if there are more serious design or architectural problems.
* Things to evaluate
	* Does the code appear to do what it claims to do?
	* Was the new code put in the right place?
	* Is the new code unnecessarily complex—or unnecessarily clever?
	* Does the new code do all it can to avoid adding to the overall complexity of our codebase?
	* Did the author write tests for any new code?

## Miscellaneous

## Links

* [6 Practices for Effective Pull Requests](https://blog.thepete.net/blog/2019/05/10/6-practices-for-effective-pull-requests/).
* [Code Review Guidelines for Data Science Teams](https://tdhopper.com/blog/code-review-guidelines).
* [Thoughtbot Code Review Guide](https://github.com/thoughtbot/guides/tree/main/code-review).

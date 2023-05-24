---
title: "Code review"
date: 2023-05-23 20:55
last_modified_at: 2023-05-24 10:37
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

* Use informative commit messages to help reviewer understand the decisions you made.
* 
* Don't delay on sending feedback! The goal should be to merge quickly.
* Discuss the overall technical approach before coding, not after. 
* Don’t couple dev tasks 1-to-1 with pull requests. It’s OK to split development of a feature across multiple pull requests. It’s also OK to create pull requests that aren’t associated with a specific task. Code reviews of large change sets are less effective.
	* Keep pull requests short whenever possible. `git diff --shortstat origin/main` will show you the size of your branch's diff from main; under 400 lines changed is a great goal.
* Use a naming convention to explicitly categorize your code review feedback. The PR submitter should know which code review comments are calling out must-fix issues, and which are simply stylistic feedback, without ambiguity. For example: BLOCKER, FAST-FOLLOW, NIT.
* Use tooling and conventions to reduce tedious arguments. 
* Don't just focus on line-by-line, relatively minor issues. Make sure to spend time on the big picture to find if there are more serious design or architectural problems.
* Consider fixing just the critical, merge-blocking issues within the same PR, and fixing other, non-critical issues in a fast-follow PR. This allows a PR submitter to merge their changes with less delay, while still addressing all issues raise in code review.
* Follow the campsite rule and leave it cleaner than you found it. These sort of changes should be made in a separate PR.

## Miscellaneous

## Links

* [6 Practices for Effective Pull Requests](https://blog.thepete.net/blog/2019/05/10/6-practices-for-effective-pull-requests/).
* [Code Review Guidelines for Data Science Teams](https://tdhopper.com/blog/code-review-guidelines).

---
title: "Mermaid"
date: 2023-05-19 11:48
last_modified_at: 2023-05-19 13:42
tags:
  - javascript
  - markdown
  - mermaid
---

### [[YOUR MOC]]

# Mermaid

Mermaid is a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Chart Setup

The first thing to tell mermaid is what type of chart you want to create.

The second thing is to declare which direction the chart should progress. You have a choice of TB (Top-Bottom), LR (Left-Right) or their opposites, BT and RL.

Then you can start adding the nodes you want and what sort of connection they have.

The most simple node consists of a single word. But if you want to have multiple words in one node, they need to be enclosed with square brackets and any alphanumeric string.

You also need to use an alphanumeric prefix and specific brackets if you want to change the shape of the node.

Lastly, you can show different and multiple relationships between the nodes. You can change the thickness of the links and whether there should be arrows. You can also add text to state the nature of the link.

## Chart types

### Flowchart

```mermaid
flowchart TD
1[identify needs] --> shopping --> cost-benefit
```

### Gantt

```mermaid
gantt
  title Chart of worker tasks
  dateFormat YYYYMMDD
  section Worker 1
  First Worker1 task: 20221101, 10d
  Second Worker1 task: 20d
  section Worker 2
  First Worker2 task: 20221111, 12d
  Second Worker2 task: 24d
```

### Graph

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

### Pie chart

```mermaid
pie title Title here
"A": 100
"B": 20
"C": 50
```

### Sequence Diagram

```mermaid
sequenceDiagram
    participant dotcom
    participant iframe
    participant viewscreen
    dotcom->>iframe: loads html w/ iframe url
    iframe->>viewscreen: request template
    viewscreen->>iframe: html & javascript
    iframe->>dotcom: iframe ready
    dotcom->>iframe: set mermaid data on iframe
    iframe->>iframe: render mermaid
```

## Node types

```mermaid
flowchart LR
A[identify needs] ---> B((shopping)) --> C{cost/benefits} --> D(rest)
```

## Relationship types

You can change the thickness of the links and whether there should be arrows. You can also add text to state the nature of the link.

```mermaid
flowchart LR
A[identify needs] <---> |Get money| B((shopping)) === C{cost/benefits}
C{cost/benefits} -.blah blah.-> A[identify needs]
```

## Adding icons

```mermaid
flowchart TD

A[Christmas] -->|Get money| B(fa:fa-car Go shopping)
```

## Miscellaneous

## Links

* [Mermaid Homepage](https://mermaid.js.org/).
* 
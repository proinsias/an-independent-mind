---
title: "Mermaid"
date: 2023-05-19 11:48
last_modified_at: 2023-05-19 13:28
tags:
  - javascript
  - markdown
  - mermaid
---

### [[YOUR MOC]]

# Mermaid

Mermaid is a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Flowchart

```mermaid
flowchart TD
1[identify needs] --> shopping --> cost-benefit
```

## Graph

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

## Sequence Diagram

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

## Miscellaneous

## Links

* [Mermaid Homepage](https://mermaid.js.org/).
* 
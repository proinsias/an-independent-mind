---
title: "Mermaid"
date: 2023-05-19 11:48
last_modified_at: 2023-05-19 14:00
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

### Class

```mermaid
classDiagram

Animal <|-- Duck

Animal <|-- Fish

Animal <|-- Zebra

Animal : +int age

Animal : +String gender

Animal: +isMammal()

Animal: +mate()

class Duck{

+String beakColor

+swim()

+quack()

}

class Fish{

-int sizeInFeet

-canEat()

}

class Zebra{

+bool is_wild

+run()

}
```

### ER

```mermaid
erDiagram

CUSTOMER }|..|{ DELIVERY-ADDRESS : has

CUSTOMER ||--o{ ORDER : places

CUSTOMER ||--o{ INVOICE : "liable for"

DELIVERY-ADDRESS ||--o{ ORDER : receives

INVOICE ||--|{ ORDER : covers

ORDER ||--|{ ORDER-ITEM : includes

PRODUCT-CATEGORY ||--|{ PRODUCT : contains

PRODUCT ||--o{ ORDER-ITEM : "ordered in"
```


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

### Git

```mermaid
gitGraph

commit

commit

branch develop

checkout develop

commit

commit

checkout main

merge develop

commit

commit
```

### Graph

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

### Journey

```mermaid
journey

title My working day

section Go to work

Make tea: 5: Me

Go upstairs: 3: Me

Do work: 1: Me, Cat

section Go home

Go downstairs: 5: Me

Sit down: 3: Me
```

### Mindmap

```mermaid
mindmap

root((mindmap))

Origins

Long history

::icon(fa fa-book)

Popularisation

British popular psychology author Tony Buzan

Research

On effectivness<br/>and features

On Automatic creation

Uses

Creative techniques

Strategic planning

Argument mapping

Tools

Pen and paper

Mermaid
```

### Pie

```mermaid
pie title Title here
"A": 100
"B": 20
"C": 50
```

### Sequence

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

```mermaid
sequenceDiagram

Alice->>+John: Hello John, how are you?

Alice->>+John: John, can you hear me?

John-->>-Alice: Hi Alice, I can hear you!

John-->>-Alice: I feel great!
```
```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### State

```mermaid
stateDiagram-v2

[*] --> Still

Still --> [*]

Still --> Moving

Moving --> Still

Moving --> Crash

Crash --> [*]
```

### Subgraph

```mermaid
graph TB
   subgraph "zoneB"
       n3(Node3)
       n4(Node4)
   end
   subgraph "zoneA"
       n1(Node1)
       n2(Node2)
   end
 
   classDef plain fill:#ddd,stroke:#fff,stroke-width:4px,color:#000;
   classDef k8s fill:#326ce5,stroke:#fff,stroke-width:4px,color:#fff;
   classDef cluster fill:#fff,stroke:#bbb,stroke-width:2px,color:#326ce5;
   class n1,n2,n3,n4 k8s;
   class zoneA,zoneB cluster;
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

```mermaid
graph LR;
	A--> B & C & D;
	B--> A & E;
	C--> A & E;
	D--> A & E;
	E--> B & C & D;
```

## Adding icons

```mermaid
flowchart TD

A[Christmas] -->|Get money| B(fa:fa-car Go shopping)
```

## Miscellaneous

## Links

* [Mermaid homepage](https://mermaid.js.org/).
* [Mermaid live editor](https://mermaid.live/).
* [mermaid-cli](https://github.com/mermaid-js/mermaid-cli): Takes a mermaid definition file as input and generates an svg/png/pdf file as output.
* [Mermaid Ink](https://mermaid.ink/): Convert mermaid live output to image via the web.
* 

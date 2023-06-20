---
title: "Mermaid"
date: 2023-05-19 11:48
last_modified_at: 2023-06-20 14:48
tags:
  - javascript
  - markdown
  - mermaid
  - reviewed
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
	Animal <|-- Duck : Cool
	
	Animal *-- Fish
	
	Animal o-- Zebra
	
	Class07 .. Class08
	
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

	Class07 : equals()
	Class07 : Object[] elementData

```

To describe the visibility (or encapsulation) of an attribute or method/function that is a part of a class (i.e. a class member), optional notation may be placed before that members' name:

-   `+` Public
-   `-` Private
-   `#` Protected
-   `~` Package/Internal

You can also include additional _classifiers_ to a method definition by adding the following notation to the _end_ of the method, i.e.: after the `()`:
-   `*` Abstract e.g.: `someAbstractMethod()*`
-   `$` Static e.g.: `someStaticMethod()$`

You can also include additional _classifiers_ to a field definition by adding the following notation to the end of its name:
-   `$` Static e.g.: `String someField$`

There are eight different types of relations defined for classes under UML which are currently supported:

| Type      | Description  |
| --------- | ------------ |
| \<\|\-\-      | Inheritance  |
| \*\-\-       | Composition  |
| o\-\-       | Aggregation  |
| \-\->       | Association  |
| \-\-        | Link (Solid) |
| ..>       | Dependency   |
| ..\|>      | Realization  |
| ..        | Link (Dashed)|

### Entity relationship

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

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```
```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h

```

```mermaid
    gantt
        apple :a, 2017-07-20, 1w
        banana :crit, b, 2017-07-23, 1d
        cherry :active, c, after b a, 1d

```

```mermaid
gantt
dateFormat HH:mm
axisFormat %H:%M
Initial milestone : milestone, m1, 17:49,2min
taska2 : 10min
taska3 : 5min
Final milestone : milestone, m2, 18:14, 2min
```

### Git

```mermaid
gitGraph

commit

commit type: NORMAL  # Default.

branch develop

checkout develop

commit id:"1111"

commit tag:"test"

commit type: HIGHLIGHT

checkout main

merge develop

commit

commit type: REVERSE

cherry-pick id:"1111"
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

```mermaid
%%{init:{"theme":"neutral"}}%%
sequenceDiagram
    actor me
    participant apiSrv as control plane<br><br>api-server
    participant etcd as control plane<br><br>etcd datastore
    participant cntrlMgr as control plane<br><br>controller<br>manager
    participant sched as control plane<br><br>scheduler
    participant kubelet as node<br><br>kubelet
    participant container as node<br><br>container<br>runtime
    me->>apiSrv: 1. kubectl create -f pod.yaml
    apiSrv-->>etcd: 2. save new state
    cntrlMgr->>apiSrv: 3. check for changes
    sched->>apiSrv: 4. watch for unassigned pods(s)
    apiSrv->>sched: 5. notify about pod w nodename=" "
    sched->>apiSrv: 6. assign pod to node
    apiSrv-->>etcd: 7. save new state
    kubelet->>apiSrv: 8. look for newly assigned pod(s)
    apiSrv->>kubelet: 9. bind pod to node
    kubelet->>container: 10. start container
    kubelet->>apiSrv: 11. update pod status
    apiSrv-->>etcd: 12. save new state
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
```mermaid
flowchart TB
    c1-->a2
    subgraph ide1 [one]
    a1-->a2
    end
```

```mermaid
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```

```mermaid
flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 -->f1
    end
    subgraph B2
        direction BT
        i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2
```

## Node types

```mermaid
flowchart LR
	A[identify needs] ---> B((shopping)) --> C{cost/benefits} --> D(rest)
```
```mermaid
flowchart LR
	id1([This is the text in the box]) --> id2[[This is the text in the box]] --> id3[(Database)]
```
```mermaid
flowchart LR
    id1>Text] --> id2{{Text}} --> id3[/Text/] --> id4[\Text\]
```

```mermaid
flowchart LR
	id5[/Text\] --> id6[\Text/] --> id7(((Text)))
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

```mermaid
flowchart LR
    A ~~~ B  # Invisible link.
```

```mermaid
flowchart LR
   a --> b & c--> d
```

```mermaid
flowchart TB
    A & B--> C & D
```

Each node in the flowchart is ultimately assigned to a rank in the rendered graph, i.e. to a vertical or horizontal level (depending on the flowchart orientation), based on the nodes to which it is linked. By default, links can span any number of ranks, but you can ask for any link to be longer than the others by adding extra dashes in the link definition.

## Adding icons

```mermaid
flowchart TD

A[Christmas] -->|Get money| B(fa:fa-car Go shopping)
```

## How to style diagrams

You can style one or more diagram elements using well-known CSS nomenclature. You accomplish this using two types of statements in the Mermaid code:

* `classDef` defines a class of style attributes.
* `class` defines one or more elements to apply the class to.

```
classDef k8s fill:#326ce5,stroke:#fff,stroke-width:4px,color:#fff; // defines style for the k8s class
class ingress,service,pod1,pod2 k8s; // k8s class is applied to elements ingress, service, pod1 and pod2.
```

## Comments

Comments can be entered within a flow diagram, which will be ignored by the parser. Comments need to be on their own line, and must be prefaced with `%%` (double percent signs). Any text after the start of the comment to the next newline will be treated as a comment, including any flow syntax.

```mermaid
flowchart LR
%% this is a comment A -- text --> B{node}
   A -- text --> B -- text2 --> C

```

## Miscellaneous

## Links

* [Mermaid homepage](https://mermaid.js.org/).
* [Mermaid live editor](https://mermaid.live/).
* [mermaid-cli](https://github.com/mermaid-js/mermaid-cli): Takes a mermaid definition file as input and generates an svg/png/pdf file as output.
* [Mermaid Ink](https://mermaid.ink/): Convert mermaid live output to image via the web.
* 

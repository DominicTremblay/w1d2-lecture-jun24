# Lecture W1D2 - The Dev Workflow

## Content

- Curriculum Overview
- Approach to lectures
- Incremental development
- Git

## Approach to lectures

Hey, I'm DOM

## Confidence Level of a Programmer (Joke)

Level 1- I can’t fix this

Level 2- Crisis of confidence

Level 3- Questions career

Level 4- Questions life

[Michael Jordan's Quote](./quote)

## Curriculum Overview

[slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA/edit#slide=id.g167e960765_0_0)

### What are Lectures

#### Lectures

> Everyday from 10am-12am

- Be there
- You need to attend

- More code demonstration
- Focused on the approach
  - Problem Solving
  - Step by step incremental development
  - Error driven development
- I'd like to give the context, why?
- Mix a theory and practice
- Engaging and inspiring
- You need to ask questions and participate
- Take notes with markdown

- Not for

  - Coding along session
  - Do your regular activities at the same time

* Lecture notes and recording will be sent via Compass

#### What are you here to learn

- Coding skills, technologies such as JavaScript NodeJS/Express, Ruby on Rails, but it's more than that

- Do coding skills alone ensure that you are a good developer?

* Motivation (passion)
* Resilience, perseverance
* Problem solving
* Curiosity
* Communication
* Teamwork
* Adaptability (Learning new skills, adapting to changes)
* Positive attitude
* Willingness to grow and learn, having a growth mindset (talent can be developed), learn from others

> You're more than coders. You're actually a communicator. You communicate your vision through code.

#### Tips

- Comparing to ourselves vs others
- Keep going and never give up
- Don't do it later
- Practice
- Provide feedback, talk to staff, mentors
- 15 minutes rule
- Help one another

* disclaimer: the first few weeks are going to feel very intense!

## Tools

### Terminal (command-line) / Vagrant

#### Vagrant

| command      | description                     |
| :----------- | :------------------------------ |
| vagrant up   | load vagrant                    |
| vagrant ssh  | connect to your vagrant machine |
| exit         | logout                          |
| vagrant halt | stop vagrant                    |

#### Terminal

| command        | description                     |
| :------------- | :------------------------------ |
| cd             | change directory                |
| ls             | list                            |
| mkdir          | make directory                  |
| touch filename | create a file                   |
| mv             | move, use it to copy and rename |
| pwd            | display the current path        |

** use your tab key **

- type `clear` or Control-L to clear the screen

### Code Editor (VS Code, Sublime, Atom, etc)

- Shortcuts

**Learn to use shortcuts**

- [VS Code Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Sublime Cheat Sheet](https://www.shortcutfoo.com/app/dojos/sublime-text-3-win/cheatsheet)

- Useful Add-Ons:
  - Linter
  - Bracket Matching
  - Coloring for other file extentions

### Google

- Find answers to your question
  - Stack Overflow

### Markdown

-[Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

- Take notes using markdown

### Version Control

- What, Why git?

  - Repositories (one repo per projects)
  - Save milestones
  - Keeps an history of your code (commits)
  - Backup copy on github
  - Work better as teams, branches

- Do use git

- Don't make backend into other folder

- You will _have_ to use git in team projects

#### Git Commands

- git workflow

  - add files to staging area
  - commit changes
  - update github

- git status
- git add .
- git commit -m "message"
- git remote -v (or add origin, rm origin)
- git push
- git pull
- git log

## How to approach problem solving

### Incremental development

- List the steps in order to solve a problem. Not thinking about the syntax.

- Step-by-step process

  Rinse and repeat:

  1. State the hypothesis
  2. Verify the hypothesis
  3. changes

- Writing pseudo-code

  - Write the steps in english to get to the solution

- Decomposition

  - Breaking down a complex problem into smaller more manageable problems
  - Each smaller problem is much simpler to solve

- Error-Driven Developement

  - Getting errors is part of the process -> Debugging
  - Incremental development is triggered by raising errors that will guide us in order to do the next steps

## What is an Algorithm

- Put simply an algorithm is a **series of steps to solve a problem**

- A more formal definition:

> "An algorithm is a _sequence of unambiguous instructions_ for _solving a problem_, i.e., for obtaining a required _output_ for any _legitimate input_ in a _finite amount of time._" -- _Anany Levitin_

- Sequence of unambiguous instructions

  - Humans use abstractions for almost everything (Grabing a coffee, go to work, etc)
  - Computers needs to be told every detailed steps in order to do something. These steps need to be precise.

- Solving a Problem

  - Am I solving the right problem?
  - Do I truly understand the problem

- Obtaining the required output

  - Am I getting the right solution? Does it solved the problem?

- Any legitimate input

  - Am I dealing with the right input?
  - Does it work with a different set of data?

- A finite amount of time

  - Can the solution be found in a reasonable amount of time

## Creating the app

- Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

- Understanding the problem?

## GitHub

- What is Github? What are the benefits?
- Create a new repo
- Creating branches and merging

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code...

### Improve the Solution

- Refactor the code

  - Readability
  - Modularity
  - Catch errors

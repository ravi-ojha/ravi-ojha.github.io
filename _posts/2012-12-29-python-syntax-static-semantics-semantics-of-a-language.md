---
layout: post
title: "Python: Syntax, Static Semantics, Semantics of a Language"
description: "Before we begin with any language, it's important to know the aspects of the language. What is Syntax? Semantics? Static Semantics? This post explain these terms with examples."
og_image: "documentation/rookieslab-og.jpg"
tags: [python, syntax, semantics]
redirect_from:
  - /2012/12/learning-python-edx-mitx-600x-lec-1-summary-revision.html
---

It was the first year of the launch of edX and MIT's 6.00x course was offered free of cost, along with certification. I, along with a friend of mine, started the classes. At the end of the course, we had a final exam. We started revising 2 weeks prior the exam and I had this idea of posting the revision on this blog for easy access in future.

This is a series of posts of all the lectures and we'll include all exam oriented points from the course-ware. I believe the best way to revise is to recall examples. I'll try to include fitting examples for each concept.

There are 3 main points to note from the first class.

## Knowledge: Declarative Knowledge & Imperative knowledge.

  * Declarative knowledge is statement of facts.
    * for example: π = 3.14. Its a fact.
  * Imperative knowledge is the method on how you reached to that fact.
    * for example:  π = circumference of any circle/diameter of that circle

## Computer Program: Fixed Computer Program & Stored Computer Program

  * Fixed Computer Program computes precisely only computation. They are devised to perform only specific task.
    * for example: While playing computer games a missile tracks you down if you fly over a 'Non-Civilian' area. That missile is an example of fixed computer program.
  * Stored Computer Program computes a set of predefined instructions stored in electronic memory.
    * for example: Very simple arithmetic and logic units, a simple calculator has predefined set of instructions on what to do if user inputs 2 + 5


## Aspects of Language:  Syntax, Static Semantics & Semantics

  * Syntax: Let's take an example to understand this.
    * for example: "Mouse Cat Dog" is not in a correct syntax as far as English language is concerned. Similarly, there is a particular syntax in any other language. We'll consider Python syntaxes later as we proceed, as for now 3.2 + 3.2 is a syntactically valid statement.

  * Static Semantics: Whether syntactically valid statements have any meaning.
    * for example: *"I are big"*... the syntax is correct, but there's a static semantic error that we know as grammatical error. Similarly `3/'three'` is a static semantic error in Python because `int 3` is being divided by `string 'three'`
  * Semantics: There should not be more than one meaning associated with any statement because computer cannot figure out which is the correct intended meaning.
    * for example: In English if I say *"I'm having a friend for dinner"*, the statement can be interpreted in two different ways. Such things should not, or I should say cannot happen in computer languages like Python.


In the next post, we will start with [basic data-types in Python]({{ site.baseurl }}{% post_url 2013-01-02-python-objects-and-types %}).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

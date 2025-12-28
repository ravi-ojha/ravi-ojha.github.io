---
date: 2013-01-05
layout: post
title: "Python: Branching code flow using if - else - elif"
description: "If this Then that! Python provides us with if, else and elif to add conditions in code and branch it like a tree"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-if-elif-else]
related_posts: ['/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx', '/posts/basics-of-recursion-in-programming-using-a-simple-example']
redirect_from:
  - /2012/12/branching-program-using-if-if-else-nested-if-else-elif.html
---

Branching programs allow us to make choices and do different things. Let's have look at the following flow diagram.

![Branching code in Python](/posts/if-else-python-branching.jpg)

Observing the flow diagram:

 - A test (expression that evaluates to `True` or `False`)
 - A block of code to execute
 - If the test is `True`
 - An optional block of code to execute if the test is `False`

Such a desire can be achieved using `if else` clauses in Python.

## A simple example of `if` and `else` in Python:

```python
x = int(raw_input('Enter an integer: ')) # Will wait for you to enter an int
if x%2 == 0:  # % (modulo) returns the remainder when x/2
    print('Even')
else:
    print('Odd')
print('Done with condition')
```


Analysis of the above code:

 - The expression `x%2 == 0` evaluates to `True` when the remainder of `x` divided by `2` is `0`
 - Note that `==` is used for comparison, since `=` is reserved for assignment
 - The indentation is important! Each indented set of expressions denotes a block of instructions
   - For example, if the last statement were indented, it would be executed as part of the `else` block of code
 - Note how this indentation provides a visual structure that reflects the semantic structure of the program


## Nested `if`, `else` and `elif` in Python:

An example program to check if a number if divisible by 2 and/or 3.

```python
x = int(raw_input('Enter an integer: ')) # Will wait for you to enter an int
if x%2 == 0:
    if x%3 == 0:
        print('Divisible by 2 and 3')
    else:
        print('Divisible by 2 but not by 3')
elif x%3 == 0:
    print('Divisible by 3 but not by 2')
else:
    print('Not divisible by either 2 or 3')
```

Analysis of the above code:

 - Notice the `if else` block inside the first `if` block. This is called nesting.
 - We have an `elif` block, this is executed when the code does not flow through `if`. `elif` is, as you might have guessed, just a short form for 'else if'.
 - The last `else` block is executed with the code does not flow through either of `if` or `elif`

## Compound conditions inside `if`

Let's consider a program to find the minimum of three integers.

```python
x, y, z = map(int, raw_input('Enter three space separated integer: ').split())
if x < y and x < z:
    print('Minimum among ' + str(x) + ', ' + str(y) + ', '+ str(z) + ' is ' + str(x))
elif y < z:
    print('Minimum among ' + str(x) + ', ' + str(y) + ', '+ str(z) + ' is ' + str(y))
else:
    print('Minimum among ' + str(x) + ', ' + str(y) + ', '+ str(z) + ' is ' + str(z))
```

Analysis of the above code:

 - The first statement itself is a mess here, what is does is, reads a string from input and tries to split them by space and then convert each of the parts into an integer type. If the conversion of all of them is successful, it assigns each of them to `x`, `y`, and `z` respectively.
 - We check for two conditions in the `if` clause, and then print a human readable string by joining several strings and numbers. Since `x`, `y`, and `z` were integers, we first need to convert them into `str` objects to be able to join them
 - `elif` and `else` are quite understandable

Next, we will discuss [how to perform repetitive tasks by creating a loop in Python](/posts/iteration-or-loop-in-python).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

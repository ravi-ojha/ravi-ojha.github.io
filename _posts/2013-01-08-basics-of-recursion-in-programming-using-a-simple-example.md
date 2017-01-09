---
layout: post
title: "Basics of Recursion with an example in Python"
description: "Recursion is a technique of finding solutions to larger problems using known solution of smaller problems. For me atleast, it was hard to get the understanding of recursion. In this post we see an iterative and recursive version of one problem in programming."
og_image: "documentation/rookieslab-og.jpg"
tags: [python, recursion, competitive-programming]
redirect_from:
  - /2012/12/learning-python-recursion-explained-how-recursive-functions-work.html
---

## What is Recursion?

Recursion is a technique of finding solutions to larger problems using known solution of smaller problems. A recursive function calls itself. Let's take an example problem to understand how it really works!

Say, we want to factorial of a number `x`. General formula for factorial of `x` is `x! = x * (x-1) * (x-2) * .. * 1`. `!` after the number is a notation for factorial. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120

If we were to write an iterative function to find factorial of any number `x`, it would look like this.

{% highlight python %}
def iterative_factorial(x):
    result = 1
    while x >= 1:
        result = result * x
        x = x - 1
    return result

print iterative_factorial(1)
# Output: 1
print iterative_factorial(2)
# Output: 2
print iterative_factorial(4)
# Output: 24
print iterative_factorial(8)
# Output: 40320
print iterative_factorial(5)
# Output: 120
{% endhighlight %}

Analysis of the above code:

 - First, we declare initial `result` to 1 because we know 0! is 1 and also 1! is 1.
 - Then we create a loop where we keep decreasing the value of `x` and multiply it with `result`
 - Finally, when `x` becomes 1, we break the loop and return `result`

## How to convert an iterative code into a recursive code?

There are two simple steps to do so.

 1. Figure out the base case
    - By base case, I mean we do know the answer of the problem for smaller input. For instance, we know in the above problem that 0! is 1 and 1! is also 1.
 2. Figure out a general formula for the problem
    - We have to find the solution to a larger problem by creating smaller, simpler problems. For instance, `x!` can be written as `x! = x * (x-1)!`.

#### That is all okay, but who will find the solution for `(x-1)!`?
Notice that `(x-1)!` is a smaller sub-problem for `x!`. We see that `(x-1)!` can be again written as `(x-1) * (x-2)!`. There is a pattern here. We can break the problems into smaller sub-problems until we reach the base case. And in this case our base case is 1! which is 1.

So the recursive implementation of the above code will look like this.

{% highlight python %}
def recursive_factorial(x):
    # This is a base case
    if x == 1 or x == 0:
        return 1
    # This line defines the general formula
    return x * recursive_factorial(x-1)

print recursive_factorial(1)
# Output: 1
print recursive_factorial(2)
# Output: 2
print recursive_factorial(4)
# Output: 24
print recursive_factorial(8)
# Output: 40320
print recursive_factorial(5)
# Output: 120
{% endhighlight %}

That was a very simple example of recursion. Recursion is one of the widely used techniques in programming. We will see more problems that can be solved using recursion in future posts.

There's another technique which optimizes a recursive code, it's called [Memoization, also known as Dynamic Programming]({ site.baseurl }}{% post_url 2013-07-07-what-is-memoization-what-is-dynamic-programming %}).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

---
layout: post
title: "Python: Perform repetitive tasks using Iteration or Loop"
description: "For and While loop constructs in Python enable us to perform repetitive tasks or help us iterate over a string or a list or any iterable object"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-loop, python-iteration]
related_posts: ['/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx', '/posts/python-lists-and-list-methods', '/posts/linear-search-vs-bisection-search-in-python']
redirect_from:
  - /2012/12/learning-python-iteration-or-looping-for-loop-while-loop.html
---

Iterations in programs allow us to perform repetitive tasks in a loop. Let's have look at the following flow diagram.

{% include image.html path="documentation/iteration-in-python.jpg" path-detail="documentation/iteration-in-python.jpg" alt="Iteration or Looping in Python" %}

Observing the flow diagram:

 - A test (expression that evaluates to `True` or `False`)
 - If the test is `True`, then execute the loop body once and go back to re-evaluate the test
 - Repeat until test evaluates to `False`, after which code following iteration statement is executed

<h2> Table of Contents </h2>

* TOC
{:toc}

## A simple example of iteration using `while` construct in Python:

{% highlight python %}
x = 0
result = 0
upper_limit = 10
while (x <= upper_limit): # Looping condition
    result = result + x
    x = x+1 # Incrementing x by 1
print 'Sum of first ' + str(upper_limit) + ' numbers is ' + str(result)
{% endhighlight %}

On execution, the above program prints:
{% highlight markdown %}
Sum of first 10 numbers is 55
{% endhighlight %}

Analysis of the above code:

 - First, we declare 3 integer variables, `x`, `result` and `upper_limit`
 - In the `while` loop we have a condition, and the code block inside the loop gets executed as long as the condition is `True`
 - Inside the code block we add `x` to `result` and increment `x` by 1
   - We are actually trying to find the sum of first 10 numbers
 - As soon as `x` becomes 11, the condition inside `while` loop evaluated to `False` and hence the loop breaks
 - Lastly we print out the sum of first 10 numbers


In programming, a code performing similar task can be written in multiple ways.
For instance, we can write the above code using `for` construct as well.

## A simple example of iteration using `for` construct in Python:

{% highlight python %}
result = 0
for x in range(1,11): # range() function explained below
    result = result + x
print 'Sum of first 10 numbers is ' + str(result)
{% endhighlight %}

Analysis of the above code:

 - Let's first see how `range()` works

{% highlight python %}
>>> range(10) #returns a list that contains numbers from 0 to (10-1)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  # This is a 'list' of integers
>>> range(1, 10) # Here we force range() to start from 1 and end before 10
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> range(1, 11) # This is what we used in the for loop above
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> range(1, 11, 2) # Third argument 2 says that it will jump 2 steps. 2 is called 'step argument'
[1, 3, 5, 7, 9]
>>> range(1, 11, 3) # 3 makes it jump 3 steps at a time
[1, 4, 7, 10]
{% endhighlight %}

 - Now that we know what range does, `for` simple iterates over each value in the the list returned by range and assigns it to `x`
 - Inside the `for` loop we add `x` to `result`
 - Finally, we print out the result

See? How easy it was to perform the same task in a different way.

## What to use & When?

 - Use `while` when you don't know the number of times the loop should repeat. It's only used when you know the condition when loop should break.
 - Use `for` when you know the fixed number of times the loop should repeat.


Next we will apply the knowledge gained so far to solve an interesting problem. [How to find square root of any number?]({{ site.baseurl }}{% post_url 2013-01-07-finding-square-root-using-guess-and-check-algorithm-in-python %})

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

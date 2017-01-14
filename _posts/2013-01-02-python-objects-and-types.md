---
layout: post
title: "Python: Objects and Types"
description: "Everything in Python is an object! Every object in Python has a type. This post discusses some of them with examples"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-objects, python-types]
redirect_from:
  - /2012/12/learnign-python-objects-of-python-tuples.html
---

## What are Python Objects?

First rule of Python. Everything is an object. But what is an object?
Let's take a few examples:

 * A number `5` is an object
 * A word `"susan"` is an object

## What are Python Types?

Every object has a type. There are numerous [built-in types in Python](https://docs.python.org/2/library/types.html).
We will some of the basic types here to get familiar with the language. Before continuing, please download and install Python 2.7 from the [official website](https://www.python.org/download/releases/2.7/).

Everything that is preceded with `>>>` assumes that the statement is being run inside Python shell.

This is an assignment statement since `5` is being assigned to `a`. `a` is known as a variable and it holds a value `5` in it.
{% highlight python %}
>>> a = 5
>>> a
5
{% endhighlight %}

`type()` is built-in function that returns 'type' of the object passed in it

{% highlight python %}
>>> type(a)
<type 'int'>
{% endhighlight %}

Also, we can directly pass value to `type()` to know that value's type.

{% highlight python %}
>>> type(5)
<type 'int'>
{% endhighlight %}

So `a` or `5` is of type `int` i.e. integer type.

Let's try a decimal number.

{% highlight python %}
>>> type(7.166666)
<type 'float'>
{% endhighlight %}

Decimal numbers are called `float` type.

Let's try and pass a word to `type()`

{% highlight python %}
>>> type(susan)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'susan' is not defined
{% endhighlight %}

What's that? Python raises error when we make mistakes. A word is surrounded by either `"` or `'` (quotes).

{% highlight python %}
>>> type("susan")
<type 'str'>
{% endhighlight %}

Such words are of type `str` i.e. string. [Read more about Python strings](#).

Let's take a look at one more type before we wrap up this post.

{% highlight python %}
>>> a = True
>>> type(a)
<type 'bool'>
{% endhighlight %}

This is called Boolean type. They are either `True` or `False`. This type is widely used in programming.

There are many more types in Python, we will see them one at a time in future posts. Some important ones are: [List]({{ site.baseurl }}{% post_url 2013-01-09-python-lists-and-list-methods %}), [Dictionary]({{ site.baseurl }}{% post_url 2013-01-10-python-dictionary-and-its-properties %}), [Tuple]({{ site.baseurl }}{% post_url 2013-01-09-python-tuples-and-basic-operations-on-tuples %}).

Next post will discuss some arithmetic and logical operations]({{ site.baseurl }}{% post_url 2013-01-03-arithmetic-and-logical-operators-in-python %}) we can perform on various data-types.

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

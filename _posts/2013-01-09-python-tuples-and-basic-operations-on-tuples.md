---
layout: post
title: "Python: Tuples and Basic Operations on Tuples"
description: "What is a tuple? How is it different from a list? And some basic methods on Tuples"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-tuple]
redirect_from:
  - /2012/12/learnign-python-objects-of-python-tuples.html
---

## What is a Tuple?

Tuple is a sequence of elements. A tuple is immutable, unlike a list in Python. By immutable, we mean that it is not possible to update a tuple after declaring one. The elements inside a tuple can be any Python object such a string, integer etc. Tuples are surrounded by parenthesis.

Examples:

{% highlight python %}
>>> t1 = (1, "abc", 3.0)
>>> t1
(1, 'abc', 3.0)
>>> type(t1)
<type 'tuple'>
{% endhighlight %}

## Declaring a Tuple

Empty Tuple is declared by empty parenthesis.

{% highlight python %}
>>> t2 = ()
>>> t2
()
>>> type(t2)
<type 'tuple'>
{% endhighlight %}

It is important to note that declaring a tuple consisting a single element requires a comma after the first element.

{% highlight python %}
>>> t3 = (1,)
>>> t3
(1,)
>>> type(t3)
<type 'tuple'>
{% endhighlight %}

If we miss out on that comma, `t3` would become an integer because 1 itself is an integer.

{% highlight python %}
>>> t3 = (1)
>>> type(t3)
<type 'int'>
>>> t3 = ('abc')
>>> type(t3)
<type 'str'>
{% endhighlight %}

Do keep this in mind. In future, a lot of people will judge your basic python knowledge on the above knowledge.

## Accessing elements of a Tuple

We use square brackets along with the index which we want to access.

Examples:

{% highlight python %}
>>> t1 = (1, "abc", 3.0)
>>> t1[0]
1
>>> t1[1]
'abc'
>>> t1[2]
3.0
>>> t1[3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: tuple index out of range
{% endhighlight %}

If you try accessing some index that doesn't exist, Python raises appropriate error.
We can also access elements using negative indexing.

{% highlight python %}
>>> t1[-1]
3.0
>>> t1[-2]
'abc'
{% endhighlight %}

Index table indicating positive and negative index values.

{% highlight markdown %}
---------------------------
tuple      |  1  "abc"  3.0
+ve index  |  0     1     2
-ve index  | -3    -2    -1
---------------------------
{% endhighlight %}

## Updating elements of a Tuple

We saw in the definition of a tuple that tuples are immutable. It is not possible to update them once declared. but what happens if we try to do so?

{% highlight python %}
>>> t1 = (1, "abc", 3.0)
>>> t1[1] = 'xyz'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
{% endhighlight %}

If we try to update the element by using index, it raises an error saying that 'tuple' object does not support item assignment.

However, if you add mutable elements such as a list inside a tuple, we can mutate them.
For example:

{% highlight python %}
>>> a = [1, 2]
>>> b = [4, 5]
>>> t = (a, b)
>>> t
([1, 2], [4, 5])
>>> a.append(3)
>>> t
([1, 2, 3], [4, 5])
{% endhighlight %}

A tuple can also be nested, i.e. just like a list inside a tuple, we can have tuples inside a tuple.

{% highlight python %}
>>> a = (1, 2)
>>> b = (4, 5)
>>> t = (a, b)
>>> t
((1, 2), (4, 5))
{% endhighlight %}

However, now that tuples are not mutable, we cannot update the tuple inside a tuple either.

If we really want to update a tuple, we can use that tuple to create another tuple.

{% highlight python %}
>>> t2 = (t[0], (3), t[1])
>>> t2
((1, 2), 3, (4, 5))
{% endhighlight %}

## Deleting a Tuple

Since tuples are immutable, it is not possible to delete individual elements of a tuple, however, we can delete the whole tuple itself.

{% highlight python %}
>>> t = (1, "abc", 3.0)
>>> del t
>>> t # If we try to access the tuple after deleting it, python will raise an error
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 't' is not defined
{% endhighlight %}

## Slicing a Tuple

Tuple slicing is similar to string slicing. Using slicing we can extract out elements of any tuple. We have to provide the starting index and the ending index i.e. `tuple[start:end]`

{% highlight python %}
>>> t = ('s', 'u', 's', 'a', 'n')
>>> t[1:4]
('u', 's', 'a')
{% endhighlight %}

It starts from `start` and ends right before `end`. It won't print the element at the index `end`. As in the example above, we have `n` at the 4th index of tuple `t`, however, it printed only till `a`.

If the `start` is out of the range of the tuple, then it prints empty tuple.

{% highlight python %}
>>> t[5:7]
()
{% endhighlight %}

If you don't provide `start`, then it will print from `start` till `end-1` element.

{% highlight python %}
>>> t[:3]
('s', 'u', 's')
{% endhighlight %}

Similarly, if `end` is not provided, it prints till the last element of the tuple.

{% highlight python %}
>>> t[2:]
('s', 'a', 'n')
{% endhighlight %}

And if we don't provide either of them? You guessed it right! It prints the whole tuple as is.

{% highlight python %}
>>> t[:]
('s', 'u', 's', 'a', 'n')
{% endhighlight %}

## Frequently used Tuple methods

Depending on the elements inside a tuple, there are certain useful methods we can use with a tuple.

{% highlight python %}
>>> t = (5, 2, 9, 7)
>>> min(t) # Returns the minimum element
2
>>> max(t) # Returns the maximum element
9
>>> len(t) # Returns the length of the tuple
4
{% endhighlight %}

Using `+` to create a new tuple using existing tuples. This is called concatenation.

{% highlight python %}
>>> t1 = (1, 2)
>>> t2 = (3,)
>>> t3 = (4, 5)
>>> t = (t1 + t2 + t3)
>>> t
(1, 2, 3, 4, 5)
{% endhighlight %}

In Python, you will notice so many similarities between the methods on [strings]({{ site.baseurl }}{% post_url 2013-01-04-python-strings-and-frequently-used-str-methods %}), [tuples]({{ site.baseurl }}{% post_url 2013-01-09-python-tuples-and-basic-operations-on-tuples %}) and [lists]({{ site.baseurl }}{% post_url 2013-01-09-python-lists-and-list-methods %}). It is so easy to understand them one you understand one of them. Next, we will see [Lists in Python]({{ site.baseurl }}{% post_url 2013-01-09-python-lists-and-list-methods %}).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

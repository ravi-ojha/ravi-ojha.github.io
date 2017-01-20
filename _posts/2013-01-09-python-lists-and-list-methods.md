---
layout: post
title: "Python: Lists and List methods"
description: "Declaring, Accessing, Slicing, Deleting and Updating Lists and its elements in Python"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-list]
redirect_from:
  - /2012/12/python-objects-lists-mutation-of-list.html
---

<h2> Table of Contents </h2>

* TOC
{:toc}

## What is a List?

List is a sequence of elements. A list is mutable, unlike a tuple in Python. By mutable, we mean that it is possible update a list after declaring one. The elements inside a list can be any Python object such a string, integer etc. Lists are surrounded by square brackets.

Examples:

{% highlight python %}
>>> l = [1, 'two', 3.0]
>>> l
[1, 'two', 3.0]
>>> type(l)
<type 'list'>
{% endhighlight %}

## Declaring a List

Empty List is declared by empty square brackets.

{% highlight python %}
>>> l2 = []
>>> l2
[]
>>> type(l2)
<type 'list'>
{% endhighlight %}

A list with multiple elements is declared by having those elements separated by a comma.

{% highlight python %}
>>> l = [2, 3, 5, 7, 11]
>>> l
[2, 3, 5, 7, 11]
{% endhighlight %}

## Accessing elements of a List

We use square brackets along with the index which we want to access.

Examples:

{% highlight python %}
>>> l = [1, 'two', 3.0]
>>> l[0]
1
>>> l[1]
'two'
>>> l[2]
3.0
>>> l[3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
{% endhighlight %}

If we try to access some index that doesn't exist, Python raises appropriate error.
We can also access elements using negative indexing.

{% highlight python %}
>>> l[-1]
3.0
>>> l[-2]
'two'
{% endhighlight %}

Index table indicating positive and negative index values.

{% highlight markdown %}
---------------------------
list       |  1  "two"  3.0
+ve index  |  0     1     2
-ve index  | -3    -2    -1
---------------------------
{% endhighlight %}

## Updating elements of a List

We saw that in Python, tuples and strings are immutable. However, lists are mutable. We can update the list by accessing its elements by index.

{% highlight python %}
>>> l = [1, 'two', 3.0]
>>> l
[1, 'two', 3.0]
>>> l[1] = 2
>>> l
[1, 2, 3.0]
{% endhighlight %}

## Deleting elements of a List

We can delete elements of a list by their index. For example:

{% highlight python %}
>>> l
[1, 2, 3.0]
>>> del l[1] # Delete the element at position 1
>>> l
[1, 3.0]
{% endhighlight %}

We can also delete an entire list using `del`

{% highlight python %}
>>> del l
>>> l # If we try to access the tuple after deleting it, python will raise an error
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'l' is not defined
{% endhighlight %}

There a two methods on list which can be used to delete elements from the list, `remove()` and `pop()`.

 - `list.remove(x)` will remove the first occurrence of x in the list.

{% highlight python %}
>>> l = [1, 2, 3]
>>> l.remove(2)
>>> l
[1, 3]
{% endhighlight %}


 - `list.pop(idx)` will remove and return the element at the position `idx`

{% highlight python %}
>>> l = [1, 2, 3]
>>> l.pop(1)
2
>>> l
[1, 3]
{% endhighlight %}

 - If we don't provide `idx` to `pop()`, it will remove the last element in the list

{% highlight python %}
>>> l = [1, 2, 3]
>>> l.pop()
3
>>> l
[1, 2]
{% endhighlight %}


## Slicing a List

Using slicing we can extract out elements of any list. We have to provide the starting index and the ending index i.e. `list_name[start:end]`

{% highlight python %}
>>> l = ['s', 'u', 's', 'a', 'n']
>>> l[1:4]
['u', 's', 'a']
{% endhighlight %}

It starts from `start` and ends right before `end`. It won't print the element at the index `end`. As in the example above, we have `n` at the 4th index of list `l`, however, it printed only till `a`.

If the `start` is out of the range of the list, then it prints empty list.

{% highlight python %}
>>> l[5:7]
[]
{% endhighlight %}

If you don't provide `start`, then it will print from `start` till `end-1` element.

{% highlight python %}
>>> l[:3]
['s', 'u', 's']
{% endhighlight %}

Similarly, if `end` is not provided, it prints till the last element of the list.

{% highlight python %}
>>> l[2:]
['s', 'a', 'n']
{% endhighlight %}

And if we don't provide either of them? You guessed it right! It prints the whole list as is.

{% highlight python %}
>>> l[:]
('s', 'u', 's', 'a', 'n')
{% endhighlight %}

This is called deepcopy. It creates a copy of the list and returns another list.
This is a very important concept and people tend to makes mistakes around it. Let's take an example to understand this.

There are two terms, list assignment and list copying/deepcopying.

{% highlight python %}
>>> l1 = [1, 2, 3]
>>> l2 = l1 # This is called Assignment. List l1 is assigned to l2
>>> l3 = l1[:] # This is called Copying. List l1 is copied into l3
>>> l1[2] = 'three'
>>> l1
[1, 2, 'three']
>>> l2
[1, 2, 'three']
>>> l3
[1, 2, 3]
{% endhighlight %}

Here, we are confused, Why is only l2 affected and not l3.
That is because, l2 points to the address of l1 in computer memory, but l3 is created as a whole new list and acquires specific memory in the computer that contains all the elements of l1. Visually, we can represent it in following way:

{% include image.html path="documentation/python-list.png" path-detail="documentation/python-list.png" alt="Sample image" %}


## Frequently used List methods

Insert a new element at the end of the list.

{% highlight python %}
>>> l = [1, 2, 3]
>>> l.append(5)
>>> l
[1, 2, 3, 5]
{% endhighlight %}

Insert a new element at a specific position in the list.

{% highlight python %}
>>> l
[1, 2, 3, 5]
>>> l.insert(3, 4) # l.insert(idx, element) - inserts element at index idx
>>> l
[1, 2, 3, 4, 5]
{% endhighlight %}

Extend an existing list using another list.

{% highlight python %}
>>> l1 = [1, 2]
>>> l2 = [3, 4]
>>> l1.extend(l2)
>>> l2
[3, 4]
>>> l1
[1, 2, 3, 4]
{% endhighlight %}

Finding the index of any element in a list

{% highlight python %}
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.index(2) # Returns the index of first occurrence of 2
1
{% endhighlight %}

Count the occurence of any element in a list

{% highlight python %}
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.count(2)
2
{% endhighlight %}

Reverse a list

{% highlight python %}
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.reverse() # Reverse the list in place, note that it doesn't return a new list
>>> l
[1, 2, 3, 9, 7, 2, 4]
{% endhighlight %}

Sort a list in place

{% highlight python %}
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.sort() # Sorts the list in place, note that it doesn't return a new list
>>> l
[1, 2, 2, 3, 4, 7, 9]
{% endhighlight %}

Get a copy of sorted list

{% highlight python %}
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l2 = sorted(l)
>>> l
[4, 2, 7, 9, 3, 2, 1]
>>> l2
[1, 2, 2, 3, 4, 7, 9]
{% endhighlight %}

Some more common functions on list.

{% highlight python %}
>>> l = [5, 2, 9, 7]
>>> min(t) # Returns the minimum element
2
>>> max(t) # Returns the maximum element
9
>>> len(t) # Returns the length of the list
4
{% endhighlight %}


In Python, list is the most versatile data-type. You'll find that list is used in almost every other complex data-structure in Python. Next, we will see yet another widely used data-type, `dict` - [Dictionaries in Python]({{ site.baseurl }}{% post_url 2013-01-10-python-dictionary-and-its-properties %}).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

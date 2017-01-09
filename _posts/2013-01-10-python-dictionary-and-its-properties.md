---
layout: post
title: "Python: Dictionary and its properties"
description: "Dictionary is a generalization of a List. Dictionary stores (key, value) pair for easier value access in future using the key. We see how it is different from a list and its properties."
og_image: "documentation/rookieslab-og.jpg"
tags: [python, python-dict]
redirect_from:
  - /2012/12/python-objects-dictionary-dict-examples-insertion-lists.html
---

## What is a Dictionary?

In Python, Dictionary is a generalization of a List. Values in a list are accessed using index that start from 0, whereas values in a Dictionary are accessed using a `key`. A key can be any immutable python object. Dictionaries are surrounded by curly braces.

An example comparing a `list` and `dict` would be helpful:

{% highlight python %}
>>> l = ['zero', 'one', 'two']
>>> l[0]
'zero'
>>> l[1]
'one'
>>> d = {0: 'zero', 1: 'one', 2: 'two'}
>>> d[0]
'zero'
>>> d[1]
'one'
{% endhighlight %}

Now, why should I use a dictionary if I can use a list? Good question!
We see that accessing an element in a list requires us to use specific index, which is an integer. However, we can have any other immutable Python object in case of dictionary!

For example:

{% highlight python %}
>>> d = {'i': 'one', 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d['ii']
'two'
>>> d = {'rose': 'red', 'violet': 'blue', 'python': 'fun'}
>>> d['python']
'fun'
{% endhighlight %}

In dictionary, we can define our own keys. In `d = {'i': 'one', 'ii': 'two', 'iii': 'three', 'iv': 'four'} `, keys are `['i', 'ii', 'iii', 'iv']`.

## Declaring a Dictionary

Empty dictionary is declared by empty curly braces.

{% highlight python %}
>>> d = {}
>>> d
{}
>>> type(d)
<type 'dict'>
{% endhighlight %}

Generalized form of declaring a dictionary is `d = {key1: value1, key2: value2 .. .. }`:

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month['Apr']
4
{% endhighlight %}

## Accessing elements of a Dictionary

We use square brackets along with the key whose value we want to access.

Examples:

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month['Apr']
4
>>> month['Dec']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Dec'
{% endhighlight %}

We get a `KeyError` if we try to access using some key which is not present in the dictionary.
A safer way to use the `get()` method on a dictionary.

{% highlight python %}
>>> month.get('Apr')
4
>>> month.get('Dec') # This won't print anything
{% endhighlight %}

`get()` returns `None` in case the key is not found in the `dict`. If you want to verify this, use `print()` function.

{% highlight python %}
>>> print month.get('Dec')
None
{% endhighlight %}

## Updating a value against a key in Python dict

Dictionaries are mutable, just like lists. We can update a value at using a specific key.

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month['Jan'] = 'One'
>>> month.get('Jan')
'One'
{% endhighlight %}

Unlike a List or Tuple, Dictionary does not maintain the order in which you added the keys and values. For instance, if you try to print the dict in the above example, you'll see a random order.

{% highlight python %}
>>> month
{'Mar': 3, 'Feb': 2, 'Apr': 4, 'June': 6, 'Jan': 'One', 'May': 5}
{% endhighlight %}

If we try to update a key which does not exist in the dictionary, python will create a new key and add it to the `dict`. For example:

{% highlight python %}
>>> month['July'] = 7
>>> month
{'Mar': 3, 'Feb': 2, 'Apr': 4, 'June': 6, 'Jan': 'One', 'May': 5, 'July': 7}
{% endhighlight %}

## Deleting elements of a List

We can delete a value in a `dict` by using a key. For example:

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month
{'Mar': 3, 'Feb': 2, 'Apr': 4, 'June': 6, 'Jan': 1, 'May': 5}
>>> del month['Mar']
>>> month
{'Feb': 2, 'Apr': 4, 'June': 6, 'Jan': 1, 'May': 5}
{% endhighlight %}

We can also delete an entire `dict` using `del`

{% highlight python %}
>>> del month
>>> month # If we try to access the dict after deleting it, python will raise an error
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'month' is not defined
{% endhighlight %}

In case we want to remove all key: value pairs inside the `dict`, we can use `dict.clear()` method. This way, the variable will not be destroyed and we can use it in future.

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month.clear()
>>> month
{}
{% endhighlight %}

In case we don't want to delete the key: value pair but would like to remove the value against the key, we can set `None` value against that key.

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> print month.get('Jan')
1
>>> month['Jan'] = None
>>> print month.get('Jan')
None
{% endhighlight %}

## Looping over a Dictionary in Python

`dict.items()` returns a list of (key, value) tuples of the dictionary. We can use it iterate/loop over the dictionary.

{% highlight python %}
>>> month.items()
[('Mar', 3), ('Feb', 2), ('Apr', 4), ('June', 6), ('Jan', 1), ('May', 5)]
{% endhighlight %}

{% highlight python %}
for key, value in month.items():
    print key, value

Mar 3
Feb 2
Apr 4
June 6
Jan One
May 5
July 7
{% endhighlight %}


## Frequently used Dictionary methods

Get a list of all the keys of the dictionary.

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month.keys()
['Mar', 'Feb', 'Apr', 'June', 'Jan', 'May']
{% endhighlight %}

Similarly, we can get a list of the all the values of the dictionary.

{% highlight python %}
>>> month = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,  'May': 5, 'June': 6}
>>> month.values()
[3, 2, 4, 6, 1, 5]
{% endhighlight %}

Creating a copy of a dictionary.

{% highlight python %}
>>> d1 = {'i': 'one', 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d2 = d1 # This is assignment, not copying
>>> d1['i'] = 1
>>> d1
{'i': 1, 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d2
{'i': 1, 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d1 = {'i': 'one', 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d2 = d1.copy() # This is copying
>>> d1['i'] = 1
>>> d1
{'i': 1, 'ii': 'two', 'iii': 'three', 'iv': 'four'}
>>> d2
{'i': 'one', 'ii': 'two', 'iii': 'three', 'iv': 'four'}
{% endhighlight %}

Dictionaries are yet another widely used data-structures in Python, just like [Lists]({ site.baseurl }}{% post_url 2013-01-09-python-lists-and-list-methods %}). It would be interesting to know how it is possible to have various types of keys in dictionary and yet have a fast lookup while accessing the value for that key. Python creates a hash for the key and created internal hash: value map. Let's not get deeper into this, it's a post for some other day.

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

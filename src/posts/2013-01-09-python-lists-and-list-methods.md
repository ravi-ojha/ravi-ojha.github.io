---
date: 2013-01-09
layout: post
title: "Python: Lists and List methods"
description: "Declaring, Accessing, Slicing, Deleting and Updating Lists and its elements in Python"
og_image: "documentation/rookieslab-og.jpg"
tags: [python]
related_posts: ['/posts/python-tuples-and-basic-operations-on-tuples', '/posts/python-strings-and-frequently-used-str-methods']
redirect_from:
  - /2012/12/python-objects-lists-mutation-of-list.html
is_archived: true
---

## What is a List?

List is a sequence of elements. A list is mutable, unlike a tuple in Python. By mutable, we mean that it is possible update a list after declaring one. The elements inside a list can be any Python object such a string, integer etc. Lists are surrounded by square brackets.

Examples:

```python
>>> l = [1, 'two', 3.0]
>>> l
[1, 'two', 3.0]
>>> type(l)
<type 'list'>
```

## Declaring a List

Empty List is declared by empty square brackets.

```python
>>> l2 = []
>>> l2
[]
>>> type(l2)
<type 'list'>
```

A list with multiple elements is declared by having those elements separated by a comma.

```python
>>> l = [2, 3, 5, 7, 11]
>>> l
[2, 3, 5, 7, 11]
```

## Accessing elements of a List

We use square brackets along with the index which we want to access.

Examples:

```python
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
```

If we try to access some index that doesn't exist, Python raises appropriate error.
We can also access elements using negative indexing.

```python
>>> l[-1]
3.0
>>> l[-2]
'two'
```

Index table indicating positive and negative index values.

```text
---------------------------
list       |  1  "two"  3.0
+ve index  |  0     1     2
-ve index  | -3    -2    -1
---------------------------
```

## Updating elements of a List

We saw that in Python, tuples and strings are immutable. However, lists are mutable. We can update the list by accessing its elements by index.

```python
>>> l = [1, 'two', 3.0]
>>> l
[1, 'two', 3.0]
>>> l[1] = 2
>>> l
[1, 2, 3.0]
```

## Deleting elements of a List

We can delete elements of a list by their index. For example:

```python
>>> l
[1, 2, 3.0]
>>> del l[1] # Delete the element at position 1
>>> l
[1, 3.0]
```

We can also delete an entire list using `del`

```python
>>> del l
>>> l # If we try to access the tuple after deleting it, python will raise an error
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'l' is not defined
```

There a two methods on list which can be used to delete elements from the list, `remove()` and `pop()`.

 - `list.remove(x)` will remove the first occurrence of x in the list.

```python
>>> l = [1, 2, 3]
>>> l.remove(2)
>>> l
[1, 3]
```


 - `list.pop(idx)` will remove and return the element at the position `idx`

```python
>>> l = [1, 2, 3]
>>> l.pop(1)
2
>>> l
[1, 3]
```

 - If we don't provide `idx` to `pop()`, it will remove the last element in the list

```python
>>> l = [1, 2, 3]
>>> l.pop()
3
>>> l
[1, 2]
```


## Slicing a List

Using slicing we can extract out elements of any list. We have to provide the starting index and the ending index i.e. `list_name[start:end]`

```python
>>> l = ['s', 'u', 's', 'a', 'n']
>>> l[1:4]
['u', 's', 'a']
```

It starts from `start` and ends right before `end`. It won't print the element at the index `end`. As in the example above, we have `n` at the 4th index of list `l`, however, it printed only till `a`.

If the `start` is out of the range of the list, then it prints empty list.

```python
>>> l[5:7]
[]
```

If you don't provide `start`, then it will print from `start` till `end-1` element.

```python
>>> l[:3]
['s', 'u', 's']
```

Similarly, if `end` is not provided, it prints till the last element of the list.

```python
>>> l[2:]
['s', 'a', 'n']
```

And if we don't provide either of them? You guessed it right! It prints the whole list as is.

```python
>>> l[:]
('s', 'u', 's', 'a', 'n')
```

This is called deepcopy. It creates a copy of the list and returns another list.
This is a very important concept and people tend to makes mistakes around it. Let's take an example to understand this.

There are two terms, list assignment and list copying/deepcopying.

```python
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
```

Here, we are confused, Why is only l2 affected and not l3.
That is because, l2 points to the address of l1 in computer memory, but l3 is created as a whole new list and acquires specific memory in the computer that contains all the elements of l1. Visually, we can represent it in following way:

![Sample image](/posts/python-list.png)


## Frequently used List methods

Insert a new element at the end of the list.

```python
>>> l = [1, 2, 3]
>>> l.append(5)
>>> l
[1, 2, 3, 5]
```

Insert a new element at a specific position in the list.

```python
>>> l
[1, 2, 3, 5]
>>> l.insert(3, 4) # l.insert(idx, element) - inserts element at index idx
>>> l
[1, 2, 3, 4, 5]
```

Extend an existing list using another list.

```python
>>> l1 = [1, 2]
>>> l2 = [3, 4]
>>> l1.extend(l2)
>>> l2
[3, 4]
>>> l1
[1, 2, 3, 4]
```

Finding the index of any element in a list

```python
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.index(2) # Returns the index of first occurrence of 2
1
```

Count the occurence of any element in a list

```python
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.count(2)
2
```

Reverse a list

```python
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.reverse() # Reverse the list in place, note that it doesn't return a new list
>>> l
[1, 2, 3, 9, 7, 2, 4]
```

Sort a list in place

```python
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l.sort() # Sorts the list in place, note that it doesn't return a new list
>>> l
[1, 2, 2, 3, 4, 7, 9]
```

Get a copy of sorted list

```python
>>> l = [4, 2, 7, 9, 3, 2, 1]
>>> l2 = sorted(l)
>>> l
[4, 2, 7, 9, 3, 2, 1]
>>> l2
[1, 2, 2, 3, 4, 7, 9]
```

Some more common functions on list.

```python
>>> l = [5, 2, 9, 7]
>>> min(t) # Returns the minimum element
2
>>> max(t) # Returns the maximum element
9
>>> len(t) # Returns the length of the list
4
```


In Python, list is the most versatile data-type. You'll find that list is used in almost every other complex data-structure in Python. Next, we will see yet another widely used data-type, `dict` - [Dictionaries in Python](/posts/python-dictionary-and-its-properties).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

---
date: 2013-01-04
layout: post
title: "Python: Strings and it's frequently used methods"
description: "Accessing string characters via index, string slicing and frequently used str methods such as find, replace. How to read input from Standard Input STDIN"
og_image: "documentation/rookieslab-og.jpg"
tags: [python]
related_posts: ['/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx', '/posts/python-lists-and-list-methods', '/posts/python-dictionary-and-its-properties']
redirect_from:
  - /2012/12/operations-on-string-some-simple.html
is_archived: true
---

Strings are just words or a combination of words. Python has a built-in class `str`, which comes in handy while dealing with words or sentences.

## How to declare a string in Python?

Strings are surrounded by either `"` or `'`.

```python
>>> s = 'susan'
>>> s
'susan'
>>> type(s)
<type 'str'>
```

But hey! Why does it print the quotes along-with?
Python merely outputs whatever is returned from the last statement. When we types `s`, it returned the object `'susan'`. To print the word 'susan' without quotes, python comes with `print()` function. It will print the string `s` as is.

```python
>>> print(s)
susan
```

## Accessing string characters in Python

Each character of a string has some index value. Index values starts from 0.

```text
-----------------
str   | s u s a n
index | 0 1 2 3 4
-----------------
```

We can access any character of a string by providing the index of that character.

```python
>>> s[0]
's'
>>> s[1]
'u'
>>> s[2]
's'
>>> s[3]
'a'
>>> s[4]
'n'
```

What if we go beyond the length of the string? Let's try it out.

```python
>>> s[5]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```

Python raises an error saying that the index is out of range. How do I know what is the length of the string?

```python
>>> len(s)
5
```

Function `len()` returns the length of string. It can also be used for many other types of objects.

With this information, one might think that I can change a string by changing the values at any index of the string. Smart! However, Python strings are immutable, which means that once declared, strings cannot be altered. If we really want to have the facility of altering a list of characters, we can use [Python Lists](#).

However, we can use multiple strings to form another string.

```python
>>> a = 'Hi'
>>> b = 'Susan'
>>> print(a + b) # Joins two strings
HiSusan
>>> print(a + ' ' + b) # We want a space between those words
Hi Susan
```

## String Slicing in Python

Using slicing we can extract out sub-strings of any string. We have to provide the starting index and the ending index i.e. `string[start:end]`

```python
>>> s[1:4]
'usa'
```

It starts from `start` and ends right before `end`. It won't print the character at the index `end`. As in the example above, we have `n` at the 4th index of `"susan"`, however, it printed only till `a`.

Python also supports negative indexing! It means that if you want to access the last character of any string, you could simply do `s[-1]`

```python
>>> s[-1]
'n'
```

```text
---------------------------
str        |  s  u  s  a  n
+ve index  |  0  1  2  3  4
-ve index  | -5 -4 -3 -2 -1
---------------------------
```

So we can also slice strings using -ve indices!

```python
>>> s[-4:-1]
'usa'
```

If the `start` is out of the range of the string, then it prints empty string.

```python
>>> s[5:7]
''
```

If you don't provide `start`, then it will print from `start` till `end-1` character.

```python
>>> s[:3]
'sus'
```

Similarly, if `end` is not provided, it prints till the end of string.

```python
>>> s[2:]
'san'
```

And if we don't provide either of them? You guessed it right! It prints the whole string as is.

```python
>>> s[:]
'susan'
```

## Frequently used string methods

```python
>>> s.upper() # Returns the string in uppercase
'SUSAN'
>>> s.lower() # Returns the string in lowercase
'susan'
>>> s.replace('s','z') # Replaces all the occurrences of 's' by 'z'
'zuzan'
>>> s.find('a') # Returns the index of first occurrence of 'a' in s
3
>>> s.find('k') # Returns -1 if no such string found in s
-1
```

## Reading input from Standard Input (STDIN) in Python

Python built-in method `raw_input()` is used to read strings from Standard Input stream

```python
>>> name = raw_input('Who are you?') # It will wait for you to type something and hit Enter key
Who are you?Ravi
>>> print('Welcome! ' + name)
Welcome! Ravi
```

Next, we will see how to [control the flow of a program](/posts/branching-with-if-else-elif-in-python) depending on various conditions.

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

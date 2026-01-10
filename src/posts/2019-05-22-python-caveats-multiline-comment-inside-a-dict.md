---
date: 2019-05-22
layout: post
title: "Python Caveats #1: How to put multiline comments in Python dict?"
description: "How to put multiline comments in python dict? Should we use triple quotes style or multiline hashes?"
og_image: "documentation/python-caveats-1.jpg"
tags: [python]
related_posts: ['/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth', '/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx']
subscription_form: true
---


Let's say we have a Python dict and we were to document the general format of the key-value pairs. For the lack of a better example, let's take the following dict as an example:

```python
family = {
    "goku": {
        "name": "Goku",
        "race": "Saiyan",
        "aliases": ["Son Goku", "Kakarot"],
    },
    "chi-chi": {
        "name": "Chi Chi",
        "race": "Human",
        "aliases": ["The Ox-Princess"],
    },
    "gohan": {
        "name": "gohan",
        "race": "Saiyan",
        "aliases": ["Great Saiyaman", "Son Gohan"],
    },
}
```


The general format of the key-value pair is:

```python
"username": {
    "name": "",
    "race": "",
    "aliases" [],
}
```

And to add this as comment, we might try this:

```python
family = {
    """
    General format of entries is

    "username": {
        "name": "",
        "race": "",
        "aliases" [],
    }

    """
    "goku": {
        "name": "Goku",
        "race": "Saiyan",
        "aliases": ["Son Goku", "Kakarot"],
    },
    "chi-chi": {
        "name": "Chi Chi",
        "race": "Human",
        "aliases": ["The Ox-Princess"],
    },
    "gohan": {
        "name": "gohan",
        "race": "Saiyan",
        "aliases": ["Great Saiyaman", "Son Gohan"],
    },
}
```

Let's check the keys of this dict now.

```python
In [15]: family.keys()
Out[15]: 
['\n    General format of entries is\n\n    "username": {\n        "name": "",\n        "race": "",\n        "aliases" [],\n    }\n\n    goku',
 'gohan',
 'chi-chi']
```

Hold up! Why'd that modify the `goku` string? This is because surrounding something with `"""` doesn't necessarily mean as comments in Python. It is just a multiline string. Imagine it as a string literal, which isn't assigned to any variable. **There's no such thing as multiline comments in Python, unlike other programming languages.** The right way to put multiline comments is by using `#`.

You'd recall using `"""` to put comments at the beginning of function/class, also otherwise known as docstrings. Well, what do you know, those docstrings aren't really comments. It is just a string literal and a standard convention<a href="#note1" id="note1ref"><sup>[1]</sup></a>.

So the right way to put a comment in dict would be

```python
family = {

    # General format of entries is
    # "username": {
    #    "name": "",
    #    "race": "",
    #    "aliases" [],
    # }

    "goku": {
        "name": "Goku",
        "race": "Saiyan",
        "aliases": ["Son Goku", "Kakarot"],
    },
    "chi-chi": {
        "name": "Chi Chi",
        "race": "Human",
        "aliases": ["The Ox-Princess"],
    },
    "gohan": {
        "name": "gohan",
        "race": "Saiyan",
        "aliases": ["Great Saiyaman", "Son Gohan"],
    },
}
```

#### tl;dr

There's no such thing as multiline comment in Python. Use `#` at every line to truly create multiline comments.

<a id="note1" href="#note1ref">[1]</a> <a href="https://www.python.org/dev/peps/pep-0257/" target="_blank">PEP 257 -- Docstring Conventions</a>  

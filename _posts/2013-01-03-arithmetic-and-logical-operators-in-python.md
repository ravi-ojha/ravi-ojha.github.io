---
layout: post
title: "Python: Arithmetic and Logical Operators"
description: "How to perform arithmetic and logical operations on Python variables of different types"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, arithmetic-operators, logical-operators]
related_posts: ['/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx', '/posts/branching-with-if-else-elif-in-python']
redirect_from:
  - /2012/12/operations-on-string-some-simple.html
---

<h2> Table of Contents </h2>

* TOC
{:toc}

## Arithmetic Operators in Python

Addition, Subtraction, Division, Modulus, Power (number raised to some power)

#### Addition

{% highlight python %}
>>> 6 + 3
9
>>> 6.4 + 5
11.4
{% endhighlight %}

Python knows that if you ask to add an `int` to `float`, it makes sense to answer in `float`

#### Subtraction

{% highlight python %}
>>> 5 - 4
1
{% endhighlight %}

#### Multiplication

{% highlight python %}
>>> 6 * 4
24
{% endhighlight %}

#### Division

{% highlight python %}
>>> 18/2
9
>>> 19/2
9
{% endhighlight %}

What? That's wrong!
Nope. Python will always return `int` if both numerator and denominator are of type `int`
If one of them is in `float` then it will return answer in `float`

{% highlight python %}
>>> 19.0/2
9.5
{% endhighlight %}

#### Modulus

{% highlight python %}
>>> 7 % 5
2
>>> 10 % 5
0
{% endhighlight %}

#### Finding integer raised to the power

{% highlight python %}
>>> 6**2
36
>>> 3.14*20
62.800000000000004
{% endhighlight %}

### Complex expression, a mixture of multiple operators

{% highlight python %}
>>> 2 + 3 * 4
14
{% endhighlight %}

Hey! I meant, add 3 to 2 and then multiply it with 4. How do I assign preference of operations? Answer is to surround them by `()`.

{% highlight python %}
>>> (2 + 3) * 4
20
{% endhighlight %}

### Order of precedence

 - `**` has highest, then `*` and  `/` (whichever comes first in your expression), then `+` and `-`. Key to not get confused by operator precedence is to use `()`. This also helps in future when you come back to your code after months and have no clue what you did.

We can also perform operations on `str` types. `+` will join two strings.

{% highlight python %}
>>> "su" + "san"
'susan'
{% endhighlight %}

## Logical Operators in Python

Let's consider two variables `i` and `j` to understand the meaning of various comparison operators.

 - `i > j`
   - returns `True` if `i` is strictly greater than `j`, else returns `False`

 - `i >= j`
   - returns `True` if `i` is greater than or equal to `j`, else returns `False`

 - `i < j`
   - returns `True` if `i` is strictly less than `j`, else returns `False`

 - `i <= j`
   - returns `True` if `i` is less than or equal to `j`, else returns `False`
 - `i == j`
   - returns `True` if `i` is equal to `j`, else returns `False`
 - `i != j`
   - returns `True` if `i` is not equal to `j`, else returns `False`


## More logical operators in Python

Assume `i` and `j` are `bool` variables

 - `i and j`
   - returns `True` if both `i` and `j` are `True`, else returns `False`

 - `i or j`
   - returns `True` if either of `i` or `j` is `True`, else returns `False`
 - `not i`
   - returns `True` if `i` is `False`, returns `False` if `i` is `True`


Next post will discuss yet another widely used data-type in Python: [Strings]({{ site.baseurl }}{% post_url 2013-01-04-python-strings-and-frequently-used-str-methods %})

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

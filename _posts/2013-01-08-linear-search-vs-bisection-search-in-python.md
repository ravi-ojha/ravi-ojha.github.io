---
layout: post
title: "Python: Linear Search v/s Bisection (Binary) Search"
description: "When it comes to searching an element within a list of elements, our first approach is searching sequentially through the list. Let's take a look at a better method, Binary Search"
og_image: "documentation/rookieslab-og.jpg"
tags: [python, linear-search, binary-search, competitive-programming]
redirect_from:
  - /2012/12/linear-search-vs-bisection-search-algorithm-python-code.html
---

<h2> Table of Contents </h2>

* TOC
{:toc}

## What is Linear Search?

In Linear Search, we sequentially iterate over the given list and check if the element we are looking for is equal to the one in the list. Some quick points about Linear Search.

 - A simple and easy to implement searching technique
 - Used when elements in the list are **not** sorted.
 - Inefficient technique compared to Binary Search

Let's take a look at the following code;

{% highlight python %}
# This is how we define a function in Python
# We will see more about functions later
def linear_search(x, search_list):
    """
    Returns the index of the x if found in search_list
    Else returns -1
    """
    iterations = 0
    idx = 0
    while idx < len(search_list):
        iterations += 1
        if x == search_list[idx]:
            print('iterations = ' + str(iterations))
            return idx
        idx += 1
    return -1

print(linear_search(32, [4, 8, 45, 24, 10, 32, 9, 56]))
# Output:
# -------
# iterations = 6
# 5
print(linear_search(21, [4, 8, 45, 24, 10, 32, 9, 56]))
# Output:
# -------
# -1
{% endhighlight %}


Analysis of the above code:

 - We pass the element we are looking for and the list to search in to `linear_search()`
 - In the function `linear_search()`, we loop over the length of the `search_list` and see if the current element equals the element being searched.
 - If that condition evaluated to `True` then we return the value of `idx`
 - Else, in the end, when the loop breaks, we return -1


## What is Bisection/Binary Search?

Binary Search or Bisection Search or Logarithmic Search is a search algorithm that finds the position/index of an element within a **sorted** search list. Quick points about binary search.

 - Can only be used when the list is sorted (we can sort the list if our list is not already sorted)
 - Efficient technique compared to Linear Search

Let's first understand the concept of Binary Search before getting into implementation details.

Let's say that we have to search the index of `32` in `[4, 8, 9, 10, 24, 32, 45, 56]`

 - Look for the middle element in the list. It is `24`.
 - Compare that middle element with `32`. `24` is less than `32`.
 - This means that all the numbers on the left of `24` are less than `24` and there's no point of searching for `32` in that part of the list.
 - So we will look in the right half of `24`.
 - Now, our list looks like this. [~~4, 8, 9, 10, 24,~~ 32, 45, 56].
 - Again, look for the middle element, `45`. `45 > 32`. So no point in looking at elements in the right half of `45`.
 - Now the list has broken down to [~~4, 8, 9, 10, 24,~~ 32, ~~45, 56~~], the only element left is `32`. we have found what we were looking for.

Let's implement that in code.

{% highlight python %}
def binary_search(x, search_list):
    iterations = 1
    left = 0 # Determines the starting index of the list we have to search in
    right = len(search_list)-1 # Determines the last index of the list we have to search in
    mid = (right + left)/2
    while search_list[mid] != x: # If this is not our search element
        # If the current middle element is less than x then move the left next to mid
        # Else we move right next to mid
        if  search_list[mid] < x:
            left = mid + 1
        else:
            right = mid - 1
        mid = (right + left)/2
        iterations += 1
    print 'iterations = ',str(iterations)
    return mid

print(binary_search(32, [4,8,9,10,24,32,45,56]))
# Output:
# -------
# iterations =  2
# 5
{% endhighlight %}

Notice the number of iterations required in binary search compared to linear search. When the list if really large, binary search proves to be way more efficient compared to linear search.

Points to note between Linear Search & Bisection Search:

 - Note that we cut down the list in half each time we compare 32 with any element, while in Linear Search we kept on searching through whole list. Hence Bisection Search is way better than Linear Search.
 - There is technical term to denote efficiency, 'Time Complexity', and represented as *O()*
 - Time Complexity of Linear Search is *O(n)*, where *n* is the number of elements in the list.
 - Time Complexity of Bisection Search is *O(log n)*. We will see more about Time Complexity in future.

We make use of the concept of Binary Search to [find square root of a number in an efficient way]({{ site.baseurl }}{% post_url 2013-01-07-finding-square-root-using-guess-and-check-algorithm-in-python %}).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

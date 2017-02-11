---
layout: post
title: "How to compute Time Complexity or Order of Growth of any program"
description: "Time Complexity gives us an idea of running time of any program w.r.t. the size of input fed to the program. Order of Growth is just another word for Time Complexity."
og_image: "documentation/rookieslab-og.jpg"
tags: [time-complexity, order-of-growth, competitive-programming]
related_posts: ['/posts/what-is-memoization-what-is-dynamic-programming', '/posts/how-to-find-multiplicative-inverse-of-a-number-modulo-m-in-python-cpp', '/posts/basics-of-recursion-in-programming-using-a-simple-example'] 
redirect_from:
  - /2012/12/complexity-or-order-of-growth-in-programming.html
---

<h2> Table of Contents </h2>

* TOC
{:toc}

## What is a Time Complexity/Order of Growth?

Time Complexity/Order of Growth defines the amount of time taken by any program with respect to the size of the input. Time Complexity specifies how the program would behave as the order of size of input is increased. So, Time Complexity is just a function of size of its input. Time Complexity is represented using Big O notation i.e. *O()*.

We will go through some of basic and most common time complexities such as:

 - Constant Time Complexity *O(1)* : constant running time
 - Linear Time Complexity *O(n)* : linear running time
 - Logarithmic Time Complexity *O(log n)* : logarithmic running time
 - Log-Linear Time Complexity *O(n log n)* : log-­linear running time
 - Polynomial Time Complexity *O(n^c)* : polynomial running time (c is a constant)
 - Exponential Time Complexity *O(c^n)* : exponential running time (c is a constant being raised to a power based on size of input)

## What is Constant Time Complexity?

The code that runs in fixed amount of time or has fixed number of steps of execution no matter what is the size of input has constant time complexity. For instance, let's try and derive a Time Complexity for following code:

{% highlight python %}
def my_sum(a, b):
    return a+b
{% endhighlight %}

If we call this function by `my_sum(2, 5)` it will return `7` in 1 step. That single step of computation is summing `a` and `b`. No matter how large is the size of input i.e. `a` and `b` is, it will always return the sum in 1 step.

So, the Time Complexity of the above code is *O(1)* or Constant Time Complexity.

## What is Linear Time Complexity?

The code whose Time Complexity or Order of Growth increases linearly as the size of the input is increased has Linear Time Complexity. For instance, let's see this code which returns the sum of a list.

{% highlight python %}
def my_list_sum(l):
    result = 0
    for i in l:
        result += i
    return result
{% endhighlight %}

Here, we are providing a list to the function. If I pass a list of size 10. The number of steps would be, considering the size of list is 10:

 - 1 step for initializing `result`
 - Loop over the list, and the statement inside loop is executed 10 times.
 - 1 step for return statement

In total 1 + 10 + 1 = 12 steps. Now what if the size of list is 1000000. Then the total steps would be 1 + 1000000 + 1 = 1000002. Do the first and last 1s matter?

For list of size N, Time Complexity would be 1 + N + 1 = (N + 2). We can safely neglect the additional 2 and say that the overall Time Complexity is *O(N)* (because we saw that as N becomes large the steps with constant time have negligible effect on running time of the code).

## What is Logarithmic Time Complexity?

When the size of input is N but the number of steps to execute the code is log(N), such a code is said to be executing in Logarithmic Time. This definition is quite vague from top but if we take an example, it will be quite clear.

Let's say we have a very large number which is a power of 2 i.e. we have 2^x. We want to find x. For eg: 64 = 2^6. So x is 6.

{% highlight python %}
def power_of_2(a):
    x = 0
    while a > 1:
        a = a/2
        x = x+1
    return x
{% endhighlight %}

Now if I call power_of_2(16), the while loop will run 4 times, because we keep dividing `a` by 2. In first iteration, `a` will become 8, in second iteration `a=4`, in third iteration `a=2` and in forth iteration `a=1`. That's when the loop will break.

Now there are 2 instructions inside the loop, so total number of steps would be,

1 - for x = 0
2*4 - for 2 statements inside the loop
1 - for return statement.

In total 2\*4 + 2. If we increase the size of `a` to 1024. It will take 2\*10 + 2 steps. Do you notice a pattern here? No?

What is log(16) = 4 (Considering log of base 2)
What is log(1024) = 10

When we keep dividing the size of input `N` by some value, say `b`. Then the Time Complexity turns out to be log(N) to the base `b`.

So, overall time complexity of the above code is, *2\*log(N) + 2*. For very large values of `N`, the multiplication by 2 and the additional 2 can be neglected. Hence, it is *log(N)* to the base 2.

Another example? Go ahead and analyze the code of Binary Search. Shh shh.. Hint: Consider size of the `search_list` as `N` and note that we keep dividing the list in 2 halves in the loop somewhere.

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
        mid = (right + left)/2 # This is a very important line of code
        iterations += 1
    print 'iterations = ',str(iterations)
    return mid

print(binary_search(32, [4,8,9,10,24,32,45,56]))
# Output:
# -------
# iterations =  2
# 5
{% endhighlight %}

## What is Log-Linear Time Complexity?

When we call a Logarithmic Time Algorithm inside a loop, it would result into a Log-Linear Time Complexity program.

For example: Let's say I have long sorted list of size `N`. And I have `Q` numbers, for each of those `Q` numbers I have to find the index of it in the given list.

{% highlight python %}
for i in Qlist:
    print binary_search(x, search_list) # This statement is executed Q times
{% endhighlight %}

Analyzing above code, we know that the call to Binary Search function takes *O(log N)* time. We are calling it `Q` times. Hence the overall time complexity is *Q x O(log N)*. Simplifying, we have *O(Q logN)*.

Another example for this could be Merge Sort algorith,


## What is Polynomial Time Complexity?

When the computation time increases as function of `N` raised to some power, `N` being the size of input. Such a code has Polynomial Time Complexity.

For example, let's say we have a list of size `N` and we have nested loops on that list.

{% highlight python %}
for i in N:
    for j in N:
        # Some processing
{% endhighlight %}

In the above code, the processing part is executed N\*N times i.e. N^2 times. Such a code has *O(N^2)* time complexity.

## What is Exponential Time Complexity?

When the computation time of a code increases as function of `X^N`, `N` being the size of input. Such a code has Polynomial Time Complexity.

For example, following recursive code to find Nth fibonacci number has Time Complexity as *O(2^N)*

{% highlight python %}
def F(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return F(n-1) + F(n-2) # For every call to F, we make 2 more calls to F itself
{% endhighlight %}

In the above code, for every call to `F()` we make two more calls to `F()` in the else part. So if I call `F(4)`, the tree of calls to `F()` would look like:

{% highlight fuck %}
                  F(4)
             ____/   \_____
          F(3)     +       F(2)
         /   \             /  \
     (F(2) + F(1)) +   (F(1) + F(0))
    /    \
  F(1) + F(0)
{% endhighlight %}

This tree keeps growing exponentially as we increase `N`. Hence the Time Complexity *O(2^N)*.

If you came all the way down here, how about some exercise for you?
Can you guess some examples of *O(sqrt(N))* and *O(log (log N))*?

In all the further posts regarding algorithm and datastructures, we will use the same notation for Time Complexity. If you love Competitive Programming, you'll find following chart very useful.

## Time Complexity v/s Input Size chart for Competitive Programming

| Size of Input     | Maximum acceptable Time Complexity |
| ------------- |:-------------:|
| 10^2          | Exponential |
| 10^2          | Polynomial upto O(n^3) or rarely O(n^4) |
| 10^3          | Polynomial upto O(n^2)      |
| 10^5 or 10^6        | Log-Linear      |
| 10^7          | Linear      |
| 10^9          | Log or Constant      |

*Disclaimer: This chart has been prepared from my experience so far in Competitive Programming. There may be cases when things don't fit perfectly.*

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

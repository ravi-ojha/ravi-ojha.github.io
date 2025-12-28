---
date: 2013-07-07
layout: post
title: "What is Memoization? What is Dynamic Programming? Let's take an example"
description: "Memoization or Dynamic Programming is a technique of remembering solutions to sub-problems which will help us solve a larger problem."
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
related_posts: ['/posts/basics-of-recursion-in-programming-using-a-simple-example', '/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth'] 
redirect_from:
  - /2013/06/dynamic-programming-or-memoization-SUMTRAIN-codechef-editorial-python.html
---

Memoization or Dynamic Programming is a technique of solving a larger problem by breaking it down into simpler subproblems, solve subproblems, remember their results and use them solve the larger problem. In [Basics of Recursion](/posts/basics-of-recursion-in-programming-using-a-simple-example), we learned that, to solve a larger problem we create subproblems out of the larger problem. We keep creating sub-problems until we reach the smallest subproblem, a base case, to which we already know the solution. Then we use that to solve slightly larger sub-problem and so on. In the end, we will have the solution to the larger problem.

Let's take an example to get a better understanding. How about the example of factorial that we saw in [Basics of Recursion](/posts/basics-of-recursion-in-programming-using-a-simple-example).

We know factorial of 4 is `4! = 1 * 2 * 3 * 4  = 24`. Now, if I were to ask you to find `5!`, what would you do? You'd instantly say that *Well, I just calculated up to 4! why not simply multiply 5 to the answer of 4!*. You're damn right! 

Another example, shall we? I cannot help but quote an answer I once read an [Quora](https://www.quora.com/How-should-I-explain-dynamic-programming-to-a-4-year-old/answer/Jonathan-Paulson) that beautifully explained the concept behind dynamic programming.

>\*writes down "1+1+1+1+1+1+1+1 =" on a sheet of paper\*  
"What's that equal to?"  
\*counting\* "Eight!"  
\*writes down another "1+" on the left\*  
"What about that?"  
\*quickly\* "Nine!"  
"How'd you know it was nine so fast?"  
"You just added one more"  
"So you didn't need to recount because you remembered there were eight! Dynamic Programming is just a fancy way to say 'remembering stuff to save time later'"

Now, we have to write code in such a way that it remembers answers to previous answers.
Let's say we have to find factorial of first 10 numbers.

A totally brute force way to do this would be:

```python showLineNumbers
def bad_factorial():
    result = [1]*11
    # This will loop from 1 to 10, we already know 0! = 1
    for i in xrange(1, 11):
        # ifactorial will be used to store the factorial of ith number
        ifactorial = 1
        # This loop will run from 1 to i
        for j in xrange(1, i+1):
            ifactorial = ifactorial * j

        # Store the ifactorial in result[i]
        result[i] = ifactorial

    # Print out the result 
    for i in xrange(11):
        print(str(i) + '! = ' + str(result[i]))
```

```python
bad_factorial()
# Output:
# 0! = 1
# 1! = 1
# 2! = 2
# 3! = 6
# 4! = 24
# 5! = 120
# 6! = 720
# 7! = 5040
# 8! = 40320
# 9! = 362880
# 10! = 3628800
```

Above code has Time Complexity *O(n<sup>2</sup>)*.

We just learned above that if we know 4!, we can find 5! instantly. Because `5! = 4! * 5`. Generalizing this, `x! = (x-1)! * x`. We will use this knowledge to reduce the Time Complexity down to *O(n)*.

```python showLineNumbers
def memoized_factorial():
    result = [1]*11
    # This will loop from 1 to 10, we already know 0! = 1
    for i in xrange(1, 11):

        # Use the previous value of result to find answer to current problem
        result[i] = result[i-1] * i

    # Print out the result 
    for i in xrange(11):
        print(str(i) + '! = ' + str(result[i]))
```

```python
memoized_factorial()
# Output:
# 0! = 1
# 1! = 1
# 2! = 2
# 3! = 6
# 4! = 24
# 5! = 120
# 6! = 720
# 7! = 5040
# 8! = 40320
# 9! = 362880
# 10! = 3628800
```

Usually, problems in competitive programming contests are not as easy as this. Let's take one of the questions where we make use of Memoization.

***Q:** We have a triangle of numbers, starting from top of a triangle we are allowed to move exactly below or right-to-exactly-below (see example). Reaching till the last row of triangle we have to find out which way got you the largest sum.*

For example:

```text
3
2 5
6 4 1
```

In the above triangle, we start with `3` and according to the given conditions we can go either to `2` or `5`, if we go towards `2` we can either go to `6` or `4` and if we went towards `5`, we could either go to `4` or `1`. So, we have 4 paths in total. 

 - Path #1: `3 -> 2 -> 6`   Sum is 3+2+6 = 11
 - Path #2: `3 -> 2 -> 4`   Sum is 3+2+4 =  9
 - Path #3: `3 -> 5 -> 4`   Sum is 3+5+4 = 12
 - Path #4: `3 -> 5 -> 1`   Sum is 3+5+1 =  9

One with the maximum sum is Path #3, we simply have to find this sum i.e. 12

(Few questions around web that are exactly similar and from where I got idea to write down this article are Codechef's [SUMTRAIN](http://www.codechef.com/problems/SUMTRIAN/), Problem [18](http://projecteuler.net/problem=18) on ProjectEuler.net)

Normally, we would go through all possible paths and find the maximum sum, but that would definitely eat up a lot of time. It would result into [Exponential Time Complexity](/posts/how-to-compute-time-complexity-order-of-growth-of-any-program). So here we jump into Memoization or DP. We'll store the last maximum sum we found till now at each step. You might feel *"what the hell is he talking!"*. Let's take the example above.

First of all lets assign it to a 2D array like this.

```text
a[0][0]
a[1][0]   a[1][1]
a[2][0]   a[2][1]   a[2][2]
```

Hence `a[0][0] = 3`, `a[1][0] = 2`, `a[1][1] = 5`, .... and so on.

Starting from `a[0][0]`, we can move to `a[1][0]` or `a[1][1]`. So we can arrive to `a[1][0]` only from `a[0][0]`. Lets store the sum till now, store `3+2 = 5` into `a[1][0]`, similarly we can arrive at position `a[1][1]` from `a[0][0]` only, so store `3+5 = 8` into `a[1][1]`.

Now moving to `a[2][0]`, we can arrive here only from `a[1][0]`, so store `5+6 = 11` into `a[2][0]`. Here comes `a[2][1]`, we can arrive `a[2][1]` from either `a[1][0]` or `a[1][1]`, since we want sum to be maximum we'll choose the one with greater value i.e. `a[1][1] = 8`. Store `8+4 = 12` in `a[2][1]`. Similarly `a[2][2]` can only reached from `a[1][1]`, so store `8+1 = 9` in `a[2][2]`.

Now our array looks like this.

```text
 3
 5  8
11 12  9
```

Maximum of the last row of this array is our answer. Viola its done. We found it without going through all different paths. And believe me its a much better optimization if we take even larger triangles and compare the time taken.

Now we simply have to implement this in code. I'll do it in Python because it is more readable.

```python showLineNumbers
def sum_triangle():
    n = input() 
    a = []
    subA = []
    for i in xrange(n):
        subA = map(int,raw_input().split())
        a.append(subA)
    for i in xrange(1,n):
        for j in xrange(i+1):
            if j == 0:
                a[i][j] = a[i-1][j] + a[i][j]
            elif j == i:
                a[i][j] = a[i-1][j-1] + a[i][j]
            else:
                if a[i-1][j] > a[i-1][j-1]:
                    a[i][j] = a[i-1][j] + a[i][j]
                else:
                    a[i][j] = a[i-1][j-1] + a[i][j]
    print max(a[n-1])
sum_triangle()
```

Let's analyze the above code:

 - Line #2: `n` is number of rows in our triangle.
 - Line #3 & #4: creating an empty lists, read [how lists work in python](/posts/python-lists-and-list-methods)
 - Line #5 to #7: taking input in the form of 2D array.
   - `for i in xrange(3)` means it'll go through 0, 1 and 2.
 - Line #8 to #18 is our logic implementation:
 - Line #10: This condition is for `a[1][0]`, `a[2][0]` .. `a[n][0]` where we can only arrive from just above element.
 - Line #12: This condition is for `a[1][1]`, `a[2][2]` .. `a[n][n]` where we can only arrive from element present at the diagonal edge of the triangle.
 - Line #19: Prints out the max of the last row of our array.

Try it out in your own programming language and verify the results.

Got a burning question you wanna get answered? Ask it in the comments.


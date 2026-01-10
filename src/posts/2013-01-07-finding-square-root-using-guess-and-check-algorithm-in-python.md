---
date: 2013-01-07
layout: post
title: "Python: Finding Square Root using Guess & Check Algorithm"
description: "Guess and Check is one of the most common methods of finding solution to any problem. We will see how it can be used to find a close approximation of square root of any number"
og_image: "documentation/rookieslab-og.jpg"
tags: [python]
related_posts: ['/posts/collection-of-python-blogs-for-beginners-mitx-600x-edx', '/posts/how-to-compute-time-complexity-order-of-growth-of-any-program', '/posts/what-is-memoization-what-is-dynamic-programming']
redirect_from:
  - /2012/12/finding-square-root-guess-and-check-method-in-python.html
  - /2012/12/learning-python-finding-roots-advanced.html
---

## Guess and Check Algorithm

As the term suggests, first, we make a guess, then we check against a known condition (depending on the problem). We repeat this in a loop until we have got the answer.

We have a problem at hand i.e. to find the square root of any number.

Before we jump to the perfect solution let's try to find the solution to a slightly easier problem. How about finding the square root of a perfect square. Numbers like 4, 9, 16, 25 ... are perfect squares.

```python showLineNumbers
x = int(raw_input('Enter a perfect square : '))
guess = 0 # Our guess answer
while guess**2 < x:
    guess += 1 # Shorthand for guess = guess + 1
print('Square root of ' + str(x) + ' is ' + str(guess))
```

Analysis of the above code:

 - We declare `guess` as our answer and initialize it as `0`
 - We continue the loop as long as the square of `guess` is less than `x`
 - As soon as the square of `guess` equals or exceeds `x` we break the loop and print the value of `guess`

Try it out on numbers such as 25 or 144 or any other perfect square.

Let's write a better version that can guess the square root of any number.
There's one python built-in function we are going to use in this and it's better to see how it behaves before we dive into the code.

`abs()` - Returns the absolute value of any number. You all like to see examples, don't you?

```python
>>> abs(10)
10
>>> abs(-10)
10
>>> abs(10.11)
10.11
>>> abs(-10.11)
10.11
>>> abs(0.003)
0.003
>>> abs(-0.003)
0.003
```

Now, we are good to go!

```python showLineNumbers
x = int(raw_input('Enter a number : '))
guess = 0.0 # The guess answer
epsilon = 0.01 # Used for accuracy. See the condition in While Loop
step = epsilon**2 #used to increment our guess 'ans'
total_guesses = 0
# We will understand this condition during code analysis
while (abs(guess**2 - x)) >= epsilon:
    guess += step
    total_guesses += 1

print('Total guesses were ' + str(total_guesses))
if abs(guess**2-x) >= epsilon:
    print('Failed on square root of ' + str(x))
else:
    print(str(guess) + ' is close to the square root of ' + str(x))
```

Analysis of the above code:

 - `epsilon` is a variable that will help us in checking the condition whether we are close to our answer
 - `step` is variable by which we will increment our `guess` inside the loop
 - The condition in the while loop checks if our guess is close to the answer. For instance, if we were to find square root of 16 and if our guess is 4 then `guess**2-x` results into `4**2 - 16` i.e. 0. Here, we are simply trying to get as close as possible to the final answer, so are simply checking if the error margin is not more than the value of `epsilon`


Let's test this code on several numbers.

```text
Enter a number : 2
Total guesses were 14107
1.4107 is close to the square root of 2
---------------------------------------
Enter a number : 4
Total guesses were 19975
1.9975 is close to the square root of 4
---------------------------------------
Enter a number : 7
Total guesses were 26439
2.6439 is close to the square root of 7
---------------------------------------
Enter a number : 144
Total guesses were 119996
11.9996 is close to the square root of 144
```

How about trying some really large numbers.

```text
Enter a number : 1000000
Total guesses were 10000000
999.999999821 is close to the square root of 1000000
----------------------------------------------------
Enter a number : 100000000
... It keeps running for too long ...
```

How do I find square root of very large numbers? As large as 1000000000!
There is always a scope of optimization. It is suggested to read about [Binary Search](/posts/linear-search-vs-bisection-search-in-python) before proceeding further.

## Efficient method to find Square Root of a number using Guess and Check algorithm

```python showLineNumbers
x = int(raw_input('Enter a number : '))
epsilon = 0.01
left = 0
right = x
guess = (right+left)/2.0
while abs(guess**2 - x) > :
    if guess**2 < x:
        left = guess
    else:
        right = guess
    guess = (right+left)/2.0
print guess
```

Try to find square root of 1000000000, it will run way faster than the previous code.
There are cases when this code will fail, cases when x is a fractional number between 0 and 1 or when x is negative.
If you're curious, do post a fix for that in comments.

Up next is one of the most important techniques of programming, [Recursion](/posts/basics-of-recursion-in-programming-using-a-simple-example).

---

Note:
This is a part of what I learned in an online Open Course Ware offered by MIT on edX.
Its for my personal reference & also for those who would like to revisit the course.

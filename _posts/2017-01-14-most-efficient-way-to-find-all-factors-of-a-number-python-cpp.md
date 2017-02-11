---
layout: post
title: "Most efficient way to find factors of a number - C++ and Python Code"
description: "First, we will see how to find all factors of a number using brute force. Then we will improve upon that to find all factors of a number using the most efficient method and code it in C++ as well as Python"
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
related_posts: ['/posts/how-to-compute-time-complexity-order-of-growth-of-any-program', '/posts/fastest-way-to-check-if-a-number-is-prime-or-not'] 
---

A factor of a number `x` is a number `y` if `y` divides `x` without leaving a remainder. That is if `x % y == 0` we say that `y` is a factor of `x`. 

<h2> Table of Contents </h2>

* TOC
{:toc}

## How to find the factors of a number?

Let's find all factors of 24. We know all the factors of `24` are `1, 2, 3, 4, 6, 8, 12, 24`. How can we find them programmatically?


Common factors are 1, 2, 3, and 6. Since 6 is the highest of them, GCD of 24 and 18 is 6.

The breakdown of the process of finding factors of a number `x` is:

 - Iterate from `1` to `x`, call that number `i`
 - Check if `x % i == 0`, we add it to our list of factors

## Brute Force Python Implementation to find factors of a number

{% highlight python linenos %}
def factors(x):
    # We will store all factors in `result`
    result = []
    # This will loop from 1 to x
    for i in xrange(1, x+1):
        # Check if i divides x without leaving a remainder
        if x % i == 0:
            result.append(i)
    # Return the list of factors of x
    return result

print factors(1)
# Output: [1]
print factors(4)
# Output: [1, 2, 4]
print factors(10)
# Output: [1, 2, 5, 10]
print factors(12)
# Output: [1, 2, 3, 4, 6, 12]
print factors(16)
# Output: [1, 2, 4, 8, 16]
{% endhighlight %}

Time Complexity of the above algorithm is *O(N)*, `N` being the number for which we want to find all factors. If we were to find factors of a number as large as billion i.e. of the order of 1000000000, above code will not produce result within reasonable time. Go ahead, try it out!

How can improve upon that? We notice that the factor of any number `x` is always less than `x/2`. So instead of looping up to `x`, we can loop up to `x/2`. This will bring down the time to half but it is still not every efficient. Also, *O(N/2)* boils down to *O(N)*.

## Efficient method to find factors of a number

If we analyze the factors of `24`, they are `1, 2, 3, 4, 6, 8, 12, 24`. We notice that, `1 x 24 = 24`, so when we found that `1` is a factor of `24`, we also know that `24` is yet another factor. Similarly, `2 x 12 = 24`. So when we found that `2` is a factor of `24`, we also know that `12` is also a factor of `24`. This applies for `3 x 8` and `4 x 6` as well. This means that we can find all factors of `24` by looping till `4`. 

Let's take another example, `16`:

{% highlight fuck %}
16 = 1 x 16
16 = 2 x 8
16 = 4 x 4
16 = 8 x 2
16 = 16 x 1
{% endhighlight %}

Again, we can loop till `4` and find all the factors of `16`. In this way, in order to find factors of `x`, we have to loop till `sqrt(x)`.

Process of finding all factors of `x` in efficient way;

 1. Loop from `1` to `sqrt(x)`, call it `i`
 2. If `x % i == 0`, then add `i` to the list of factors
 3. Now if `x % i == 0`, we can say for sure that, `x/i` is also a factor of `x`. So, add `x/i` to the list of factors.
   - For example: in case of `16`, we see that `16 % 2 == 0`, now `16/2` which is `8` is also a factor of `16`.
 4. There is one catch in the above step. What if `i` is same as `x/i`?
   - For example: in case of `16`, when `i = 4`, `16 % 4 == 0`, so we add `i` and `16/i` to list of factors, but `16/i` is also `4`. We will have to handle this case while converting the process into code


## Efficient Python Implementation to find factors of a number

{% highlight python linenos %}
def factors(x):
    # We will store all factors in `result`
    result = []
    i = 1
    # This will loop from 1 to int(sqrt(x))
    while i*i <= x:
        # Check if i divides x without leaving a remainder
        if x % i == 0:
            result.append(i)
            # Handle the case explained in the 4th
            if x/i != i:
                result.append(x/i)
        i += 1
    # Return the list of factors of x
    return result

print factors(1)
# Output: [1]
print factors(4)
# Output: [1, 4, 2]
print factors(10)
# Output: [1, 10, 2, 5]
print factors(12)
# Output: [1, 12, 2, 6, 3, 4]
print factors(16)
# Output: [1, 16, 2, 8, 4]
{% endhighlight %}


## Efficient C++ Implementation to find factors of a number

{% highlight cpp linenos %}
#include <iostream>
#include <vector>
// Switch DEBUG to false if you don't want to print the factors
#define DEBUG true

using namespace std;

vector <int> factors(int x) {
    // We will store all factors in `result`
    vector <int> result;
    int i = 1;
    // This will loop from 1 to int(sqrt(x))
    while(i*i <= x) {
        // Check if i divides x without leaving a remainder
        if(x % i == 0) {
            result.push_back(i);
            // Handle the case explained in the 4th
            if(x/i != i) {
                result.push_back(x/i);
            }
        }
        i++;
    }
    // Print in case of debug mode
    if(DEBUG) {
        for(int i=0; i<result.size(); i++) {
            cout << result[i] << ' ';
        }
        cout << endl;
    }
    // Return the list of factors of x
    return result;
}

int main() {
    factors(1);
    // Output: 1
    factors(4);
    // Output: 1 4 2 
    factors(10);
    // Output: 1 10 2 5 
    factors(12); 
    // Output: 1 12 2 6 3 4 
    factors(16);
    // Output: 1 16 2 8 4 
    return 0;
}
{% endhighlight %}

Time Complexity of the above algorithm to find factors is *O(sqrt(N))*. Go ahead, try to find factors of a number as large as 1000000000, this implementation will return the result in flash.

Got a burning question you might wanna get answered? Ask it in the comments.

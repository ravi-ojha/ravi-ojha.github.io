---
layout: post
title: "Fast Power Algorithm - Exponentiation by Squaring - C++ and Python Implementation"
description: "We know how to find 2 raised to the power 10. But what if we have to find 2 raised to the power very large number such as 1000000000? We discuss how to find solution to such a problem using an fast, efficient algorithm"
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
redirect_from:
  - /2013/05/fast-power-algorithm-cc-and-python-code.html
---

Programming helps us in solving repetitive tasks by using loop constructs. However, sometimes, our loops may run forever! Let's discuss one such example.

<h2> Table of Contents </h2>

* TOC
{:toc}

## How to find A raised to the power B?

We multiply `a` to itself, `b` times. That is, `a^b = a * a * a * ... * a` (`b` occurrences of `a`).
A simple python implementation of that would be:

{% highlight python %}
def iterative_power(a, b):
    """
    Returns the result of a^b i.e. a**b
    We assume that a >= 1 and b >= 0
    """
    result = 1
    while b >= 0:
        result = result * a
        b -= 1
    return result

print iterative_power(2, 1)
# Output: 2
print iterative_power(2, 2)
# Output: 4
print iterative_power(2, 4)
# Output: 16
print iterative_power(3, 4)
# Output: 81
print iterative_power(2, 100)
# Output: 1267650600228229401496703205376
{% endhighlight %}

Notice that the answer to `2^100` is way too large to fit in `int` data-type of other languages. To be fair, let's modify our code to print the result modulo `1000000007`. You'd ask why `1000000007`? There's a long story behind that, read it [here](https://codeaccepted.wordpress.com/2014/02/15/output-the-answer-modulo-109-7/). TLDR, we want to contain the result within the range of 32 bit `int`.

## Brute force Python implementation

{% highlight python %}
MOD = 1000000007
def iterative_power(a, b):
    """
    Returns the result of a^b i.e. a**b
    We assume that a >= 1 and b >= 0
    """
    result = 1
    while b > 0:
        result = (result * a) % MOD
        b -= 1
    return result % MOD
print iterative_power(2, 1)
# Output: 2
print iterative_power(2, 2)
# Output: 4
print iterative_power(2, 4)
# Output: 16
print iterative_power(3, 4)
# Output: 81
print iterative_power(2, 100)
# Output: 976371285
{% endhighlight %}

By the way, in Python we could have simply used `**` operator to find `a^b` like `a**b`. However, I just wanted to implement the code so that we can easily port the code in other languages.

Now, try and call that function for `a = 2` and `b = 1000000000` i.e. `iterative_power(2, 1000000000)`. The code will keep running forever. If we analyze the code, Time Complexity is *O(power)* or in general terms *O(N)* where `N` is `power` or `b`.

So how do we find the base raised to the power for large numbers, as large as a billion! There's an algorithm for that, it's called Exponentiation by Squaring, fast power algorithm. Also known as Binary Exponentiation.

## Exponentiation by Squaring or Binary Exponentiation

Exponentiation by Squaring helps us in finding the powers of large positive integers. Idea is to the divide the power in half at each step.

Let's take an example:

{% highlight fuck %}
3 ^ 10 = 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3
// Try to divide the power by 2
3 ^ 10 = (3 * 3) * (3 * 3) * (3 * 3) * (3 * 3) * (3 * 3)
3 ^ 10 = ((3 * 3) ^ 5)
3 ^ 10 = 9 ^ 5
{% endhighlight %}

Effectively, power is divided by 2 and base is multiplied to itself. So we can write `3 ^ 10 = 9 ^ 5`.

Now, our problem is to find `9 ^ 5`

{% highlight fuck %}
9 ^ 5 = 9 * 9 * 9 * 9 * 9
// Try to divide the power by 2
// Since the power is an odd number here, we cannot do so.
// However there's another way to represent 9 ^ 5
9 ^ 5 = (9 ^ 4) * 9
// Now we can find 9 ^ 4 and later multiple the extra 9 to the result
9 ^ 5 = (81 ^ 2) * 9
{% endhighlight %}

Effectively, when power is not divisible by 2, we make power even by taking out the extra 9. Then we already know the solution when power is divisible by 2. Divide the power by 2 and multiply the base to itself.

Now our problem is to find `(81 ^ 2) * 9`

{% highlight fuck %}
(81 ^ 2) * 9 = (81 * 81) * 9
// Try to divide the power by 2
(81 ^ 2) * 9 = (6561 ^ 1) * 9
{% endhighlight %}

Finally, we have our solution `3 ^ 10 = (6561 ^ 1) * 9 = 6561 * 9 = 59049`

Let's try and implement this algorithm in Python.

{% highlight python %}
def fast_power(base, power):
    """
    Returns the result of a^b i.e. a**b
    We assume that a >= 1 and b >= 0

    Remember two things!
     - Divide power by 2 and multiply base to itself (if the power is even)
     - Decrement power by 1 to make it even and then follow the first step
    """

    result = 1
    while power > 0:
        # If power is even
        if power % 2 == 0:
            # Divide the power by 2
            power = power / 2
            # Multiply base to itself
            base = base * base
        else:
            # Decrement the power by 1 and make it even
            power = power - 1
            # Take care of the extra value that we took out
            # We will store it directly in result
            result = result * base

            # Now power is even, so we can follow our previous procedure
            power = power / 2
            base = base * base

    return result


print fast_power(2, 1)
# Output: 2
print fast_power(2, 2)
# Output: 4
print fast_power(2, 4)
# Output: 16
print fast_power(3, 4)
# Output: 81
print fast_power(2, 100)
# Output: 1267650600228229401496703205376
{% endhighlight %}

Our above code is a bit repetitive and can be simplified. We also have to make changes to keep the final result less than `1000000007`.
We will common out the code that is present in both `if` and `else`. Also, the two statements `power = power - 1` and `power = power / 2` can be simply merged into one like `power = power / 2`, because we are performing integers division.

## Efficient Python implementation to find base raised to the power

{% highlight python %}
MOD = 1000000007
def fast_power(base, power):
    """
    Returns the result of a^b i.e. a**b
    We assume that a >= 1 and b >= 0

    Remember two things!
     - Divide power by 2 and multiply base to itself (if the power is even)
     - Decrement power by 1 to make it even and then follow the first step
    """

    result = 1
    while power > 0:
        # If power is odd
        if power % 2 == 1:
            result = (result * base) % MOD

        # Divide the power by 2
        power = power / 2
        # Multiply base to itself
        base = (base * base) % MOD

    return result

print fast_power(2, 1)
# Output: 2
print fast_power(2, 2)
# Output: 4
print fast_power(2, 4)
# Output: 16
print fast_power(3, 4)
# Output: 81
print fast_power(2, 100)
# Output: 976371285
{% endhighlight %}

See how we can use Fast Power Algorithm to [find Modular Multiplicative Inverse of a number]({{ site.baseurl }}{% post_url 2017-01-28-how-to-find-multiplicative-inverse-of-a-number-modulo-m-in-python-cpp %}).

## Efficient C++ implementation to find exponent raised to a power

A lot of competitive programmers prefer C++ during the contest. So a C++ implementation would always be there for any of my post targeting competitive programmer.

{% highlight cpp %}
#include <iostream>
#define MOD 1000000007
using namespace std;
long long fast_power(long long base, long long power) {
    long long result = 1;
    while(power > 0) {

        if(power % 2 == 1) { // Can also use (power & 1) to make code even faster
            result = (result*base) % MOD;
        }
        base = (base * base) % MOD;
        power = power / 2; // Can also use power >>= 1; to make code even faster
    }
    return result;
}

int main() {
    cout << fast_power(2, 1) << endl; // Output: 2
    cout << fast_power(2, 2) << endl; // Output: 4
    cout << fast_power(2, 4) << endl; // Output: 16
    cout << fast_power(3, 4) << endl; // Output: 81
    cout << fast_power(2, 100) << endl; // Output: 976371285
    return 0;
}
{% endhighlight %}

Time Complexity of the above implementation is *O(log power)* or we can *O(log N)* (where `N` is `power`). But how? Notice that we keep dividing the value of power in half in each iteration. Please refer the article that discusses [Time Complexity or Order of Growth of various types]({{ site.baseurl }}{% post_url 2013-01-11-how-to-compute-time-complexity-order-of-growth-of-any-program %}).

Got a burning question you might wanna get answered?  Ask it in the comments.

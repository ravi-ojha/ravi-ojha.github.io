---
layout: post
title: "Extended Euclid Algorithm to find GCD and Bézout's coefficients"
description: "We will see how to use Extended Euclid's Algorithm to find GCD of two numbers. It also gives us Bézout's coefficients (x, y) such that ax + by = gcd(a, b). We will discuss and implement all of the above problems in Python and C++"
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
related_posts: ['/posts/how-to-find-multiplicative-inverse-of-a-number-modulo-m-in-python-cpp', '/posts/cpp-python-code-to-find-gcd-of-a-list-of-numbers'] 
---


<h2> Table of Contents </h2>

* TOC
{:toc}

## What is Euclid's Algorithm?

Euclid's Algorithm is an efficient method to find GCD of two numbers. In one of the previous posts, we discussed [how to find GCD of two numbers using Euclid's Algorithm](http://rookieslab.com/posts/cpp-python-code-to-find-gcd-of-a-list-of-numbers#how-to-find-gcd-of-two-numbers).

A simple C++ code to find GCD using Euclid's Algorithm is as follows:

{% highlight cpp %}
int gcd(int a,int b) {
    int temp;
    while(b > 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
{% endhighlight %}

## What is Extended Euclid's Algorithm?

As the name suggests, Extended Euclid's Algorithm is an extension of [Euclid's Algorithm](http://rookieslab.com/posts/cpp-python-code-to-find-gcd-of-a-list-of-numbers#how-to-find-gcd-of-two-numbers) to find GCD of two numbers. Along with GCD of two numbers, say `a` and `b`, it also finds `x` and `y` such that `ax + by = gcd(a, b)`. Here, `x` and `y` are known as Bézout's coefficients.

But why should we learn Extended Euclid's Algorithm if we can find GCD of two numbers using simple Euclid's Algorithm? Extended Euclid's Algorithm<sup>[1](#extended-euclid-wiki)</sup> is particularly useful when we have to find [Modular Multiplicative Inverse of a number A in the range M](http://rookieslab.com/posts/how-to-find-multiplicative-inverse-of-a-number-modulo-m-in-python-cpp), where A and M are co-prime numbers and M is not necessarily a prime number. If M is a prime number then there's a very easy method to find [Multiplicative Inverse using Fast Power Algorithm](http://rookieslab.com/posts/how-to-find-multiplicative-inverse-of-a-number-modulo-m-in-python-cpp#modular-multiplicative-inverse-using-fast-power-algorithm).

## Python Code to find GCD using Extended Euclid's Algorithm

{% highlight python %}
def extended_euclid_gcd(a, b):
    """
    Returns a list `result` of size 3 where:
    Referring to the equation ax + by = gcd(a, b)
        result[0] is gcd(a, b)
        result[1] is x
        result[2] is y 
    """
    s = 0; old_s = 1
    t = 1; old_t = 0
    r = b; old_r = a

    while r != 0:
        quotient = old_r/r
        # This is a pythonic way to swap numbers
        # See the same part in C++ implementation below to know more
        old_r, r = r, old_r - quotient*r
        old_s, s = s, old_s - quotient*s
        old_t, t = t, old_t - quotient*t
    return [old_r, old_s, old_t]

res = extended_euclid_gcd(24, 18)
print 'GCD of 24 and 18 is %d. x = %d and y = %d in 24x + 18y = gcd(24, 18)' % (res[0], res[1], res[2])
# Output: GCD of 24 and 18 is 6. x = 1 and y = -1 in 24x + 18y = gcd(24, 18)
res = extended_euclid_gcd(54, 36)
print 'GCD of 54 and 36 is %d. x = %d and y = %d in 54x + 36y = gcd(54, 36)' % (res[0], res[1], res[2])
# Output: GCD of 54 and 36 is 18. x = 1 and y = -1 in 54x + 36y = gcd(54, 36)
res = extended_euclid_gcd(120, 428860)
print 'GCD of 120 and 428860 is %d. x = %d and y = %d in 120x + 428860y = gcd(120, 428860)' % (res[0], res[1], res[2])
# Output: GCD of 120 and 428860 is 20. x = 3574 and y = -1 in 120x + 428860y = gcd(120, 428860)
res = extended_euclid_gcd(95642, 1681)
print 'GCD of 95642 and 1681 is %d. x = %d and y = %d in 95642x + 1681y = gcd(95642, 1681)' % (res[0], res[1], res[2])
# Output: GCD of 95642 and 1681 is 1. x = 682 and y = -38803 in 95642x + 1681y = gcd(95642, 1681)
{% endhighlight %}

## C++ Code to find GCD using Extended Euclid's Algorithm

{% highlight cpp %}
#include <iostream>
#include <vector>
using namespace std;

vector<long long> extended_euclid_gcd(long long a, long long b) {
    // Returns a vector `result` of size 3 where:
    // Referring to the equation ax + by = gcd(a, b)
    //     result[0] is gcd(a, b)
    //     result[1] is x
    //     result[2] is y 
    
    long long s = 0; long long old_s = 1;
    long long t = 1; long long old_t = 0;
    long long r = b; long long old_r = a;

    while(r != 0) {
        long long quotient = old_r/r;
        // We are overriding the value of r, before that we store it"s current
        // value in temp variable, later we assign it to old_r
        long long temp = r;
        r = old_r - quotient*r;
        old_r = temp;

        // We treat s and t in the same manner we treated r
        temp = s;
        s = old_s - quotient*s;
        old_s = temp;

        temp = t;
        t = old_t - quotient*t;
        old_t = temp;
    }
    vector<long long> result;
    result.push_back(old_r);
    result.push_back(old_s);
    result.push_back(old_t);
    return result;
}

int main() {
    vector<long long> res;
    res = extended_euclid_gcd(24, 18);
    cout << "GCD of 24 and 18 is " << res[0] << ". x = " << res[1] << " and y = " << res[2] << " in 24x + 18y = gcd(24, 18)" << endl;
    // Output: GCD of 24 and 18 is 6. x = 1 and y = -1 in 24x + 18y = gcd(24, 18)
    res = extended_euclid_gcd(54, 36);
    cout << "GCD of 54 and 36 is " << res[0] << ". x = " << res[1] << " and y = " << res[2] << " in 54x + 36y = gcd(54, 36)" << endl;
    // Output: GCD of 54 and 36 is 18. x = 1 and y = -1 in 54x + 36y = gcd(54, 36)
    res = extended_euclid_gcd(120, 428860);
    cout << "GCD of 120 and 428860 is " << res[0] << ". x = " << res[1] << " and y = " << res[2] << " in 120x + 428860y = gcd(120, 428860)" << endl;
    // Output: GCD of 120 and 428860 is 20. x = 3574 and y = -1 in 120x + 428860y = gcd(120, 428860)
    res = extended_euclid_gcd(95642, 1681);
    cout << "GCD of 95642 and 1681 is " << res[0] << ". x = " << res[1] << " and y = " << res[2] << " in 95642x + 1681y = gcd(95642, 1681)" << endl;
    // Output: GCD of 95642 and 1681 is 1. x = 682 and y = -38803 in 95642x + 1681y = gcd(95642, 1681)
    return 0;
}
{% endhighlight %}

Simulation of one of the sample test cases 95642 and 1681:

| quotient | remainder | s | t |
| ------------- | ------------- | ------------- | ------------- |
| 95642/1681 = 56 | 95642 - 56*1681 = 1506 | 1 - 56*0 = 1 | 0 - 56*1 = -56 |
| 1681/1506 = 1 | 1681 - 1*1506 = 175 | 0 - 1*1 = -1 | 1 - 1*-56 = 57 |
| 1506/175 = 8 | 1506 - 8*175 = 106 | 1 - 8*-1 = 9 | -56 - 8*57 = -512 |
| 175/106 = 1 | 175 - 1*106 = 69 | -1 - 1*9 = -10 | 57 - 1*-512 = 569 |
| 106/69 = 1 | 106 - 1*69 = 37 | 9 - 1*-10 = 19 | -512 - 1*569 = -1081 |
| 69/37 = 1 | 69 - 1*37 = 32 | -10 - 1*19 = -29 | 569 - 1*-1081 = 1650 |
| 37/32 = 1 | 37 - 1*32 = 5 | 19 - 1*-29 = 48 | -1081 - 1*1650 = -2731 |
| 32/5 = 6 | 32 - 6*5 = 2 | -29 - 6*48 = -317 | 1650 - 6*-2731 = 18036 |
| 5/2 = 2 | 5 - 2*2 = 1 | 48 - 2*-317 = 682 | -2731 - 2*18036 = -38803 |
| 2/1 = 2 | 2 - 2*1 = 0 | -317 - 2*682 = -1681 | 18036 - 2*-38803 = 95642 |

References:

 - <a name="extended-euclid-wiki">[1]</a>: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm


Got a burning question you wanna get answered? Ask it in the comments.

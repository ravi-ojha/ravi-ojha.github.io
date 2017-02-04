---
layout: post
title: "How to find Multiplicative Inverse of a number modulo M?"
description: "What is Multiplicative Inverse? What is Modular Multiplicative Inverse? How to find Modular Multiplicative Inverse? How to find Multiplicative Inverse of a number modulo M i.e. under M? How to find Modular Multiplicative Inverse in an efficient way? We will discuss and implement all of the above problems in Python and C++"
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
---


<h2> Table of Contents </h2>

* TOC
{:toc}

## What is Multiplicative Inverse?

Multiplicative Inverse of a number A is another number B, such that A x B equals 1. Multiplicative Inverse of a number A is denoted as A<sup>-1</sup>, and A x A<sup>-1</sup> = 1. For example: multiplicative inverse of 3 is 1/3 because 3 x 1/3 = 1. 

## What is Modular Multiplicative Inverse?

In modular arithmetic, we don't have the `/` division operator. However, we have `%` modulo operator which helps in finding Modular Multiplicative Inverse. 

Modular Multiplicative Inverse of a number A in the range M is defined as a number B such that (A x B) % M = 1. 

Important points to note:

 - Modulo inverse exists only for numbers that are co-prime to M.
 - If (A x B) % M = 1, then B lies in the range [0, M-1]

## How to find Multiplicative Inverse of a number modulo M i.e. under M?

We know for a fact that, if multiplicative inverse for a number exists then it lies in the range [0, M-1]. So the basic approach to find multiplicative inverse of A under M is:

 - Iterate from `0` to `M-1`, call it `i`
 - Check if `(A x i) % M` equals `1`
 - If yes, then we have `i` as multiplicative inverse of `A` under `M` 

## Brute Force Python Code to find Multiplicative Inverse of a number modulo M - *O(M)*

{% highlight python linenos %}
def modulo_multiplicative_inverse(A, M):
    """
    Returns multiplicative modulo inverse of A under M, if exists
    Returns -1 if doesn't exist
    """
    # This will iterate from 0 to M-1
    for i in xrange(0, M):
        # If we have our multiplicative inverse then return it
        if (A*i) % M == 1:
            return i
    # If we didn't find the multiplicative inverse in the loop above
    # then it doesn't exist for A under M
    return -1

print modulo_multiplicative_inverse(5, 11)
# Output: 9 (Because 5*9 % 11 => 45 % 11 = 1)
print modulo_multiplicative_inverse(3, 8)
# Output: 3 (Because 3*3 % 8 => 9 % 8 = 1)
print modulo_multiplicative_inverse(5, 25)
# Output: -1 (Because 5 and 25 are not co-primes, so it doesn't exist)
{% endhighlight %}

The above implementation is a brute force approach to find Modular Multiplicative Inverse. Time Complexity is *O(M)*, where M is the range under which we are looking for the multiplicative inverse. However, this method fails to produce results when M is as large as a billion, say 1000000000. Try out using A = 23 and M = 1000000007. Can we do any better?

## Modular Multiplicative Inverse using Extended Euclid's Algorithm

We will not get deeper into Extended Euclid's Algorithm right now, however, let's accept the fact that it finds `x` and `y` such that `a*x + b*y = gcd(a, b)`. Let's see how we can use it to find Multiplicative Inverse of a number A modulo M, assuming that A and M are co-prime. 

 - Using A in place of `a` and M in place of `b` in the equation, we have `A*x + M*y = gcd(A, M)`. 
 - We know Greatest Common Divisor (GCD) of two co-prime numbers is 1. So now we have, `A*x + M*y = 1`
 - Taking modulo with M on both sides we have, `(A*x) % M + (M*y) % M = 1 % M`, which results into `(A*x) % M = 1 % M` (because `(M*y) % M` is 0)
 - Voila, what do we call `x` if `(A*x) % M = 1 % M`? `x` is our answer, i.e. multiplicative inverse of A under M.

Now, for any two numbers `a` and `b` Extended Euclid's Algorithm finds three things: `gcd(a, b)`, `x` and `y` such that `a*x + b*y = gcd(a, b)`.
Please consider reading about Extended Euclid's Algorithm<sup>[1](#extended-euclid-wiki)</sup>.

### Python Implementation - *O(log M)*

{% highlight python linenos %}
def modulo_multiplicative_inverse(A, M):
    """
    Assumes that A and M are co-prime
    Returns multiplicative modulo inverse of A under M
    """
    # Find gcd using Extended Euclid's Algorithm
    gcd, x, y = extended_euclid_gcd(A, M)

    # In case x is negative, we handle it by adding extra M
    # Because we know that multiplicative inverse of A in range M lies
    # in the range [0, M-1]
    if x < 0:
        x += M
    
    return x

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


print modulo_multiplicative_inverse(5, 11)
# Output: 9 (Because 5*9 % 11 => 45 % 11 = 1)
print modulo_multiplicative_inverse(3, 8)
# Output: 3 (Because 3*3 % 8 => 9 % 8 = 1)
print modulo_multiplicative_inverse(23, 1000000007)
# Output: 739130440 (Because 739130440*23 = 17000000120 and 17000000120 % 1000000007 is 1)
{% endhighlight %}

Time Complexity of the above approach is *O(log(A) + log(M))*. 

### C++ Implementation - *O(log M)*

{% highlight cpp linenos %}
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
        // We are overriding the value of r, before that we store it's current
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

long long modulo_multiplicative_inverse(long long A, long long M) {
    // Assumes that A and M are co-prime
    // Returns multiplicative modulo inverse of A under M
    
    // Find gcd using Extended Euclid's Algorithm
    vector<long long> v = extended_euclid_gcd(A, M);
    long long gcd = v[0];
    long long x = v[1];
    long long y = v[2]; // We don't really need this though

    // In case x is negative, we handle it by adding extra M
    // Because we know that multiplicative inverse of A in range M lies
    // in the range [0, M-1]
    if(x < 0) {
        x += M;
    }
    
    return x;
}

int main() {
    cout <<  modulo_multiplicative_inverse(5, 11) << endl;
    // Output: 9 (Because 5*9 % 11 => 45 % 11 = 1)
    cout <<  modulo_multiplicative_inverse(3, 8) << endl;
    // Output: 3 (Because 3*3 % 8 => 9 % 8 = 1)
    cout <<  modulo_multiplicative_inverse(23, 1000000007) << endl;
    // Output: 739130440 (Because 739130440*23 = 17000000120 and 17000000120 % 1000000007 is 1)
    return 0;
}
{% endhighlight %}

At times, Extended Euclid's algorithm is hard to understand. There is one easy way to find multiplicative inverse of a number A under M. We can use [fast power algorithm]({{ site.baseurl }}{% post_url 2013-05-18-fast-power-algorithm-exponentiation-by-squaring-cpp-python-implementation %}) for that.

## Modular Multiplicative Inverse using Fast Power Algorithm

Pierre de Fermat<sup>[2](#fermat-wiki)</sup> once stated that, if M is prime then, A<sup>-1</sup> = A<sup>M-2</sup> % M. Now from [Fast Power Algorithm]({{ site.baseurl }}{% post_url 2013-05-18-fast-power-algorithm-exponentiation-by-squaring-cpp-python-implementation %}), we can find A<sup>M-2</sup> % M in *O(log M)* time. 

### Python Implementation - *O(log M)*

{% highlight python linenos %}
def modulo_multiplicative_inverse(A, M):
    """
    Assumes that M is a prime number
    Returns multiplicative modulo inverse of A under M
    """
    return fast_power(A, M-2, M)
    
def fast_power(base, power, MOD):
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


print modulo_multiplicative_inverse(5, 11)
# Output: 9 (Because 5*9 % 11 => 45 % 11 = 1)
print modulo_multiplicative_inverse(3, 8)
# Output: 3 (Because 3*3 % 8 => 9 % 8 = 1)
print modulo_multiplicative_inverse(23, 1000000007)
# Output: 739130440 (Because 739130440*23 = 17000000120 and 17000000120 % 1000000007 is 1)
{% endhighlight %}

### C++ Implementation - *O(sqrt(N))*

{% highlight cpp linenos %}
#include <iostream>
using namespace std;

long long fast_power(long long base, long long power, long long MOD) {
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

long long modulo_multiplicative_inverse(long long A, long long M) {
    // Assumes that M is a prime number
    // Returns multiplicative modulo inverse of A under M
    return fast_power(A, M-2, M);
}

int main() {
    cout <<  modulo_multiplicative_inverse(5, 11) << endl;
    // Output: 9 (Because 5*9 % 11 => 45 % 11 = 1)
    cout <<  modulo_multiplicative_inverse(3, 8) << endl;
    // Output: 3 (Because 3*3 % 8 => 9 % 8 = 1)
    cout <<  modulo_multiplicative_inverse(23, 1000000007) << endl;
    // Output: 739130440 (Because 739130440*23 = 17000000120 and 17000000120 % 1000000007 is 1)
    return 0;
}
{% endhighlight %}

Note that this method works when M is a prime number. Time Complexity of the above algorithm is also *O(log M)*. 

References:

 - <a name="extended-euclid-wiki">[1]</a>: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
 - <a name="fermat-wiki">[2]</a>: https://en.wikipedia.org/wiki/Fermat%27s_little_theorem


Got a burning question you wanna get answered? Ask it in the comments.

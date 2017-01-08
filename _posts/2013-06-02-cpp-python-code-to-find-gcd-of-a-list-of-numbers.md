---
layout: post
title: "Greatest Common Divisor of a list of numbers - C++ and Python Implementation"
description: "First, we will see how to find GCD of two numbers. It is also known as Highest Common Factor - HCF. Then we will move on to find the GCD of a list of numbers and code it in both C++ as well as Python"
og_image: "documentation/rookieslab-og.jpg"
tags: [competitive-programming]
---

Greatest Common Divisor or Highest Common Factor of two numbers, say `a` and `b` is the largest positive integer that divides both `a` and `b`. What better way than to take an example to understand what the definition means.

## How to find GCD of two numbers?

Let's find GCD of 24 and 18. As we know it, GCD is HCF i.e. Highest Common Factors. So, let's find factors of 24 and 18.

{% highlight fuck %}
24 = 1, 2, 3, 4, 6, 8, 12, 24
18 = 1, 2, 3, 6, 9, 18
{% endhighlight %}

Common factors are 1, 2, 3, and 6. Since 6 is the highest of them, GCD of 24 and 18 is 6.

If we were to implement the above process in code, we would:

 - Find factors of first number
 - Find factors of second number
 - Then find the common factors
 - And, finally the maximum of the common factors

The process of finding factors is not very time efficient. Time Complexity would be *O(N)*, which can be further improved till *O(sqrt N)*. Still, it is a costly operation. Father of Geometry, Euclid, came up with an out of box algorithm to find GCD of two numbers in a very cost effective way. When we say cost, we are referring to time here.

Formally, Euclid described the algorithm for gcd of two numbers `a` and `b` as:

 - `gcd(a, b) = a`, if `b = 0`
 - `gcd(a, b) = gcd(b, a)`, if `b > a`
 - `gcd(a, b) = gcd(b, a % b)`, if `b <= a`

Python implementation of the above algorithm:

{% highlight python %}
def gcd(a, b):
    if b == 0:
        return a
    if b > a:
        return gcd(b, a)
    # This means b <= a
    return gcd(b, a % b)

print gcd(24, 18)
# Output: 6
print gcd(54, 36)
# Output: 18
print gcd(120, 428860)
# Output: 20
print gcd(324, 8460592)
# Output: 4
{% endhighlight %}

The above code can be simplified because, when `b > a`, `a % b` is equal to `a`. So if we remove that `if` condition, the code will logically remain same, because the last return statement would effectively become `gcd(b, a)` when `b > a`.

{% highlight python %}
def gcd(a, b):
    if b == 0:
        return a
    # This means b <= a
    return gcd(b, a % b)
{% endhighlight %}

However, sometimes, in Competitive Programming recursive implementations turn out to be slower compared to iterative implementation because the size of input is really large, in the order of billions.

Let's go ahead and implement an iterative version of the above code.

{% highlight python %}
def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a
{% endhighlight %}

Analysis of this short Python code:

 - We loop as long as b is greater than zero
 - The line `a, b = b, a % b` actually stores the value of `b` in `a` and the value of `a % b` in `b`
 - Return the value of `a`

Python also comes with built-in function to find GCD. You can import it as `from fractions import gcd`.
It is worth implementing a C++ version of the above implementation since C++ is way faster than Python.

{% highlight cpp %}
#include <iostream>
using namespace std;

int gcd(int a,int b) {
    int temp;
    while(b > 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    cout << gcd(24, 18) << endl; // Output: 6
    cout << gcd(54, 36) << endl; // Output: 18
    cout << gcd(120, 428860) << endl; // Output: 20
    cout << gcd(324, 8460592) << endl; // Output: 4
    return 0;
}
{% endhighlight %}

It is quite tricky to fall for the trap that the Time Complexity is *O(a%b)*. It is not so. There's a great discussion on [stackoverflow](http://stackoverflow.com/a/3981010) regarding the time complexity of Euclid's algorithm to find GCD of two numbers. It turns out that the upper bound is *O(log(a\*b))*

## How to find GCD of a list of numbers?

We iterate over the list and make a call to the `gcd()` function `N` times (assuming the size of list is `N`). In the end, our list will have only 1 integer in it.

Let's take an example: Say we have to find GCD of `[4, 6, 14, 10]`

 - `gcd(4, 6) = 2`, now we have `[2, 14, 10]`
 - `gcd(2, 14) = 2`, now we have `[2, 10]`
 - `gcd(2, 10) = 2`, now we have `[2]`, hence our answer is `2`.


Python implementation for GCD of a list of numbers:

{% highlight python %}
def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a

a = [4, 10, 16, 14]

result = a[0]
for i in a[1:]:
    result = gcd(result, i)

print(result)
{% endhighlight %}

C++ code for GCD of a list of numbers:

{% highlight cpp %}
#include <iostream>
using namespace std;

int gcd(int a,int b) {
    int temp;
    while(b > 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int a[] = {4, 10, 16, 14};
    int N = 4; // Size of array a
    int result = a[0];
    for(int i=1; i<N; i++) {
        result = gcd(result, a[i]);
    }
    cout << result << endl;
    return 0;
}
{% endhighlight %}

Got a burning question you might wanna get answered? Ask it in the comments.

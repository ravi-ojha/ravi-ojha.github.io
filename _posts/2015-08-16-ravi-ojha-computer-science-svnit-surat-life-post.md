---
layout: post
title: "Open Diary Post: How I lead 4 years of Computer Engineering"
description: "Life is like a real-time strategy game. Its great to know beforehand how others played it when they were at your situation. In this short post, I'm summing up scenarios I faced, decisions I made and their outcomes during four years of Computer Engineering."
og_image: "documentation/rookieslab-og.jpg"
tags: [personal]
related_posts: ['/posts/what-it-takes-to-develop-test-and-release-a-software-product', '/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth', '/posts/playing-with-at-photoshop-and-gimp']
subscription-form: true
redirect_from:
  - /2015/08/four-years-of-computer-engineering-summed-up.html
---


## First year:

Freshman, Computer Engineering, NIT Surat. I had only coded tiny C programs that prints a triangle pattern, or swap two numbers. I hadn't realized the true meaning of programming. For instance, I wrote the following cute little code to swap two numbers.

{% highlight c %}
#include <stdio.h>
int main()
{
    int a, b;
    printf("Enter two numbers: \n");
    printf("Enter a: ");
    scanf("%d",&a);
    printf("Enter b: ");
    scanf("%d",&b);
    printf("A is %d and B is %d\n", a, b);
    printf("After Swapping...\n");
    printf("A is %d and B is %d\n", b, a); // wtf...!!?
    return 0;
}
{% endhighlight %}

My invigilator, who never cared to look at the code, ran my program and verified the output. Works fine. 10/10.

And there I was, on the verge of finishing first year and yet unsure if the code above was conceptually valid.

## Second Year:

Linked-lists, queues, stacks. That *"feel"* of programming, I was so close to feel it, wrote logically correct code for these data structures. A slight rise in confidence but not long when I was blown away by Trees and Graphs. Just couldn't find a way to implement them (I was terrible at recursion).

Meanwhile, I stumbled upon edX - a MOOC platform started by MIT and Harvard in 2012. I registered for the very first course they offered in August 2012, [6.00x by MITx](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x7). This is when I started to get a grip on programming. One of my batch-mates (<a href="https://codeaccepted.wordpress.com/about/" target="_blank">Abhinav Sharma</a>), who now happens to be a great friend, also took the same course. I realized how discussions with him on problems lead to quicker solutions.

Later, after learning a bunch of new stuff from edX 6.00x, we started with Competitive Programming on various websites like CodeChef, HackerEarth, CodeForces etc. I participated in those contests every once in a while and kept on improving with time and effort. It taught me how to be a better debugger and how to write accurate code in first go. What it didn't teach me is how to write a readable, reusable code.

I also had an inclination towards designing, so I used to engage in college fests and worked as a junior designer.

## Third Year:

We were being taught Algorithms and I had been practicing them since about a year as a competitive programmer. We decided to pass on our tactics to juniors and started a college level competitive contest series "[Epiphany](https://www.hackerearth.com/search/search-results/?q=Epiphany)" on HackerEarth. Our work was noticed by HackerEarth team and were contacted by them if we could work as Problem Setter for their monthly challenge, to which we agreed.

On the other hand, I joined college's ACM Committee as a Graphic Designer. Also started working on TopCoder Studio projects. It was just a hobby, however I somehow secured a position in top 5 in many of their contests. Later on, I secured first place in 3 of their UI/UX contests.

To make my <a href="{{ site.baseurl }}{% link resume.html %}" target="_blank">résumé</a> effective, started working on a project as front-end developer. In the midst of all such activities, I got delayed on sending internship applications to companies. Unfortunately, no any company came to recruit interns that year. I wrote an email to <a href="https://www.hackerearth.com/users/vivekprakash/" target="_blank">Vivek Prakash</a>, CTO of HackerEarth asking for more ways I can contribute to them. After a series of conversation, I was offered Summer Internship at HackerEarth.

As a competitive programmer, you have an edge in development. You get things done really fast. During my internship, I pushed lot of code at blazing fast speed with high accuracy. By the end of internship, I was offered a full-time position which I gladly accepted. However, they also expected me to opt out of campus placement. There wasn't an official agreement, however I promised to stay committed.

## Final Year:

First things first, choose a research project, group mates and research guide. I chose to be in an all-star group. Everyone was self motivated to contribute to the project which resulted in balanced work distribution. For the most part, we beat the deadlines and finished the project with distinction. For some guys, this might be the first time you'll be working in a team on something that is official, so be careful before you randomly select a group.

I got a call from Amazon to interview for a position at Bangalore office. I acted on instincts that reminded me of the promise I made to HackerEarth and said no to them. I also opted out of campus placements. However, I participated in Google APAC and was called for onsite interview. Three other batch-mates, who happened to be my project group-mates, also received the call. Two of us made it through; sadly, I was among the other two. Yeah, Google is an exception to that promise, I would have given up on HackerEarth if I had an offer from Google. Later on, received more calls from startups but I politely declined to interview.

Sometimes, I wonder if I made the right decision to say "No" to everyone and join a startup. Should I have taken up a better job offer in a tech giant during campus placements? Did I undervalue myself? Before taking the decision, I spent a good time thinking about what a startup had to offer. Exponential learning curve. Open startup culture. Fast paced environment. No big tag name as such to put on the <a href="{{ site.baseurl }}{% link resume.html %}" target="_blank">résumé</a>. Finally, I made the judgment call. And here I am, writing this post on a Saturday midnight, listening to <a href="https://www.youtube.com/watch?v=yydZbVoCbn0" target="_blank">this</a> music, simultaneously adding some hacky code to HackerEarth codebase.

Till next time. <a href="http://en.wiktionary.org/wiki/evviva#Descendants" target="_blank">Evíva</a>!

---
layout: post
title: "A millennial's thoughts on embarking as a Software Engineer"
description: "We, the new generation of software engineers, love to talk about creating an impact. We attend overnight hackathons to build the next big thing. Good that we can build an app in 24 hours, but is it really a production ready codebase? Are we carried away with the agility brought in by our generation?"
og_image: "documentation/millennials-thoughts-software.jpg"
tags: [software-engineering, product-development]
related_posts: ['/posts/what-it-takes-to-develop-test-and-release-a-software-product', '/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth'] 
---

## Prologue

Three years ago, when I completed a 3 month engineering internship, I had the pleasure of launching several new features in production. For an absolute rookie, like I was one back then, that feeling was same as how Krillin felt when he used Kamehameha for the first time. A year later, when I joined full-time, I found that some of my contribution was already deleted. I didn't really take that well, I mean, my code wasn't that bad!

## Make it work!

When I set out to build my [first software application](https://github.com/ravi-ojha/zigway), the priority list looked like:

 - Make it work!

Today, I cringe when I look back and try to read that code. When we see thousands of new websites/apps launched every day and with the mindset of *"Move fast, break things"*, we are inclined to see the end result so bad that we often compromise with code quality, tests and best practices. Obviously, we promise to come back at that TODOs in the codebase later, which we rarely do. May be it's in the gene of us millennials. Did you feel the same way in your time, eh Master Roshi?

## Read more, write less

As a new Software Engineer in any company, we are often asked to fix bugs. They want us to get familiar with existing codebase. I spent my first month on fixing bugs. There was this one issue I just couldn't debug. It was an AJAX url that hits a function which in turn calls several utility methods and returns json. Moreover, there were two versions of the same class, one with the suffix `_legacy` and the newer one written a few months ago. This resulted into a lot of duplicate code and the old code was marked with `deprecated` comment. Also, this codebase uses a service which lies in a separate repository. It is hard for a newbie to crawl the codebase that stretches over multiples repositories. I was overwhelmed, internship project was too easy I guess. In the four years of college, I used to finish coding assignments on my own, one of the reasons being unable to understand friend's code. We were not taught to read someone else's code and that is the primary requirement of any tech company today, unless it is just starting up a new line of product.

## What is my impact?

After a week of crawling through several dozens of files, I finally understand the flow. Now, I can start making the first changes in the codebase. I finally figured what caused the issue. It took a whole week. It requires a one-line fix and I spent one week on that. A 10x Software Engineer would have closed the ticket in minutes. I never felt so dull in a long time. We have hardcoded our minds towards making an impact, to create a dent in the universe. This isn't satisfying enough. We want to reach the end goal as fast as possible. We are looking for instant gratification! And this characteristic has an adverse effect on codebase in a long term. I recently saw this video in which [Simon Sinek talks about millennials](https://www.youtube.com/watch?v=hER0Qp6QJNU) and I could not help but agree with most of his statements. 

Two of the characteristics that he talks about in the video are: Instant Gratification and Patience. I could very well relate it to the first few weeks at this new job right after graduation. Now when I start to write a new software application, the priority list looks more or less like:

 - Design the flow
 - Write a prototype or at least a class structure
 - Break the design into parts
 - Build those parts individually, along with tests
 - Assemble the parts with a parent wrapper
 - Manual testing
 - Make it work!
 - Continuous maintenance


## Epilogue

It will take a few weeks (or months) to reach the *Make it work!* stage, and we need patience and persistence and a mechanism to cope up with the urge of instant gratification. These can only be cultivated with time. However, on a positive note, we, the so called millennials, work until we have that feeling of satisfaction at the end of the day. We put up longer hours (unlike 9-5 jobs) not because someone is asking us but because in this marathon we aim not to finish the marathon, we aim to lead the race.

<img src="/assets/documentation/gary_vaynerchuk_quote_on_millennials.jpg" alt="Gary Vaynerchuk Millenial Tweet" />

Till next time. [Evíva](http://en.wiktionary.org/wiki/evviva#Descendants)!

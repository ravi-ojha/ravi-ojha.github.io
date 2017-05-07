---
layout: post
title: "How to become better at reading and debugging code"
description: "Reading unknown code is usually intimidating, however, our ability to read and debug code matters more than we can write, yet we are never taught anything about it. Let's see how we can improve our ability to read and debug code."
og_image: "documentation/reading-and-debugging.jpg"
tags: [software-engineering]
related_posts: ['/posts/is-it-boring-working-in-web-development-startups', '/posts/a-millennials-thoughts-on-embarking-as-a-software-engineer']
subscription-form: true
---

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.  
>        - Brian Kernighan and P.J. Plauger, The Elements of Programming Style

The first thing you do when you join any company as a Software Engineer is read the existing codebase. How do they make you read it? They ask you to solve bugs or develop tiny features so that you get acquainted to the codebase. I have a pretty hilarious analogy for this. Ever played GTA? Initially, you spawn up somewhere in the city and they give you small missions that requires you to travel around the city. As you travel more you get familiar with city streets. Just like that, as you fix bugs and develop tiny features, you start getting familiar with various modules in the codebase and eventually you become experienced enough to work on large projects, much like how you carry out complex missions later in the game.

Reading unknown code is usually intimidating. You crawl through a function which calls other functions in turn which may further call some other utility functions. Eventually this increases the scope of your knowledge about the codebase. This means that your ability to read code matters more than you can write. Yet, we are never taught how to read code and debug. That is one of the reasons why the first 3-4 weeks are so hard at any new job. Also, most of the companies fail to test this capability because there’s no way to test this unless the candidate works on a large enough codebase in some phase of the interview process. Some companies do 1 week pair-programming sessions to test this and some other additional things. However, it is not possible for all candidates due to various reasons. Let’s see a couple of ways that can help you in becoming good at reading someone else’s code and debug it.

## Work on community projects

Open source projects are as close as you can get to a production-like code. If I tell you to find open source projects of your interests and try to go through their code then there are higher chances that you might give up on the way, because reading someone else’s code is arduous and distressing, which is why you’d see that a new developer working on previous developer’s code is often cursing the latter<a href="#note1" id="note1ref"><sup>[1]</sup></a>. However, the new developer doesn’t know why it was done the way it was because he hasn’t been in the previous developer’s shoes yet.

A better way is to look out for real world problems that you or your friends are facing. Try to come up with a programming solution, don’t start to code it just yet. Pen it down in plain English. Once you think you have a good enough solution, look out for open source projects that are solving that specific problem or a general version of such a problem. At this point, you’ll have a strong desire to know how others solved it. This curiosity will generate enough motivation to literally make you crawl through their documentation, code and previous discussions. Use that project to solve your problem. On the way, you’ll notice how you can improve some part of code to obtain some extra functionality. That will be your first contribution to the project. By this time, you’ll get the hang of how to read code. This exercise will help you understand large codebase, its structure and why it is so. And it will make you empathetic towards previous developers. Over time, codebase grows, just like an organism<a href="#note2" id="note2ref"><sup>[2]</sup></a>.

## Compete in online programming challenges

Another approach is to take part in competitive programming contests. But again, why should I do it. There’s no straightforward answer to this, however, it is worthwhile to mention that competitive programming will make you write faster, efficient solutions; makes you great at debugging your own pile of unreadable code, because in the initial days you’ll tend to write buggy solutions; helps you think about corner cases and write a bug-free code. And yeah, your knowledge about data structures, algorithms, mathematics and logic will improve drastically. From an undergrad’s point of view, these qualities are quite handy when you turn up for campus interviews. Companies like Google, Facebook, Quora ask related questions to fresh graduates.

If that motivates you to dive into competitive programming then think no further. Head on to any of the competitive programming websites such as Codeforces, CodeChef, TopCoder, HackerEarth, HackerRank and start solving problems. There will be moments when you’ll not know how to solve a problem and that’s when you’ll read someone else’s solution. Now, keep in mind that, everybody writes partly obfuscated solutions because they are meant to be one-time thing and moreover, there’s not much time during a contest to add comments to the solution or use descriptive variable names. So, going through such bad, unreadable, unmaintainable, non-reusable code will make reading and debugging quite easy for you in the future. I should mention that this is like preparing yourself for the storm but finding a drizzle in the end, so that you can just sail past through it. Naruto reference: Rock Lee used to weight-train himself so that in an actual fight, by dropping the weight, he can fight at incredible speed.

## Bring projects to life in a hackathon

Yet another approach is to not look out for the open source projects after you found a good enough solution yourself. Instead, shift in hackathon gear and build your own project overnight. Deploy the code and start using your own product, fix bugs, add more functionality and do other terrible things to it<a href="#note3" id="note3ref"><sup>[3]</sup></a>. Now take a break for 6 months. Forget that you ever built that project. After half a year, continue your work on that project. At this moment, you’ll curse yourself because you’ll find it hard to read and extend your own project. This will also make you care about future developers who are going to work on the project. Other than making you good at reading your own code, this exercise will also teach you to accept your mistakes and next time, you’ll structure your code better, write documentation, use descriptive variable names and commit maintainable code.

Have you mastered the art of reading and debugging code in your own way? Share it in the comments.

Till next time. <a href="http://en.wiktionary.org/wiki/evviva#Descendants" target="_blank">Evíva</a>!

<a id="note1" href="#note1ref">[1]</a> <a href="https://medium.com/things-developers-care-about/why-your-previous-developer-was-terrible-506a06ae35ea" target="_blank">Why your previous developer was terrible</a>  
<a id="note2" href="#note2ref">[2]</a> <a href="http://www.meltingasphalt.com/a-codebase-is-an-organism/" target="_blank"> Codebase is an organism </a>  
<a id="note3" href="#note3ref">[3]</a> <a href="https://blog.codinghorror.com/doing-terrible-things-to-your-code/" target="_blank"> Do terrible things to your code </a>  


**Thanks** to <a href="https://codeaccepted.wordpress.com/about/" target="_blank">Abhinav Sharma</a> for proofreading the drafts of this post. Treat on me :D

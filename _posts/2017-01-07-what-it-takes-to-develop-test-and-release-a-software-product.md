---
layout: post
title: "What it takes to develop, test and release a Software Product?"
description: "When we talk about developing a software product, we often overlook what goes on in the life of an engineer. The software is not just about code, much like how a journey is not about destination."
og_image: "documentation/rookieslab-og.jpg"
tags: [software-engineering, product-development]
---

## Prologue

As a human being you are always pleased when someone appreciates your work. It was that day at work when appreciations were flooding from all directions! Mentor, Manager, HR, CTO everyone seems happy with your performance throughout the year. You're overwhelmed with their response and after a short one-to-one with every concerned party, you go back to your desk, feeling delightful. 4 quarters of development, 512+ commits in production, features shipped within reasonable time. The feeling of being on top of the tiny little world!


## Software Breaks

There's some hitch in the company's product that serves the business needs of enterprise clients. Sales team is facing some heat from the clients. Drop-off has touched a new height. CEO is furious. The same product used to work seamlessly a year ago. You're curious. You go back and use that product as a client. The product works flawlessly! But what do you say to the client? *"IT WORKS!"* NO! You read support tickets, analyze user activity logs, get on call with clients, go onsite and watch the product being used right then and there! You finally figure out why it doesn't work. When 1000 users share a 100 MBPS lease line, which has been poorly distributed, your website takes forever to load.

Again, what do you say to the client? *"Our website isn't made to handle such a scenario."* YES and NO! You have an enterprise product. This wasn't the problem you initially set out to solve, but it is now a problem for your client. Now it is YOUR problem and you solve it to retain the client. So, it is decided. We get back to work and optimize the hell out of every single line of code.

## Wired In

You have a small team of engineers, countable on fingertips. You cannot make everyone go out of their way to work on one single project. The company has to keep innovating to keep up with the competition. Can't afford to loose the client, can't afford to get the whole team to work on it, it goes without saying, it has to be fixed, and fixed fast! And you're the man to do it.

You, your mentor and a fresh recruit roll up the sleeves and identify all the pain points. You don't have the liberty, in terms of time, to fix all of them. You highlight the major ones. After exhaustive five days of architectural discussions, you spend the weekend in identifying the solutions to the technical challenges you figured so far.

Initial plan is set up. You'll build a prototype in a week using a new framework you found that will drastically improve the site performance. Your mentor is not just your mentor, he's got more burden on his shoulders. He left you there, with the new kid. You are not yet sure how things would wind up, junior is equally bewildered. You pull down the list of all the bugs and tiny feature requests and ask him to choose any of those. You have him sorted. A week passed and you have a basic prototype ready, it is not exactly what you expected, but hey, at-least now you know how to use that framework. You three huddle up again. Figure out the exact classes and relations. Now starts a two week cycle.

You create a design document using the pictures of white-boards you took during those discussions. You get into the zone. After a week, you have coded down the classes. However, when you revisit the design doc, you find that the implementation has been done differently than what you thought initially. Not a problem, it happens. You go back and edit the doc to reflect what you had implemented. You stroll back to home, on a Friday night, thinking you have finished a two week job in a week. You're satisfied with yourself and give yourself a break. You spend two days goofing around, having your favorite dishes, messing up with LSPD in GTA V and making up for sleeping only 24 hours in last 5 days.

Another week, you take a look at the specs again, you don't want to lose out on some feature that you had in the old architecture while building a new one. You found a few things and make amends for that, in code and doc. You get back to the new teammate and help him push his first commit to production. Meanwhile, you start looking at how the codebase might look like at the end of this quarter. And there's another weekend.

## Time Flies

Time flies, half past quarter of the year. Product Manager is looking for an exact date of release, because sales is asking for it, because they have to say *"something"* to the client. And you sit there thinking about a rough estimation. Your company has a policy that the one who is actually working on the project names the release date. You have to give some date by the end of day. You have only modeled the architecture and it's hard to explain why it is so hard to estimate the time to release. You have no clue how many obstacles lie ahead. It is end of day and you shoot an email saying that you'll release it in the first week of new quarter. 

Everyone seems happy about that. Your mentor is worried because he knows you made a very ambitious timeline. You both get back on the white-board and figure out the exact implementation details. You start to categorize features: *must have*, *good to have*, *great to have*. You have covered *must have* and implement them with 2 weeks of buffer time. New kid is doing great, he is learning fast and delivers within reasonable time, and well, plays along with your occasional bitching about the old architecture.

Meanwhile, you add a few of the *good to have* features in the new implementation. The only QA in the team has started doing terrible things to your website. You yell, *"Why are you trying to submit an integer when I have provided you with auto-suggestions in that goddamn location field!"*. You get a list of 40 something bugs. You stop adding the *good to have* features and get back on fixing those bugs. You and your teammate divide 50-50. Some of them are very critical. And there doesn't exist a quick fix. You have been working 60 hours a week since last 5 weeks and are still on it this weekend. You are cursing yourself and swear that you'll perform an extensive research before shouting out the release date for the next project.

## Final Push

The first week of the new quarter is here. Everyone is looking at you. They are not saying anything, but you can see expectations in their eyes. Your mentor casually passes by saying *"Let me know if you need any help, I'm always here"*. You feel good to know that someone's got your back. 

You're done with *almost* all the bugs. There were some easy fixes, ugly fixes and terrible fixes. Now, everyone involved in the project starts testing the product. There are some minor bugs and UI changes. The QA comes up with 10 more functionality issues. You go through each of them. You're frustrated. Some new *good to have* features have broken some *must have* features. Meanwhile, the sales team had also promised those *good to have* features. You cannot just rollback the changes. But it's not just that, you as a developer like to own the product and cannot afford compromises yourself. You sheepishly ask for a week's extension. 

Another week passes by and you declare that you'll release the product and replace the one in place on early Saturday morning. But hey! We forgot about one important part of the whole software development process. What about code review? Ahh.. yes! Code review. Your mentor had a good look at it. You have been working for quite a while with him and know what is expected of you in terms of code quality. There were some suggestions, but you make a call to try and rework on it in the next 2-week cycle after launch. Let's ship the product, we have already delayed by a week. 

You had prepared a release checklist in the last quarter: database migrations, new framework, new packages, dependencies, tests, scripts that syncs the new and old tables, and the final `git push origin master`. 

You were awake all night and waiting for your window of opportunity. At around 4 in the morning, you start the release process. It took 3 long hours to setup and deploy the product. Those 3 hours were the most intense 3 continuous hours of your life. You had sat and written hundreds of 3 hour examinations in your life, but this doesn't compare with any of them. You were nervous, scared, drowsy, yet delighted, thrilled to see the new dashboard live in production. Finally, the new, lightning fast product was up and running. 

## Epilogue

It is 7:00 AM now, the all-nighter had taken its toll. Your body cannot take it anymore, however, you write down a long email highlighting all the improvements, full with emotions, sipping a cup of coffee. Before you hit the send button you get a gtalk ping from your mentor *"I'm very proud of you"*. You're glad to know that he was watching you, all this time. You end the email mentioning the contribution of every single person, highlight the new kid's work and hit the send button. Everyone is so happy to start their day with such a good news. Emails with *Kudos \m/*, *Exceptional Job*, *Superb work* pour in. You're having the most soul satisfying moment of your life. You pack your bags and leisurely walk your way to home. You take the long awaited sweetest sleep.

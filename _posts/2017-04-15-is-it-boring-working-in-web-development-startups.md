---
layout: post
title: "Is it boring working in Web Development startups?"
description: "Whenever I get in conversation with junior undergrads, they often ask if it is monotonous and boring working on web technologies. I used to think the same way 3-4 years ago, however, after having the first hand experience, I think otherwise."
og_image: "documentation/boring-web-development.jpg"
tags: [software-engineering, product-development]
related_posts: ['/posts/what-it-takes-to-develop-test-and-release-a-software-product', '/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth']
subscription-form: true
---

## Prologue

An overwhelming majority of startups are serving their software as a service via either mobile app or web app. Many startups have tried to go mobile-only and haven’t really seen much appreciation from consumers because web interfaces allow more control and focus compared to mobile apps. Unless we discover a new radical medium that takes people off their computers, web apps will live high on the hog.

Many aspiring software engineers argue that web development is boring, *“So what do you do? Change the size of a button?” :D*. As a matter of fact, that is not a false statement. However, it is an incomplete statement. The reason that most of the projects started by individuals are at 80- 90% of completion, yet not production ready, is because they halt at the boring part. Let’s go over a general process that takes an idea and makes it live in production.


## Ideation and Mockups

Almost every startup is trying to solve a problem faced by either businesses or common netizens. The real fun lies in talking to those users and making the product that all of them will use or pay to use. And if you yourself are among the end users of the product, the work will not feel like work at all, because all the way, it will feel like you’re working for yourself.

Once you have a good idea of what problem you’re solving, first task at hand is to design a wireframe mockup. Generally, you’ll just sit by the side of a dedicated UX designer. List down all the user actions and how your app will react to that. In the end, you’ll have multiple screens and that will define the entire flow of a user’s journey on your app. This is the point when you’ll have a vague idea about the backend structure for the app.

## Design and Architecture

Talk with a couple other developers, perhaps tech leads, about the architecture that will act as the backbone of the system, keeping the future possible requirements in mind i.e. any change in specs in future should be easily incorporable in the current architecture. Sometimes, developers try to escape this part and jump straight into development. This causes havoc at a later stage when code becomes complex and causes unnecessary delays in product launch. And then you launch it anyway, which leads to bugs in production and then you end up fixing bugs for few more weeks. It is advisable to pen down everything in a document, because when you’re actually writing code, you tend to forget one or more features. Moreover, that design documentation will help as a good reference for the team and for any other developer who might want to join you mid-way.

Estimating the number of users, servers, database and minimizing the server cost also comes under this section. You don’t want to pay for servers that stay idle most of the time. Depending on your app, you’ll have to decide about the number of CPU cores, memory and disk size of the server, type of the database etc. There are design decisions like which process has to be run on which server. Not every process is run on single server. Some processes can be executed on another server (whose sole purpose is to perform low-priority process intensive tasks), thus reducing the load on the server and ensuring faster response time. Knowledge to take such decisions is acquired over time. This is why it is important to have at-least one senior engineer on the ship.


## Backend and Frontend

Once, you have figured the position of every piece of the jigsaw puzzle, you start to build each piece to eventually put all of them together. You put on your headphones and convert the design documentation into actual code, often sipping coffee all the way, writing unit tests for critical components. Generally, you’d want to keep the backend code totally independent of frontend. People write APIs and then expose their endpoints for later use while developing frontend. In the meantime, designer would be done with the first version of designs (converting wireframes to actual UI design).

Now, you get into developing the part that end users will be interacting with. Some people don’t like this part and argue that it is repetitive and boring. However, this is what defines your app. No matter how beautiful your backend code is, how optimized your architecture is, if you don’t get this part right, you can’t get a user onboard. The best way to develop frontend is by becoming a user of your product. That way you’ll avoid making compromises.

## Test and Release

Finally, when you have put together every component, the product is ready for use. Before releasing it, you’d go through manual testing phase. Best way to test a product is by watching two kinds of people use the product: one who knows every bit of the product usage, another who has no idea what the product has to offer. The former is usually done by dedicated manual testers and/or automated [selenium](https://en.wikipedia.org/wiki/Selenium_(software)) tests. The latter are your colleagues or close friends or beta testers. Use the feedback from both of them to further improve the UX and fix bugs.

Startups are agile in nature. We move fast and break things. A bare minimum, usable product launch in 6 months is arguably considered better than a complete product in half a decade. You also have to survive the competition. You launch it when you see it fit enough for your end users. Someone once said “Before you launch it, take a week off, have a good time with family and friends. Once you’re back, use your app as an end user”. This is because you get emotionally attached with the app after working so long and hard, which leads to compromises. However, this practice is rarely followed because it is hard to control emotions and the urge to release. People go on a vacation after launching the product and then come back and mould it around using direct customer feedback.


## Epilogue

If you read it this far, you did enjoy the process, didn’t you? For simplicity, a lot of minor details have been skipped, however, in general the entire cycle is more or less the same. Also, this is accurate if you view it from the lens of a product developer working in a startup of not more than 15 engineers. There are engineers who work on totally different things that create entirely different impact which is not visible to users directly. Some examples of their projects are: Compressing and Lazy Loading Images, AI that replies to support tickets, Autoscaling servers by learning the past traffic trends and guessing the future flux and many more. Some projects do not make any impact on product in anyway, instead, they help other developers to work efficiently and enable them to deploy code seamlessly to production in a matter of minutes, thus increasing engineering productivity. Bottomline is, you choose to work on projects that you find challenging and what leaves you with utmost satisfaction when you walk back to your home in the evening.

Till next time. <a href="http://en.wiktionary.org/wiki/evviva#Descendants" target="_blank">Evíva</a>!

**Thanks** to [Abhinav Sharma](https://codeaccepted.wordpress.com/about/) and [Aakash Rana](https://github.com/aakashrana1995/) for proofreading the drafts of this post and helping me fix terrible grammatical mistakes.

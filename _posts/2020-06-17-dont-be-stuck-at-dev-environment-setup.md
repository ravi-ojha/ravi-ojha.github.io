---
layout: post
title: "Don't be stuck at dev environment setup!"
description: "One of the worst feelings as a developer is not able to work on what you set out to do. Instead, you spent the entire day setting up the repository on your local system. And what's worse? It's the first week of your new job."
og_image: "documentation/dont-be-stuck-at-dev-setup.jpg"
tags: [software-engineering]
related_posts: ['/posts/how-to-become-better-at-reading-and-debugging-code']
subscription-form: true
---

One of the worst feelings as a developer is not being able to work on what you set out to do. Instead, you spent the entire day setting up the repository on your local system. And what's worse? It's the first week of your new job and you're already struggling, hastily googling the errors thrown by the terminal and running random commands from StackOverflow. This is not entirely your fault. _Instruction unclear, fried the system._ In this post, we discuss a few approaches and throw in advice (albeit some common ones but not-so-common) for the team as a whole, not just you or team leader, or engineering manager for that matter.

## Dev onboarding

In most cases, you're struggling because you still don't have enough permissions and in some cases you're not even sure if that's a permission issue. As a team lead, make sure that the new dev has:

 - All the accounts in different environments (dev/staging/testing/qa) with enough permissions, of course for the services they will be working with
 - Accounts, access and configured way to VPNs required to access remote instances
 - Permissions to access the necessary remote instances i.e. ssh keys
 - And just to add a fourth point, don't forget about the accounts in all the third-party services you use as a dev; like VCS, build service, error logger, metrics watcher; the list could go on but you get the point

Once the permissions are sorted, next up on the list is find the right README to follow!

## Leave it better than you found it

When going through the setup README, you may find yourself stuck at an issue that isn't mentioned there. You spend hours trying to figure out what went wrong and finally fix it. Once you get everything right and working, update the docs! Six months down the line, another dev will repeat it and god forbid if they ask you, and you answer "Aahhh.. I faced the exact same error but I can't recall how I fixed it". That's as good as u/denvercoder9 from this xkcd

<figure class="image">
  <img src="https://imgs.xkcd.com/comics/wisdom_of_the_ancients.png" alt="XKCD 979" />
  <figcaption>Credits: https://xkcd.com/979/</figcaption>
</figure>

Why aren't the docs updating? It's because sometimes they are hard to locate in a bunch of Confluence articles or Google Drive. It's harder to review the updates. An alternative solution to this is to git track the docs. The ability to easily update and commit makes it easier. There will never be a moment, where you say _"I'll do it later"_ and then get on with business-as-usual. Another reason is just slacking off. Ingraining the culture as a part of the code-review process solves it. And you can always host the markdown files as a static site internally.

## Dockerise!

Thyself be blessed by every developer setting up the service on their local when it works flawlessly with just one command `docker-compose up`. The command may take some time but letting a single command run for an hour is better than running multiple commands yourself for an entire day. Plus, in the meantime, install your own daily dev tools, chat up with the rest of your teammates, make new water cooler friends, or play ping-pong.

Although this advice doesn't apply to every developer's job, it still holds enough weight to be mentioned.

And when you can't containerize stuff, don't resort to installing packages and services system wide. Make use of virtual environments, venv managers and language version managers such as nvm, pyenv, rustup, rbenv, jabba.

## Developer workflow

Every dev has their own work environment setup, which they've optimised and mastered over the years. Collection of tools, favorite terminal client, preferred editor to name a few. With a new project, and especially if it's a new language/framework, those tools might lack in one way or another. You'll have to figure out new tools to help with development and debugging. One of the best ways to learn and go about this is to pair-program! Watch someone on your team when they're working. Sit side-by-side and solve it together. Or have them share screen while they code, if you're remote.

One personal experience for me was with Clojure ecosystem. I couldn't figure out the right dev workflow and tools myself and ended up being super unproductive and I'm entirely to blame for it. Never got around to using REPL to its full potential. I might give it another shot sometime in future.

## Don't install every microservice in your local

Every dev in the team is setting up every microservice their service interacts with. Unless you'll be modifying the source in those microservices, don't do that. Setup a test instance for devs and install all the services there. Point your local to those services and you're done. I wonder why this is not a common practice in most startups. The server cost will be way less than the time-cost all the devs will be paying collectively.

Also, don't create hundreds of microservices. It's better to have 5 large services than to have 25 micro services. Otherwise, and this is not an issue by the way, your half the git history will have version bump commits. This warrants a separate post and if you have strong feelings against the idea, my answer would be to meet me over chai. Although, like most engineering questions, we could get away with _"It depends"_, you might like reading [this](https://segment.com/blog/goodbye-microservices/).

## Did I mention local DBs yet?

This is my favorite problem to fix whenever I start on any new project. Worst case scenario is, there's no db migration history, no local schema and no fixtures for local. And no access to prod/qa/staging databases to source the db dump from. So you track down the last person who had that service up and get the dump from their local machine, given that they didn't nuke it.

First of all, create a db migration history. Then create db fixtures for the local system to work out of the box. And for other random data, maintain a shared SQL db dump, and don't forget to update it regularly. Or write factory methods/scripts that generate such data and running that becomes part of local setup.

Be loud and clear in communicating the changes in db schema, you don't want the next person to pull the repo and panic because their local was working yesterday evening. This is mostly solved by maintaining migration history, however, there are some cases when you might have to run some manual commands.

## Don't take security for granted

Share credentials to services via encrypted password managers or fallback to sharing PGP keys with internal teams. Don't trust any service/person no matter how convincing it sounds, you'll develop trust issues when you're betrayed by one. It's not a bad quality to have. _Trust, but verify._ Yeah, that's just a nice way to put _"Don't trust"_.

<video autoplay="" loop="" muted="" playsinline="">
    <source src="https://thumbs.gfycat.com/HideousMintyCuckoo-mobile.mp4" type="video/mp4">
    <p>Please use a browser that supports embedded video.</p>
</video>

## Be humble to your new teammates

When you're helping a new teammate who has more experience than you but you find that they don't know some of the stuff that you use daily, don't get annoyed when they ask you the most obvious of the questions. It takes a bit of time to get used to a new tool/service/product. If you do, they'll hesitate to ask further questions and those questions will arise again when another dev joins the team after a few months. And if the present new dev is helping the future new dev, an answer "I don't know man, that's how it is. It just works." is a bad bad first impression to make.

Be humble, even if you have to explain it twice. They were smart enough to clear the interview process as you did. Initial support will go a long way, you may even end up making lifelong friends.


**Many thanks** to <a href="https://codeaccepted.wordpress.com/about/" target="_blank">Abhinav Sharma</a> and Shubham Jain for proofreading the drafts of this post.

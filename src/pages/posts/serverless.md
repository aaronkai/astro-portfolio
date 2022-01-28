---
layout: ../../layouts/blogLayout.astro
tags:
  - Cloudflare
  - serverless
  - 🤯

publishDate: 2022-01-28 16:30:00
title: Serverless v0.1
description: Wherein a new dev learns about serverless tech
---

## I didn't actually know what serverless was 🤔

I've been keeping a list of things I want to learn next. I've had both "Wes Bos's Node course" and "serverless" on that list for some time. This week, I decided on the Node.js course.

Pretty quickly it started to look very dated 👴. For example, it uses Pug for HTML templating, and serves everything from the backend using a MVC model. I've not seen this in use since I started using JS several years ago, but it made me think back to my days learning Ruby on Rails. I'll be honest, I didn't want to learn Pug or even muck around in it.

It did make me realize, in sort of brain expanding way 🤯, the niche that the JS frameworks I've been using occupy. They've replaced the sort of HTML templating on the backend that was used in this video. For a time, people moved as far away from server-side rendering as they could, writing Single Page Apps that Viewing and Controlling. They just needed data to feed them, if that, and so you have backend-CMS tools and tools like Supabase that provide a data backend.

I realized that a tool like Keystone, which I used for a project, is using an older non-Software-as-a-service model. It's built on Express, which is what Wes was using in this Node course for his backend. I found Keystone to be a bit of a pain. When your starting place if SaS, it's hard to believe that you need to rent a server, run your backend and DB on it, and do all of the care-and-feeding. I mean, it's probably closer to my skill set, as a Linux junior-SA, than actual web-dev, but still, the idea of keeping up with a bunch of servers for all the little projects...yuck. Any actually having to pay for them? Where's the free tier?

So all of this kind of laid the groundwork for me to have my little eurika moment on serverless. Oh, so I use the SaS model, but for the backend stuff 🤯? For some reason I thought it was for little micro-processes. Maybe at one point it was? But what Cloudflare has going on makes me think you could really replace the old you-own/rent-the-server model. I'm into it!

## Serverless Projects

So far I've done two projects:

1. [A Hello World](https://hello-world-worker.immanent.dev) that uses Cloudflare headers to display your location.
2. [A simple API](https://api-demo.immanent.dev) that takes a query from a React app, searches Unsplash with the term, and returns a simplified version of Unsplash results to the app for display.

Both were [tutorials](https://developers.cloudflare.com/workers/tutorials) found on the cloudflare website.

I marched right along yesterday following the tutorials. Of course, the fun starts when you step away for a day and come back. My new domain was absorbed into Cloudflare, so I wanted to set up custom domains for the projects. That's where I ran into a mish-mash of CORS and DNS issues (everyone's favorite!) that had me scratching my head for hours, cursing, taking a walk, and coming back for serious troubleshooting.

I really want to like Cloudflare, but I think they have a little DX to work out. The build times, for starters, are significantly slower than Netlify/Vercel, as far as I can tell. Even setting up a simple HTML landing page via Cloudflare Pages had me tapping my foot with impatience. There are also lags with publishing workers that make troubleshooting harder. "Am I looking at the old instance of the worker or the new one?" you might find yourself asking. Then you have a DNS tab, a workers tab, and a Pages tab, several worker files, and then your wrangler-cli terminals that you are bouncing between, and sometimes they are linked together and sometimes they aren't 😠 😢.

Nonetheless, I suspect they'll keep ironing things out as they go, and the promise, for me, outweighs the pain. Onward!

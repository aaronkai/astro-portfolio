---
layout: ../../layouts/blog.astro
title: Hacktoberfest 2021
tags:
  - Hacktoberfest
  - SvelteKit
  - Supabase
  - Spooky Sets
publishDate: 2021-10-20 16:00:00
---

Supabase mentioned in an email that they were piggybacking on Hactoberfest2021. Participants that used Supabase on a project would get a free tee shirt. Sign. Me. Up.

## Spoooky Sets

I've been doing a bodyweight workout during COVID since my gym is closed, and I wanted to make an app to track my sets. What better time?

[Spoooky Sets](https://spoooky-sets.netlify.app)

It's a pretty goofy app. The supabase portion at this point is definately bolted on without much use. My intention is to eventually allow users to save custom workouts to the backend and load them after they log in. As I recall, I got part way into this and hit some bugs in the Supabase UI for the database. Changes I was making were not being pushed to the database config. I wrote Supabase support, and they said, basically, "Yeah, our database UI is not great.". That was a little weird and unfortunate.

Since I was running out of time anyway, I just got the app to a state of viability and called it a week.

Like most things I build these days, there's a real question of how much effort to put into any one thing. I decided there were real issues with the UX I wanted to fix, so I've been working on the workout page animations while learning more about Svelte animations via [levelUpTuts](https://leveluptutorials.com/tutorials/animating-svelte/getting-started). I've learned about custom JS events and how to integrate them with Svelte. I also learned about applying an index to a svelte 'each' block to allow animations to apply properly to the DOM node in question.

## Next Steps

There's still a lot to do:

- Better menu experience
- Integrate Timer component with workout page
- Allow user to save a modified workout from workout page
- Allow user to load a custom workout...will probably need a new page for this
- Currently, the app is mobile-first-and-only. I don't really see much use for this on the desktop, but I suppose I could/should make a few improvements

## Lessons Learned

- I'm starting to fall out of love with dark mode. It creates a new set of challenges...How to do a good drop shadow? So far a lot of my designs either feel brutalist or too muddy.
- Design Systems...man...they're tough. I thought I had one when I started this project, and it quickly fell apart. The more you add, the more components there are that slowly drift from the basic idea. Eventually, you have a mass of buttons, headers, links that lack unity. Makes me think of TailwindCSS again, because at least at the end of the day you are forced into some type of design system, or think about your project in more structured terms.

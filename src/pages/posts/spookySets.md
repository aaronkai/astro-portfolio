---
layout: ../../layouts/blogLayout.astro
title: Building A Workout Tracker
tags:
  - svelteKit
  - supaBase
  - SpookySets
publishDate: 2021-10-27 16:00:00
---

## "Well I don't know what the world may want..."

I like exercise. Exercise has been one of the few constants in my adult life. Ever since I learned in my 20s that I really feel much better and happier if I work out, I've made a special point to make time to do it almost every day.

Lately, during COVID, I've been doing the [r/bodyweightfitness Recomended Routine](https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/). It consists of multiple exercises that you perform in sets. You don't need any weights, just a pullup bar and some rings. I kept losing my place (distracted as I often was by a podcast), so I decided to make an app to help me.

I'm also trying to lose 10 pounds that snuck up on me in an ice cream container. To that effect I wanted a body-fat percentage calculator.

Both of these things exist on the web, but they are generally buried in ads and crummy design.

## Spooky Sets

[Spooky Sets](https://spoooky-sets.netlify.app) has entered the 'good-enough' phase of development. The basic functionality works, the design doesn't make my eyes bleed. Users can create workouts and save them to the Supabase backend after logging in. This is pretty much what I would have liked to turn in for the Hackathon given more time.

## What did I learn?

### Maybe I like atomic CSS

Believe it or not, I'm thinking of giving TailwindCSS another shot. I found myself wishing for ready-made utility classes. I ended up yanking a design system from a website online, and it's clearly a bolt-on to Tailwind or a Tailwinds-alike type system.

### I need to improve my design-system system.

Design systems are important. Without one, every time you add a page with some new edge case you have a chance to drift away from an unstated, undefined standard. The end result is a deficit of professional appearance.

### Supabase isn't quite 'there' yet.

It's a good tool and I'll reach for it again because it solves a lot of issues in one place. That said, it has some issues:

- the docs are only so-so
- the database GUI is frustrating. What's worse than making a change only to have no way to see it was implemented only to learn eventually that it wasn't? A success message flashes before your eyes but the change wasn't applied. Or you have to delete the entire database and recreate it to add a primary key. No Fun.

## What's next?

I'm not sure yet. I don't have a project lined up that I'm excited to start on. I think I work on some LevelUpTutorials. There's one on Web Components. Another on Cypress. Another on 'Modern CSS'. I think I'll give them a look.

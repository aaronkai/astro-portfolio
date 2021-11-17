---
layout: ../../layouts/blogLayout.astro
title: SvelteKit Vs. Gatsby, TailwindCSS Vs. Itself.
tags:
  - aikido website
  - graphic design
  - SvelteKit vs. Gatsby
  - TailwindCSS
  - Vite is Good
publishDate: 2021-09-01 16:00:00
---

## What have I been up to for a month?

I continued working on the Asheville Aikido website. I spent some time working on the front-end design, including designing the logo. I threw a lot at the wall and the client didn't particularly like any of it. I think part of the issue is that I'm doing this project on spec, unbidden by anyone.

The project has certainly made me see the advantage of going into a project with a clear idea of what the goals are. I'm also clarifying my own skills, aptitudes, and inclinations. What I'm learning is that I enjoy and am better at the technical side of this work, rather than the graphic design. I'm gaining a real appreciation for how much experience is needed to make a good-looking website.

The question I am asking myself is how much skill it makes sense to develop with design tools. Should I learn Figma? Adobe CS?

## Gatsby vs. SvelteKit

I wanted to touch up my portfolio site that is currently done in Gatsby, but found myself bristling to be back in React World. Svelte's virtues were not immediately apparent, but now I am appreciating the more-logical project layout and the clean syntax.

I decided that I'd like to move my portfolio over to SvelteKit and integrate it with this blog, which was already built in SvelteKit. Not hard at all. My biggest quibble with using SvelteKit for these simple projects is the lact of image handling. Gatsby excels here. NextJS is pretty good. SvelteKit...not so much. I ran into these issues with the Aikido Website, but luckily when I added the Sanity backend, Sanity managed some of the image headaches for me.

Also, after experiencing the speed of Vite, it was hard to go back to waiting on Gatsby to compile. It's only seconds, but it makes for a better DX.

## Is TailwindCSS worth it?

This is a controversial subject, I know. I'm still on the fence. I decided to stay away from Tailwind for the portfolio redesign. Svelte scopes the CSS by default, so you don't have to add any tooling like 'styled components'. Also, I found myself getting annoyed when I just wanted to style a dozen identical components, or worse, change styling on a dozen identical components that had already been styled. Tailwinds seems to suggest making components when you run into this issue, which I don't love. When the code gets too component-heavy (e.g. having a component for a specific type of list item) it starts to get confusing for me. I could make custom styles I guess, but at some point you've basically found yourself re-creating the cascade.

One thing I read about Tailwind is that "the complexity has to live somewhere." I really liked that. Adopt it or not, the complexity has to live somewhere. Do you want it integrated with the HTML or in a separate CSS section? I'm leaning towards the latter.

Lastly, the Tailwinds post-processor seemed to be breaking Vite's Hot Module Reloading and I couldn't find any answers online or in the Discord. Without it, HMR works like a charm, and man, is Vite fast!

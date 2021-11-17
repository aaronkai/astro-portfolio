---
layout: ../../layouts/blogLayout.astro
title: Astro -- First Impressions
tags:
  - Astro
  - portfolio
publishDate: 2021-11-17 16:00:00
---

## Building a blog with Astro

There's a good chance that if your reading this, it's on an Astro site. Inspired by the Astro episode of Syntax, I decided to jump in. It has been a mostly positive experience.

## What's good?

Let's talk about what's to like about Astro that I have already seen.

### Intelligent Defaults

Astro is opinionated about some things and agnostic on others. Astro believes that html and css are pretty good and you should see what you can do with them before reaching elsewhere. This has been fine for my portfolio site. It didn't really need reactivity. Why was I using a reactive framework to build it. Supposedly this will make a super fast website. This remains to be seen...my SvelteKit portfolio was plenty fast.

### Markdown is a first class citizen

I am still trying to understand what everyone finds so compelling about working in Markdown, but in Pascalian fashion, I'm trying to act as if I believe with the hopes that I will come to accept the doctrine. Astro is making this propostion a bit more comprehensible. Glob imports of markdown files with out-of-the-box functionality for things like code-highlighting make using markdown a treat.

I am also finally figuring out how to use Tailwind to style programatically generated content. It's sort of a perversion of the atomic styling principles, but I feel the workaround (styling via custom Tailwind styles applied to base styles) is a reasonable work-around

## What's bad?

DX isn't great yet. Sometimes a syntax error causes Snowpack to crash. Sometimes the page must be refreshed for changes to appear. I could not make Prettier work. Having become accustomed to having Prettier for formatting for me, this is brutal. There are still weird bugs -- for example you can't do two fetches on the same page -- and often the errors are cryptic.

## What's Next?

- Get this Astro site hosted somewhere. I'm curious how that will go.
- A friend of mine that is a photographer complained that her SEO is terrible. I took a look at her site, and she needs a photo blog front-end for her PixieSet site, I believe. I was curious if I could do a file-based photo portfolio/blog with Astro. Might be a fun time, and the web vitals will be much better than the WP themes that dominate the space. The trick will be image handling.

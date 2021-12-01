---
layout: ../../layouts/blogLayout.astro
tags:
  - Astro v0.21
publishDate: 2021-12-01 16:30:00
title: Upgrading to Astro v0.21
description: Easy-Peasy
---

## Back to Work

I took a week off for Thanksgiving from my job, and I decided to truly savor the time. I put down coding as well, and picked up Disco Elysium. It was a truly unusual experience, innovative in ways I've given up hoping for from a video game. It honestly felt more like reading a novel than playing a video game.

Yesterday I got the COVID booster, and I've been feeling a bit under the weather. Figured it would be a good time to see about upgrading to Astro v0.21.

## Big Changes at Astro

Really a lot changed in this point release. Biggest change is that they switched to Vite. I'm familiar with Vite since that's what SvelteKit uses too. I have to say I was surprised though: Astro was created by the Snowpack team, so the decision to switch to Vite must have been fraught, but I've not see any mention of the hot drama that has to have taken place somewhere.

## An Easy Upgrade.

Honestly, the upgrade was painless, in part because my porfolio site is so simple. All that needed to be done was:

#### In the terminal:

```bash
 4520  ncu
 4521  ncu -u
 4522  pnpm i
 4524  pnpm i autoprefixer
 4526  pnpm i -D postcss

```

### Create a new config for PostCSS

It was nice that TailwindCSS was built into the old Astro, but configuring it with Vite wasn't bad:

#### postcss.config.cjs

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};
```

And that was it! I couldn't believe it.

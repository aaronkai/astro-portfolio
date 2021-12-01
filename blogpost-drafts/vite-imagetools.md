---
layout: ../../layouts/blogLayout.astro
tags:
  - svelteKit
  - vite-imagetools
publishDate: 2021-11-18 16:30:00
title: Getting vite-imagetools working with SvelteKit
description: how to set up vite-imagetools for SvelteKit
---

These cutting-edge frameworks are neat, but the image handling makes you yearn for the the warm blanket of a Gatsby/Next image, doeesn't it?

Let's see how much of that functionality we can recreate with [vite-imagetools](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md)

[This article](https://rodneylab.com/sveltekit-image-plugin/) is also a great summary of next-gen images in SvelteKit

## install vite-imagetools

```bash
pnpm i -D vite-imagetools
```

## set up vite

At the project root in _svelte.config.js_

```javascript
import preprocess from "svelte-preprocess";
import { imagetools } from "vite-imagetools";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      plugins: [imagetools()],
    },
  },
};

export default config;
```

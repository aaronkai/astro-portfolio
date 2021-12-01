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

#### Update astro.config.mjs

```js
export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
    // tailwindConfig: '',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
    tailwindConfig: "./tailwind.config.js",
  },
  renderers: ["@astrojs/renderer-svelte"],
  vite: {
    plugins: [],
  },
};
```

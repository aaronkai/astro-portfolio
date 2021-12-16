---
layout: ../../layouts/blogLayout.astro
title: TypeScript For The Win!
tags:
  - TypeScript
  - Intro to CS
publishDate: 2021-12-16 16:00:00
---

## Another Typescript 'AhhHah' Moment

I just had a lil Typescript success moment and I want to share 🥳. I'm working through [this tutorial](https://www.digitalocean.com/community/tutorials/js-binary-search-trees) on binary search trees 🌳. I'm also rewriting it in Typescript just to get more familiar with TS.

I got to this section:

```js
BFS(start) {
  let data = [],
      queue = [],
      current = start ? this.find(start) : this.root;
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    data.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  };
  return data;
}
```

Basically, the author has refactored his breadth-first search method to add a starting point. If a starting point is passed to the method, the breadth-first search starts at that point.

But when I was reworking it in TS, TS yelled _"Hey, find() can return something other than an instance of the binary tree! What if what you're searching isn't found!"_

Oh yeah...**how about that!**

So I added this to prevent a possible error:

```ts
let search: TreeNode | boolean = this.find(start);
let visited = [];
let queue = [];
let current: TreeNode = search instanceof TreeNode ? search : this.root;
```

I know that probably won't impress a lot of people, but for me it was nice illustrative moment that answers the _"why bother with TS"_ question for me!

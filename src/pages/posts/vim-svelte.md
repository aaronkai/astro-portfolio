---
layout: ../../layouts/blog.astro
title: Setting up NeoVim to Code in Svelte
tags:
  - svelteKit
  - vim
publishDate: 2021-09-09 15:00:00
---

## Why use Vim

I've been using vim for years. I won't pretend to be a poweruser, but I've overcome the initial learning curve. I can close the application, for example. VSCode is awesome, and even now I have serious doubts I can quit it, but maybe, just maybe, I could use vim instead?

## The Path

Luckily, I'm not the first chump to take this on. Ilia Mikhailov wrote an [excellent blog post](https://codechips.me/vim-setup-for-svelte-development/).

## The Problem

Svelte uses files that by default contain javascript, html, and css. Most commenting plugins for vim did not anticipate this. The plugin Ilia chose to fix this didn't work for me. I started to dig into it, and it was half written in Japaneese, among other issues.

I started looking for other answers. It appears Vue is also uses hybrid files. Surely someone figured this out already?

## Yep.

I found Github discussion of [a plugin](https://github.com/suy/vim-context-commentstring) that worked with [TPope's comment plugin](https://github.com/tpope/vim-commentary) to provide proper comments for vue files.

Almost there. I just needed to update the plugin to include Svelte:

### vim-context-commentstring/autoload/context/commentstring.vim

[...]

```vim
let g:context#comments#table['svelte'] = {
			\ 'htmlTag': 's:<!--,m:    ,e:-->',
			\ 'svelte_typescript': 's1:/*,mb:*,ex:*/,://',
			\ 'cssStyle': 's1:/*,mb:*,ex:*/,://',
			\ }
```

### vim-context-commentstring/autoload/context/comments.vim

[...]

```vim
let g:context#commentstring#table['svelte'] = {
			\ 'javaScript'  : '//%s',
			\ 'cssStyle'    : '/*%s*/',
			\}
```

Cheers!

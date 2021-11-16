---
layout: ../../layouts/blog.astro
title: The Arc of History Bends Towards Arch
tags:
  - arch linux
  - aikido website
  - svelteKit
  - vacation
publishDate: 2021-08-04 16:00:00
---

It's been a weird month.

## Vacation

I went to the Beach in late July and stayed in a palatial mansion. The master suite was as big as my house. It rained every day, but we found time to wrestle the toddler to the shore.

Coming back to the day-to-day was hard. I should have taken a longer break.

## Svelte

I'm still working on the dojo website. I realized that with as many stakeholders as are involved, it would need to have some kind of CMS backend. I hooked the page up to Sanity CMS. Prior to this, I had `prerender=true` set on all of the pages, but I realized this would necessitate a build step for each update by each user. I think I could use build hooks for this eventually (and I may once we get things ironed out), but in the short term it made sense to just take the site SSR.

I haven't shared the CMS portal with the stakeholders yet. I'm curious how it's going to go. It seems pretty intuitive to me, but I built it. I'm anticipating that it might be a struggle.

## Arch Linux

I needed a little break and found myself getting interested in tricking out a Linux box again. I've been using Fedora for a year or more, but sometimes you just want to make your life a little harder. So I carved out a little partition for Arch and I've spent a delightful few days ironing out the kinks.

It's crazy how much you take for granted. I had to learn how to manually bring up the network interface and assign an IP and routes. I had to learn more about Linux bootloaders. I installed a keyboard driven tiling window manager. I found my own screen locker. I wrestled with NVIDIA drivers. Good Times.

## Syntax FM

Oh, one other thing. I was listening to the [Syntax Podcast](https://syntax.fm/) today and one of my questions got accepted and answered by Wes and Scott! I love these guys, and having them answer my question was an unexpected honor. I was afraid it was too dumb to warant consideration!

<style>

  img {
    max-width: 100px;
  }
</style>

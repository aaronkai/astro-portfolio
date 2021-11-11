---
layout: ../../layouts/blog.astro
title: Whoa TypeScript!
tags:
  - TypeScript
  - LevelUpTuts
  - Deno
publishDate: 2021-10-01 16:00:00
---

## I get it now.

I'm continuing to work through Level Up Tutorials' Deno class. What I am finding is that the tutorials are great _hors d'oeuvre_, but I need to push them a little further to make them work for me. The tutorial I was working on today was to develop a simple API. Scott for understandable reasons wrote his in JS, but I wanted to make it work in TS. He also hard coded the API, whereas I wanted to be able to search my data.

Here's the code:

### http.ts

```ts
import {
  Application,
  send,
  Router,
} from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { getMovies, getMovie } from "../api/movies/methods.ts";

const app = new Application();
const router = new Router();

router
  .get("/hi", (context) => {
    context.response.body = {
      hello: {
        from: {
          the: {
            router: "hi",
          },
        },
      },
    };
  })
  .get("/api/movies", async (context) => {
    const movies = await getMovies();
    context.response.body = movies;
  })
  .get("/api/movie/:id", async (context) => {
    const movie = await getMovie(context.params.id);
    context.response.body = movie;
  });

app.use(router.routes());

app.use(async (context) => {
  try {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch (e) {
    console.log("e", e);
  }
});

await app.listen({ port: 8000 });
```

### methods.ts

```typescript
interface Movies {
  data: Movie[];
}

interface Movie {
  id: string | undefined;
  title: string;
}

const movies: Movie[] = [
  {
    id: "1",
    title: "Spidermen",
  },
  {
    id: "2",
    title: "Batmen",
  },
];

function findID(movies: Movie[], id: string): Movie | boolean {
  let searchResult: Movie | false = false;
  movies.forEach((movie: Movie) => {
    if (movie.id === id) {
      searchResult = movie;
    }
  });
  return searchResult;
}

export function getMovies() {
  return {
    data: movies,
  };
}

export function getMovie(id?: string): Movie | boolean {
  if (id) {
    const singleMovie: Movie | boolean = findID(movies, id);
    return singleMovie;
  }

  return false;
}
```

Now I know this is some basic stuff. But it's new to me. I've never written an API before, so at the very least, this tutorial is introducing me to this.

However, the most interesting thing to me was the way forcing myself to use TypeScript improved my code. It forced me to think about the shape of my data. It forced me to consider the cases in which a function would not return an object. It caught a logical error in an if/else statement I had overlooked.

As I used it, I was not exactly thrilled. I felt like TS was getting in my way. Yet coming down the home stretch I realized it had actually improved the experience by catching a lot of bugs that I might not have realized existed until my program didn't perform as I expected it to.

My only issue is that it's challenging to find good answers to my basic problems online, as most of the StackOverflows I've seen when I search errors involve code that's significantly more complex than what I'm doing.

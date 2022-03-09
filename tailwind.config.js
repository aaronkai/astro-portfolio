// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  // more options here
  theme: {
    extend: {
      gridTemplateRows: {
        "project-card": "2fr 1fr",
      },
      gridTemplateColumns: {
        nav: "1fr auto",
      },
      gridAutoColumns: {
        autowrap: "repeat(auto-fill, 1fr)",
      },
      fontFamily: {
        lato: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
};

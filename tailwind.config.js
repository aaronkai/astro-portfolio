// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  // more options here
  theme: {
    screens: {
      xs: "399px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
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

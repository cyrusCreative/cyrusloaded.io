/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["index.html", "src/input.css"],
  theme: {
    fontFamily: {
      mpluscodelatin: ["M PLUS Code Latin", "monospace"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024",
        xl: "1280px",
      },
      spacing: {
        big: "35rem",
      },
    },
  },
  plugins: [],
};

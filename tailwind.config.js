/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "romantic-pink": "#ffafcc",
        "deep-rose": "#fb6f92",
        cream: "#fff0f3",
      },
      fontFamily: {
        handwriting: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};

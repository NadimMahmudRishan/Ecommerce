/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themePurple: "#502ec3",
        themeYellow: "#f5e60d",
      },
    },
  },
  plugins: [],
};

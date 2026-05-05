/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": {
            transform: "translateY(100vh) rotate(3deg)",
            opacity: "1",
          },
          "10%": {
            opacity: "0",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100px) rotate(360deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        floatUp: "floatUp linear infinite",
      },
    },
  },
  plugins: [],
};
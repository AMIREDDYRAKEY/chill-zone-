/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    keyframes: {
  floatDrift: {
    "0%": {
      transform: "translateY(100vh) translateX(0px) rotate(0deg)",
      opacity: "0",
    },
    "10%": {
      opacity: "0.25",
    },
    "50%": {
      transform: "translateY(40vh) translateX(40px) rotate(180deg)",
    },
    "90%": {
      opacity: "0.25",
    },
    "100%": {
      transform: "translateY(-120px) translateX(-40px) rotate(360deg)",
      opacity: "0",
    },
  },
},
animation: {
  floatDrift: "floatDrift linear infinite",
},
    },
  },
  plugins: [],
};
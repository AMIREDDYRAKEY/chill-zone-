/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       extend: {
  keyframes: {
    fallDown: {
      "0%": {
        transform: "translateY(-100px) translateX(0px) rotate(0deg)",
        opacity: "0",
      },
      "10%": {
        opacity: "0.25",
      },
      "50%": {
        transform: "translateY(50vh) translateX(30px) rotate(180deg)",
      },
      "100%": {
        transform: "translateY(110vh) translateX(-30px) rotate(360deg)",
        opacity: "0",
      },
    },
  },
  animation: {
    fallDown: "fallDown linear infinite",
  },
}
    },
  },
  plugins: [],
};
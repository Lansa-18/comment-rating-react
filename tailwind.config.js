/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-greyish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "hsl(212, 24%, 26%)",
        "greyish-blue": "hsl(211, 10%, 45%)",
        "light-grey": "hsl(223, 19%, 93%)",
        "very-light-grey": "hsl(228, 33%, 97%)",
        "white": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}
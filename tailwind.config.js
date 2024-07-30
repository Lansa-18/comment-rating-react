/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "big-desktop": { max: "87.499em" }, // 1400px
        laptop: { max: "80em" }, // 1280px
        "tab-land": { max: "74.999em" }, // 1200px
        "custom-1050": { max: "65.624em" }, // 1050px
        "tab-port": { max: "61.999em" }, // 992px
        "custom-915": { max: "57.187em" }, // 915px
        "custom-850": { max: "53.124em" }, // 850px
        "land-phone": { max: "47.999em" }, // 768px
        "custom-680": { max: "42.499em" }, // 680px
        phone: { max: "35.999em" }, // 576px
      },
      colors: {
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-greyish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "hsl(212, 24%, 26%)",
        "greyish-blue-opaque": "hsla(211, 10%, 45%, 0.35)",
        "greyish-blue": "hsl(211, 10%, 45%)",
        "light-grey": "hsl(223, 19%, 93%)",
        "very-light-grey": "hsl(228, 33%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};

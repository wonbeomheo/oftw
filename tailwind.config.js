/** @type {import('tailwindcss').Config} */
/* eslint no-undef: off */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}


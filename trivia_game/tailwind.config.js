/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "login": "#03e9f4",
      "register": "#03888f",
      "white": "#ffffff",
      "send": "#12486B",
      "rec": "#6499E9",
    },
    extend: {},
    screens: {
      'mob': {'max': '640px'},
    },
  },
  plugins: [],
}


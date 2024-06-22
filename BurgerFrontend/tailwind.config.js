/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "bread-color":"#ffa617",
      "aloo-tikki":"#d1803a",
      "paneer-slice":"#eef4d4",
      "cheese-slice":"#fad272",
      "cust-white": "white",
      "dark-sky": "#17cad0",
      "light-sky": "#66ccd0",
      "dark-blue": "#2196f3",
      "backgroundColor": "red",
      "cust-gray": "gray",
      "cust-black": "#191717",
      "black": "black",
      "cust-bg": "#EEF5FF",
      "cust-lite-black": "#293333",
      "cust-semiblack": "#3d3a3a",
      "cust-lightgray": "#ede6e6",
      "cust-gray2nd": "#DDDDDD",
      "cust-lite-blue": "#075ff7",
      "cust-EEEDEB": "#EEEDEB",
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        bodyBackground: "rgba(8, 3, 37, .9)",
        headerBackground: "rgba(8,3,37,.4)",
        menuItemBackground: "rgba(8, 3, 37, .8)",
      },
    },
  },
  plugins: [],
};

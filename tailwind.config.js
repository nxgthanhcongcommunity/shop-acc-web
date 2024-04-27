/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        primary: "#13082c",
        secondary: "#2944a3",
        title: "#9536e8",
      },
    },
  },
  plugins: [],
};

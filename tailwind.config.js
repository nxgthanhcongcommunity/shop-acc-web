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
        hightLight: "rgb(186, 175, 220)",
        hidden: "#1f1340",
        textColor: "#BAAFDC",
        "2Like": "#baafdc",
        "3like": "#ff61fb",
      },
      zIndex: {
        header: "10",
        searchBar: "90",
        toggle: "40",
        mobileMenu: "30",
      },
    },
  },
  plugins: [],
};

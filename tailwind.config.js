/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {


    extend: {
      fontFamily: {
        poppins: "Poppins",
        sitefont: "Golos Text",
        teko: "Teko",
        jetfont: "JetBrainsMono Nerd Font",
        touse: "Hanken Grotesk",
      },
      colors: {
        "light-red": "#ff5757",
        "orange-yellow": "#ffb01f",
        "green-teal": "#00bd91",
        "slate-blue": "#7857ff",
        "royal-blue": "#2e2be9",
        "cobalt-blue": "#1125d4",
        violetblue: "#4e21ca",
        "persian-blue": "#2421ca",
        paleblue: "#ebf1ff",
        "ligt-lavendar": "#c5c7ff",
        "dark-grey-blue": "#303b5a",
      },
    },
  },
  plugins: [],
};

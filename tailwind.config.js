/* eslint-disable @typescript-eslint/no-var-requires */
// tailwind.config.js
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantPink: "#FF009E",
        turquoise: "#00BFA6",
        cornYellow: "#FFD700",
        deepGreen: "#228B22",
        brightOrange: "#FF5733",
        deepPurple: "#8B008B",
        boneWhite: "#FFF8DC",
        Lowgary: "#939393",
        primary: {
          DEFAULT: "#FF009E",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoSerif: ["Roboto Serif", "serif"],
        FugazOne: ["Fugaz One", "sans-serif"],
        Ruthie: ["Ruthie", "cursive"],
      },
      spacing: {
        500: "590px",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};

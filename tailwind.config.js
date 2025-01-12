/* eslint-disable @typescript-eslint/no-var-requires */
// tailwind.config.js
// eslint-disable-next-line no-undef
import { nextui } from "@nextui-org/react";
import defaultTheme, { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = [
  // ...
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/**/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
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
      secondary: {
        DEFAULT: "#8B008B",
        foreground: "#FFFFFF",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      RobotoSerif: ["Roboto Serif", "serif"],
      FugazOne: ["Fugaz One", "sans-serif"],
      Ruthie: ["Ruthie", "cursive"],

      primary: ['"Cormorant Garamond"', ...fontFamily.serif],
      secondary: ['"Raleway"', ...defaultTheme.fontFamily.sans],
      body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    spacing: {
      500: "590px",
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];

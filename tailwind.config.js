/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#845ec2",
      secondary: "#b39cd0",
      tertiary: "#fbeaff",
      contrast: "#00c9a7",
      themeBlack: "#4b4453",
      themeGray: "#b0a8b9",
      ...colors,
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

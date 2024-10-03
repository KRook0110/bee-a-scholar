/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Questrial", "sans-serif"],
    },
    extend: {
      borderRadius: {
        DEFAULT: "8px",
        lg: "16px"
      },
      colors: {
        primary: {
          light: "#3089D6",
          DEFAULT: "#1C429A",
          dark: "#03081B",
        },
        secondary: {
          light: "#FFD690",
          DEFAULT: "#FFBD5A", 
          dark: "#EDA740",
        },
        lightBlue: {
          DEFAULT: "#63B8F6",
        },
        // background: {
        //     DEFAULT: "#f5f5f5",
        //     900 :
        // }
        background: colors.neutral,
        alert: colors.red,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iceBlue: "#91ACCF",
        gray: "#9D9D9C",
        darkGray: "#5E5E5E",
        headerBgColor: "#f1f5f9",
        textColorBold: "#343a40",
        textColor: "#5E5E5E",
        textPaleColor: "#9A9A9A",
        textMidColor: "#8A8A8A",
        backGroundColor: "#e9ecef",
      },
      boxShadow: {
        "3xl": "1px 1px 6px 0px #adb5bd",
      },
      fontSize: {
        textSmallSize: "10px",
      },
    },
  },
  plugins: [],
};

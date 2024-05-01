/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iceBlue: "#91ACCF",
        gray: "#9D9D9C",
        headerBgColor: "#f1f5f9",
        textColorBold: "#343a40",
        textColor: "#5E5E5E",
        textPcolor: "#7E7E7E",
        textPaleColor: "#9A9A9A",
        textMidColor: "#8A8A8A",
        backGroundColor: "#e9ecef",

        /* Dark Mode Colors */
        Dark_TextColor_1: "rgb(173, 165, 155)",
        Dark_TextColor_2: "#989082",
        Dark_ButtonColor: "#665314",
        Dark_TextHoverColor: "#D8B649",
        Dark_MainBG: "#1E2022",
        Dark_ContainerBG: "#1A1C1E",
        Dark_InputBG_1: "#121212",
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

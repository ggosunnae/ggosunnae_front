import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: "Pretendard",
      },
      height: {
        "custom-screen": "calc(100vh - 148px)",
      },
      zIndex: {
        "3": "3",
      },
      letterSpacing: {
        "25": "-2.5%",
      },
      colors: {
        primary: {
          darkBlue: "#2CB1F5",
          normalBlue: "#5DC9F7",
          lightBlue: "#B6E8FC",
          background: "#EFFAFE",
        },
        accent: {
          alert: "#FF5449",
          alert2: "#FF5449",
        },
        grayscale: {
          gray1: "#333333",
          gray2: "#777777",
          gray3: "#CCCCCC",
          gray4: "#EFEFEF",
          gray5: "#D9D9D9",
        },
        mono: {
          black: "#111111",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
        },
        mono: {
          black: "#1111111",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;

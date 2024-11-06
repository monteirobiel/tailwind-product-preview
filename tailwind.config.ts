import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        h1: "30rem",
        w1: "20rem",
      },
      colors: {
        bg: "hsl(30, 38%, 92%)",
        desc: "hsl(228, 12%, 48%)",
        price: "hsl(158, 36%, 37%)",
        hover: "#2b5e4b",
      },
      fontFamily: {
        font1: "Fraunces",
        font2: "Montserrat",
      },
      backgroundImage: {
        'product': "url('src/app/images/image-product-desktop.jpg')",
        
      }
    },
  },
  plugins: [],
};
export default config;

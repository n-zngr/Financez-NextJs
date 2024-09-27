import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          1: '#000408',
          2: '#04080C',
          3: '#080C10',
          4: '#101418',
          5: '#181C20',
        },
        gray: {
          1: '#283135',
          2: '#343F44',
          3: '#667277',
        },
        white: {
          1: '#F9FBFD',
        },
      },
    },
  },
  plugins: [],
};
export default config;
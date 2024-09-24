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
          100: '#020406',
          200: '#212325',
          300: '#404244',
        },
        gray: {
          100: '#5F6163',
          200: '#7E8082',
          300: '#9C9EA0',
        },
        white: {
          100: '#BBBDBF',
          200: '#F9FBFD',
          300: '#F9FBFD',
        },
      },
    },
  },
  plugins: [],
};
export default config;

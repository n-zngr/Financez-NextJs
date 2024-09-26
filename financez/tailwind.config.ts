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
          100: '#000408',
          200: '#04080C',
          300: '#080C10',
          400: '#101418',
          500: '#181C20',
        },
        gray: {
          100: '#283135',
          200: '#343F44',
          300: '#667277',
        },
        white: {
          100: '#F9FBFD',
        },
      },
    },
  },
  plugins: [],
};
export default config;

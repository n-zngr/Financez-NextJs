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
        termina: ['var(--font-termina)'],
        ambroise: ['var(--font-ambroise)'],
        ambroise_francois: ['var(--font-ambroise_francois)'],
        ambroise_firmin: ['var(--font-ambroise_firmin)'],
      },
      fontSize: {
        '7_5xl': '5rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          1: '#000204',
          2: '#080A0C',
          3: '#101214',
          4: '#181A1C',
          5: '#202224',
        },
        gray: {
          1: '#6E7072',
          2: '#76787A',
          3: '#7E8082',
          4: '#86888A',
          5: '#8E9092',
        },
        white: {
          1: '#DBDDDF',
          2: '#E3E5E7',
          3: '#EBEDEF',
          4: '#F3F5F7',
          5: '#FBFDFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
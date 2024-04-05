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
        anekTamil: ['var(--font-anek_tamil)'],
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)']
      },
      width: {
        '520': '520px',

      }
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1500px',
      // => @media (min-width: 1500px) { ... }
    }
  },
  plugins: [],
};
export default config;

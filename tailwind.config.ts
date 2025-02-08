import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'custom': '1080px', // Add your custom 1080px breakpoint
    },
    extend: {
      fontFamily:{
        poppins: "Poppins, sans-serif",
        hentaigana: "Noto Serif Hentaigana, sans-serif",
        triodion: "Triodion, sans-serif",
        ptmono: "PT Mono, sans-serif",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
} satisfies Config;

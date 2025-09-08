import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "var(--background)",
        middleground: "var(--middleground)",
        foreground: "var(--foreground)",
        // "custom-yellow": "#F9F5E3",
        // "custom-green": "#143109",
        // "custom-blue": "#1C1E2f",
        // "custom-light-brown": "#83745C",
        // "custom-dark-brown": "#3A2B23",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;

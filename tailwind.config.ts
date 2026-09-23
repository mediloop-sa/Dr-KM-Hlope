import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        paper: "#FFFFFF",
        ink: "#221E19",
        "ink-soft": "#5B5449",
        line: "#E7DFD0",
        gold: "#B8863E",
        "gold-deep": "#8F6526",
        "gold-wash": "#F3E7D2",
        plum: "#5B4160",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

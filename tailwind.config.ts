import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#ede9fe",
          300: "#c4b5fd",
          500: "#8b5cf6",
          700: "#6d28d9"
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)"
      },
      backgroundImage: {
        "luxury-gradient": "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(91,33,182,0.3), transparent 35%), linear-gradient(145deg, #0a0717 0%, #140c26 42%, #05040a 100%)"
      }
    }
  },
  plugins: []
};

export default config;

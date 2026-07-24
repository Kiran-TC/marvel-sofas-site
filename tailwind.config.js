/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f8f4",
          100: "#dceee4",
          300: "#88bea0",
          600: "#2c6f52",
          800: "#163d31",
          900: "#10261f",
          950: "#071510"
        },
        gold: {
          100: "#f6edcf",
          300: "#dbbf71",
          500: "#b99036",
          700: "#77591e"
        },
        ivory: "#faf7ee",
        stonewarm: "#d9d1c4",
        charcoal: "#111312"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 21, 16, 0.18)",
        gold: "0 18px 44px rgba(185, 144, 54, 0.22)"
      }
    }
  },
  plugins: [],
};

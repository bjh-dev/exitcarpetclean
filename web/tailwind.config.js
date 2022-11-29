/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      futura: ["futura-pt", "sans-serif"],
      "futura-bold": ["futura-pt-bold", "sans-serif"],
      "futura-condensed": ["futura-pt-condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/typography"],
};

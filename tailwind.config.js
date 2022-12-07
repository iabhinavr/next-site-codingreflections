/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          skyblue: "#4cc9f0",
          ultramarine: "#4361ee",
          pink: "#fd6dcf",
          violet: "#b267f8",
          yellow: "#f9cc16",
          dark: "#202429",
          light: "#fafafa",
          gray: "#cfcfcf",
        },
      },
    },
  },
  plugins: [],
}

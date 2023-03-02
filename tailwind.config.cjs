/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011D3F",
        secondary: "#449C88",
        tertiary: "#007991"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1600px',
        // => @media (min-width: 1600px) { ... }
        '3xl': '1920px'
        // => @media (min-width: 1920px) { ... }
      },
      fontFamily: {
        'fira-sans':['"FiraSans"'],
        'poppins':['"Poppins"']
      },
      colors: {
        primary: "#255288",
        secondary: "#449C88",
        tertiary: "#007991",
        error: '#CE1717',
        'sugar-blood': '#F78C9F'
      },
      spacing: {
        '17' : '4.375rem',
        '15' : '3.75rem',
        '22' : '5.625rem'
      }
    },
  },
  plugins: [],
}
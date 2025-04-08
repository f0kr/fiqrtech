/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',
          secondary: '#F59E0B',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // custom font example
        },
      },
    },
    plugins: [],
  }
  
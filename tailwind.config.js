/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5851D8',
        accent: '#00D4FF',
      },
      fontFamily: {
        federant: ['"Federant"', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

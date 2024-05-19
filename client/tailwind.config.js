/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#0C6967',
        coustemOrange: '#D95103',

      },
    },
  },
  variants: {},
  plugins: [],
}



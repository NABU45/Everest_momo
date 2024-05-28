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
        coustemRed: '#C71720',
        customiconbg:' #A6AEBB',
        customBlack:'#101828',
        customaragraph: '#6B788E'


      },
      fontFamily: {
        'chela': ['"Chela One"', 'cursive'],
          'proxima': ['Proxima Nova', 'sans-serif'], 

          //styleName: Heading Style/H3;


      },
    },
  },
  variants: {},
  plugins: [],
}



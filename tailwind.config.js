/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2349px',
      },
      colors: {
        primary: '#871cf8',
        'background-100': '#1A1A1A',
        'background-200': '#292929',
        'background-300': '#404040',
        'background-400': '#5b5b5b',

        cardOutBorder: '#fdd835',
        cardInnerBorder: '#a38606',

        electric: '#fefdca',
        grass: '#A7CA53',

        /*  */
      },
      fontFamily: {
        pokemon: ['"Pokemon Solid"', 'sans-serif'],
      },
      letterSpacing: {
        wide: '2px',
      },
      dropShadow: {
        unfocused: '10px 0 0 rgba(0,0,0, 0.6)',
        focused: '0 10px 0 rgba(0,0,0, 0.9)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};

const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        rotation: {
          from: { transform: 'rotate(0,1,0, 0deg)' },
          to: { transform: 'rotate3d(0,1,0, 3.142rad)' },
        },
        reverseRotation: {
          from: { transform: 'rotate3d(0,1,0, 3.142rad)' },
          to: { transform: 'rotate(0,1,0, 0deg)' },
        },
        perspectiveZ: {
          '100%': { transform: 'perspective(30px) rotateX(1deg)' },
        },
        reversePerspectiveZ: {
          '100%': { transform: 'perspective(150px) rotateX(-1deg)' },
        },
      },
      animation: {
        rotation: 'rotation ease-in 0.90s',
        reverseRotation: 'reverseRotation ease-out 0.90s',
        perspectiveZ: 'perspectiveZ 0.2s ease-out forwards',
        reversePerspectiveZ: 'reversePerspectiveZ 0.2s ease-out forwards',
      },
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
      },
      fontFamily: {
        pokemon: ['"Pokemon Solid"', 'sans-serif'],
      },
      letterSpacing: {
        wide: '2px',
      },
      dropShadow: {
        unfocused: '15px 0 0 rgba(0,0,0, 0.6)',
        focused: '0 15px 0 rgba(0,0,0, 0.9)',
      },
      textShadow: {
        '2xl': '0px 8px 10px rgb(0 0 0 / 90%);',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};

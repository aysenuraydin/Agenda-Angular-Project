/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        deneme: {
          111: 'pink'
        }
      },
      spacing: {
        '15': '5rem',
        '26': '6.5rem',
        'calc': '500px'
      },
      fontFamily: {
        'share-Tech': ['"Share Tech Mono"', 'Georgia'],
        'brittney-Signature': ['"Brittney Signature"', 'Georgia']
      },
      boxShadow: {
        'after': '0px -8px 15px rgba(0, 0, 0, 0.26)',
        'before': '0px 25px 15px rgba(0, 0, 0, 0.56)',
        'after-sm': '0px -12px 8px rgba(0, 0, 0, 0.26)',
        'before-sm': '0px 12px 8px rgba(0, 0, 0, 0.26)',
        'right':'45px 0 65px rgba(60, 60, 60, 0.8)',
        'right-sm':'30px 0 45px rgba(60, 60, 60, 0.8)',
        'left':'-85px 0 65px rgba(60, 60, 60, 0.4)',
        'left-sm':'-30px 0 45px rgba(60, 60, 60, 0.4)',
        'tab-left':'-1px 2px 2px 3px rgba(89, 89, 89, 0.376)',
        'tab-left-sm':'-1px 1px 1px 2px rgba(89, 89, 89, 0.376)',
        'tab-right':'2px 2px 2px 3px rgba(89, 89, 89, 0.376)',
        'tab-right-sm':'2px 1px 1px 2px rgba(89, 89, 89, 0.376)'
      },
      borderRadius: {
        'book': '100% / 60%',
        'tab-left': '1rem 0 0 1rem',
        'tab-left-sm': '0.5rem 0 0 0.5rem',
        'tab-right': '0 1rem 1rem 0',
        'tab-right-sm': '0 0.5rem 0.5rem 0'
      },
      perspective: {
        '1300': '1000px'
      },
      rotate:{
        'rotateY':'rotateY( 180deg )'
      }
    }
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const perspectives = theme('perspective');
      const utilities = Object.keys(perspectives).reduce((acc, key) => {
        acc[`.perspective-${key}`] = { perspective: perspectives[key] };
        return acc;
      }, {});

      const newUtilities = {
        '.backface-hidden': { 'backface-visibility': 'hidden' },
        '.backface-visible': { 'backface-visibility': 'visible' },
        '.preserve-3d': { 'transform-style': 'preserve-3d' },
        '.clip-path-ellipse': { 'clip-path': 'ellipse(500px 50%)' },
        '.transform-rotateY-180': { 'transform': 'rotateY(180deg)' },
        '.transform-rotateY--180': { 'transform': 'rotateY(-180deg)' },
        '.transition-page': { 'transition': 'transform 1.5s ease-in-out' },
        '.origin-left-center': { 'transform-origin': 'left center' }
      };
      addUtilities({ ...utilities, ...newUtilities });
    })
  ]
};

/** @type {import('tailwindcss').Config} */

const darkerGray = '#1b1b1b';
const darkGray = '#333';
const gray = '#888';
const offWhite = '#faf9f6';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'darker-gray': darkerGray,
        'dark-gray': darkGray,
        gray: gray,
        'off-white': offWhite,
        white: '#fff'
      },
      fontFamily: {
        sans: ['Inter']
      },
      animation: {
        cursor: 'cursor 1s steps(2) infinite',
        pulse: 'pulse 1s infinite'
      },
      keyframes: {
        cursor: {
          '0%': {
            opacity: 0
          }
        },
        pulse: {
          '0%, 100%': {
            'background-color': darkerGray
          },
          '50%': {
            'background-color': darkGray
          }
        }
      }
    }
  },
  plugins: []
};

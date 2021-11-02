const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    colors: {
      ...colors,
      myBlue: {
        DEFAULT: '#000011',
        primary: '#3C66A0',
        light: '#79CCFF'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      cursor: ['hover'],
      borderColor: ['hover'],
      backgroundColor: ['hover'],
    }
  }

}

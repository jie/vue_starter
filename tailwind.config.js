const colors = require('tailwindcss/colors')
console.log('colors:', colors)
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    colors: {
      ...colors,
      myBlue: {
        DEFAULT: '#000011'
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

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '200': '200px',
        '70': '70vh'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        title: ['Lato', 'sans-serif']
      },
      colors: {
        'green-light': '#52AE32',
        'green-dark': '#01AA4F',
        'grey-text': '#ABABAB'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
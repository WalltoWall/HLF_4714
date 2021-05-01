const tailwindCapsize = require('@asyarb/tailwind-capsize')
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio')
const tailwindForms = require('@tailwindcss/forms')

/**
 * Sizes used for media queries and max-widths.
 */
const SCREENS = {
  sm: '30rem',
  md: '48rem',
  lg: '64rem',
  xl: '120rem',
}

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    screens: SCREENS,

    colors: {
      debug: '#f0f',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },

    fontFamily: {
      sans: 'system-ui',
    },
    fontSize: {
      16: 16,
    },
    lineHeight: {
      1: 1,
      '1_1': 1.1,
      '1_25': 1.25,
      '1_3': 1.3,
      '1_35': 1.35,
      '1_4': 1.4,
    },
    // Font metrics for @asyarb/tailwindcss-capsize to enable Capsize classnames.
    // @see https://github.com/asyarb/tailwind-capsize
    // @see https://seek-oss.github.io/capsize/
    capsize: {
      fontFamilies: {
        sans: {
          capHeight: 710,
          ascent: 940,
          descent: -234,
          lineGap: 0,
          unitsPerEm: 1000,
        },
      },
    },

    extend: {},
  },
  variants: {},
  plugins: [tailwindCapsize, tailwindAspectRatio, tailwindForms],
}

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
  xl: '90rem',
}

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  darkMode: false,
  theme: {
    screens: SCREENS,

    colors: {
      debug: '#f0f',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',

      gray: {
        17: '#2b2b2b',
        25: '#3f3f3f',
        38: '#616161',
        51: '#808285',
        87: '#dedede',
      },

      green: {
        24: '#087050',
        92: '#e8f5e2',
      },
    },

    fontFamily: {
      sans: '"proxima-nova", system-ui',
      serif: '"PT Serif", serif',
    },
    fontSize: {
      11: 11,
      12: 12,
      13: 13,
      16: 16,
      20: 20,
      24: 24,
      32: 32,
      40: 40,
    },
    lineHeight: {
      1: 1,
      '1_1': 1.1,
      '1_25': 1.25,
      '1_3': 1.3,
      '1_35': 1.35,
      '1_4': 1.4,
      '1_45': 1.45,
      '1_55': 1.55,
      '1_6': 1.6,
    },
    // Font metrics for @asyarb/tailwindcss-capsize to enable Capsize classnames.
    // @see https://github.com/asyarb/tailwind-capsize
    // @see https://seek-oss.github.io/capsize/
    capsize: {
      fontFamilies: {
        sans: {
          capHeight: 667,
          ascent: 917,
          descent: -285,
          lineGap: 0,
          unitsPerEm: 1000,
        },
        serif: {
          capHeight: 700,
          ascent: 1039,
          descent: -286,
          lineGap: 0,
          unitsPerEm: 1000,
        },
      },
    },

    extend: {
      maxWidth: {
        content: '56rem',
      },
      letterSpacing: {
        caps: '.14em',
      },
    },
  },
  variants: {},
  plugins: [tailwindCapsize, tailwindAspectRatio, tailwindForms],
}

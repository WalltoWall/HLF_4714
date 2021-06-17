const twColors = require('tailwindcss/colors')
const projectConfig = require('../tailwind.config')

module.exports = {
  ...projectConfig,
  purge: ['../**/*.{ts,tsx}'],
  mode: 'jit',
  darkMode: false,
  theme: {
    ...projectConfig.theme,
    colors: {
      ...projectConfig.theme.colors,

      docsGray: twColors.coolGray,
      docsCyan: twColors.cyan,
    },

    fontFamily: {
      ...projectConfig.theme.fontFamily,
      system: '"Inter var", system-ui',
    },
  },

  plugins: [...projectConfig.plugins, require('@tailwindcss/typography')],
}

const path = require('path')

module.exports = {
  typescript: {
    check: false,
  },
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links/register',
    'storybook-css-modules-preset',
    path.resolve('./.storybook/addon-gatsby.js'),
  ],
}

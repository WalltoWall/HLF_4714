const path = require('path')
require('dotenv').config()

const siteMetadata = {
  title: 'Hawai‘i Leadership Forum',
  titleShort: 'HLF',
  description:
    'The Hawai‘i Leadership Forum serves as a catalyst and convener for initiatives that improve leadership throughout the state.',
  siteUrl: 'https://www.hawaiileadershipforum.org/',
}

module.exports = {
  siteMetadata,
  plugins: [
    process.env.ANALYZE === 'true' &&
      'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',

    process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
        exclude: ['/preview/**', '/admin/**', '/docs/**'],
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.titleShort,
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src/assets/manifest-icon.svg'),
      },
    },

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        schemas: require('./src/schemas'),
        linkResolver: require('./src/linkResolver').linkResolver,
        fetchLinks: ['page.parent'],
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-netlify',
  ].filter(Boolean),
}

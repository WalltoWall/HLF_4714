const path = require('path')
require('dotenv').config()

const siteMetadata = {
  title: 'Hawai‘i Leadership Forum',
  titleShort: 'HLF',
  description: 'SITE_DESCRIPTION',
  siteUrl: 'https://www.hawaiileadershipforum.org/',
}

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',

    process.env.GOOGLE_TAGMANAGER_ID && {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
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
        prismicToolbar: false,
      },
    },
    'gatsby-plugin-netlify',
  ].filter(Boolean),
}

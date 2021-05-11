const path = require('path')

require('dotenv').config()

const siteMetadata = {
  title: 'SITE_TITLE',
  titleShort: 'SITE_TITLE_SHORT',
  description: 'SITE_DESCRIPTION',
  siteUrl: 'https://example.com',
}

module.exports = {
  flags: {
    FAST_DEV: false,
    DEV_SSR: false,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
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
        icon: path.resolve(__dirname, 'src/assets/manifest-icon.png'),
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
        prismicToolbar: 'legacy',
      },
    },
    'gatsby-plugin-netlify',
  ].filter(Boolean),
}

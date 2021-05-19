require('dotenv').config()

const siteMetadata = {
  title: 'Hawaii Leadership Forum',
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

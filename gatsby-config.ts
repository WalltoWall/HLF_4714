import path from 'node:path'
import 'dotenv/config'
import { GatsbyConfig, PluginRef } from 'gatsby'

const siteMetadata = {
	title: 'Hawai‘i Leadership Forum',
	titleShort: 'HLF',
	description:
		'The Hawai‘i Leadership Forum serves as a catalyst and convener for initiatives that improve leadership throughout the state.',
	siteUrl: 'https://www.hawaiileadershipforum.org/',
}

// Defines the way that document URLs are created in Prismic.
const routes = [
	{
		type: 'page',
		path: '/:uid',
	},
]

const config: GatsbyConfig = {
	siteMetadata,
	graphqlTypegen: {
		typesOutputPath: './src/types.generated.ts',
		generateOnBuild: true,
		documentSearchPaths: ['./src/**/*.ts', './src/**/*.tsx'],
	},
	plugins: [
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
				customTypesApiToken:
					process.env.GATSBY_PRISMIC_CUSTOM_TYPES_TOKEN,
				fetchLinks: ['page.parent'],
				routes,
			},
		},
		{
			resolve: 'gatsby-plugin-prismic-previews',
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
				routes,
			},
		},
		'gatsby-plugin-netlify',
	].filter(Boolean) as PluginRef[],
}

export default config

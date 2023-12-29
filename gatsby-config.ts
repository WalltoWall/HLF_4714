import path from 'node:path'
import 'dotenv/config'
import { type GatsbyConfig, type PluginRef } from 'gatsby'
import { linkResolver } from './src/linkResolver'

const siteMetadata = {
	title: 'Hawai‘i Leadership Forum',
	titleShort: 'HLF',
	description:
		'The Hawai‘i Leadership Forum serves as a catalyst and convener for initiatives that improve leadership throughout the state.',
	siteUrl: 'https://www.hawaiileadershipforum.org/',
}

const config: GatsbyConfig = {
	siteMetadata,
	graphqlTypegen: {
		typesOutputPath: './types.generated.ts',
		generateOnBuild: false,
		documentSearchPaths: [
			'./src/**/*.ts',
			'./src/**/*.tsx',
			'./gatsby-node.ts',
		],
	},
	plugins: [
		'gatsby-plugin-sitemap',
		'gatsby-plugin-image',

		process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
				pluginConfig: {
					exclude: ['/preview/**', '/admin/**', '/docs/**'],
				},
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
				linkResolver,
			},
		},
		{
			resolve: 'gatsby-plugin-prismic-previews',
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
				linkResolver,
			},
		},
		'gatsby-plugin-netlify',
	].filter(Boolean) as PluginRef[],
}

export default config

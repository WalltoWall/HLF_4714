/**
 * This module is imported in the following files:
 *
 *   - /gatsby-browser.js
 *   - /gatsby-ssr.js
 *   - /.storybook/preview.js
 *
 * All exports are re-exported in the gatsby-* files allowing access to the
 * Gatsby Browser and SSR APIs.
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 * @see https://www.gatsbyjs.org/docs/ssr-apis/
 */

import './index.css'
import '@fontsource/pt-serif/400.css'

import * as React from 'react'
import { type GatsbyBrowser } from 'gatsby'
import {
	PrismicPreviewProvider,
	type RepositoryConfig,
} from 'gatsby-plugin-prismic-previews'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageContainer } from './components/PageContainer'

const repositoryConfigs: RepositoryConfig[] = [
	{
		repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
		componentResolver: {
			page: React.lazy(() => import('./pages/{PrismicPage.url}')),
		},
	},
]

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
	element,
}) => (
	<PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
		<PageContainer>
			<Header />
			{element}
			<Footer />
		</PageContainer>
	</PrismicPreviewProvider>
)

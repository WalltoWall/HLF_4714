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
import { GatsbyBrowser } from 'gatsby'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { LazyMotion } from 'framer-motion'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageContainer } from './components/PageContainer'

async function loadFeatures() {
	const mod = await import('./lib/framerFeatures')

	return mod.default
}

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
	element,
}) => (
	<LazyMotion features={loadFeatures} strict>
		<PrismicPreviewProvider
			repositoryConfigs={[
				{
					repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
					componentResolver: {
						page: React.lazy(() => import('./templates/page')),
					},
				},
			]}
		>
			<PageContainer>
				<Header />
				{element}
				<Footer />
			</PageContainer>
		</PrismicPreviewProvider>
	</LazyMotion>
)

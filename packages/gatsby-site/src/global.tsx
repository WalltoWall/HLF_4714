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

import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { SkipNavLink } from '@reach/skip-nav'
import { LazyMotion } from 'framer-motion'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PageContainer } from './components/PageContainer'
import { focusRing } from './lib/utilStyles'

import './index.css'
import '@reach/skip-nav/styles.css'
import '@fontsource/pt-serif/400.css'

// Styling for the preview modals.
import 'gatsby-plugin-prismic-previews/dist/styles.css'

async function loadFeatures() {
  const mod = await import('./lib/framerFeatures')

  return mod.default
}

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
  element,
}) => (
  <LazyMotion features={loadFeatures} strict>
    <PrismicPreviewProvider>
      <PageContainer>
        <SkipNavLink className={focusRing}>
          <p>Skip to content</p>
        </SkipNavLink>

        <Header />
        {element}
        <Footer />
      </PageContainer>
    </PrismicPreviewProvider>
  </LazyMotion>
)

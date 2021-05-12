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
import { PreviewStoreProvider } from 'gatsby-source-prismic'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './index.css'
import '@reach/skip-nav/styles.css'
import '@fontsource/pt-serif/400.css'

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
  element,
}) => (
  <PreviewStoreProvider>
    <div className="flex flex-col min-h-screen max-w-[1240px] mx-auto border-l-8 border-r-8">
      <Header />
      {element}
      <Footer />
    </div>
  </PreviewStoreProvider>
)

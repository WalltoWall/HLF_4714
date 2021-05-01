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

import './index.css'
import PageBodyHeader from './slices/PageBodyHeader'
import PageBodyFooter from './slices/PageBodyFooter'

export const wrapRootElement: NonNullable<GatsbyBrowser['wrapRootElement']> = ({
  element,
}) => (
  <PreviewStoreProvider>
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <PageBodyHeader />
      {element}
      <PageBodyFooter />
    </div>
  </PreviewStoreProvider>
)

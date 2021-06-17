import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'Build with slices',
  description: html`An introduction to constructing pages with Slices, the
  reusable building blocks of Prismic.`,
  path: [
    { label: 'General', href: '/general' },
    { label: 'Build with slices', href: '/general/build-with-slices' },
  ],
  content: () => (
    <>
      <h2>Overview</h2>
      <p>
        Slices are configurable blocks of content with a predefined look and
        feel. All pages are made using these building blocks to ensure each page
        stays within with the overall design language of the site.
      </p>
      <p>
        Content editors do not need to know how to code to create well-designed
        pages. Instead, Slices contain a preset collection of fields that allow
        the page author to customize the content and media displayed.
      </p>
      <p>A Page can contain any number of Slices in any order.</p>

      <h2>Example of Slices in a Page</h2>
      <p>
        A hypothetical product page could be made with the following slices:
      </p>
      <ul>
        <li>
          <strong>Hero Image</strong> - Quick visual introduction to the
          product.
        </li>
        <li>
          <strong>Text</strong> - Text content describing the product.
        </li>
        <li>
          <strong>Images</strong> - Collection of product images.
        </li>
        <li>
          <strong>Text</strong> - Additional product information.
        </li>
        <li>
          <strong>Call to Action</strong> - - Link to sign up for the product or
          to get more information.
        </li>
      </ul>
      <p>
        Additional slices could be inserted anywhere within that list. The
        surrounding slices will move around as necessary.
      </p>
    </>
  ),
}

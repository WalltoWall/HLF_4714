import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'User Interface',
  description: html`How to use the Prismic interface to manage content.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    { label: 'User Interface', href: '/prismic/user-interface' },
  ],
  content: () => (
    <>
      <h2>Official Guides</h2>
      <p>
        The following documents from Prismic explain how to use the Prismic user
        interface.
      </p>

      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/document-list-browse-and-find-your-content/discover-the-content-screen"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to find documents
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/document-list-browse-and-find-your-content/filter-and-search-your-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to search and filter documents
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/edit-and-format-a-rich-text-field"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Rich Text fields
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/links"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Link fields
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/add-and-edit-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Image fields
          </a>
        </li>
      </ul>
    </>
  ),
}

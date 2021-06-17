import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Document Management',
  description: html`How to upload, edit, and delete media within Prismic.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    { label: 'Document Management', href: '/prismic/document-management' },
  ],
  content: () => (
    <>
      <h2>What are documents?</h2>
      <p>
        Documents represent pages, exhibitions, events, and more on the website.
        All website content belongs to a document.
      </p>

      <h2>Official Guides</h2>
      <p>
        The following guides from Prismic explain how to manage documents with
        in the CMS.
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/create-a-new-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to create a new document in Prismic
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/preview-publish-and-unpublish-documents/publish-your-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to publish content in Prismic
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/preview-publish-and-unpublish-documents/unpublish-and-archive-a-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to remove a document from your repository
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/archive-or-delete-a-document-from-your-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to archive or delete a document from your Prismic repository
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/history-revisions/versioning-and-restoring-a-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prismic keeps track of every change, allowing you to restore a
            previous version of a document
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/history-revisions/discover-what-changed-in-your-documents"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use the Diff view to quickly view the changes that have been made to
            a document
          </a>
        </li>
      </ul>
    </>
  ),
}

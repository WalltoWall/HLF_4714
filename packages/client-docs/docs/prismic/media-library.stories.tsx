import * as React from 'react'
import html from 'ts-dedent'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Media Library',
  description: html`How to upload, edit, and delete media within Prismic.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    { label: 'Media Library', href: '/prismic/media-library' },
  ],
  content: () => (
    <>
      <h2>Supported Files</h2>
      <p>
        Media such as images and PDF files can be uploaded to Prismic to serve
        on the website. If the file is very large, such as video files, we
        recommend uploading to a specialized service and integrating it into the
        site.
      </p>

      <blockquote>
        <h2>🚧 Important 🚧</h2>
        <p>
          To maintain an accessible website, be sure to provide alt text to all
          images uploaded to Prismic. See the{' '}
          <Link to="/general/accessibility-and-ada-compliance">
            ADA Compliance document
          </Link>{' '}
          for more information.
        </p>
      </blockquote>

      <h3>File size limits</h3>
      <p>
        Prismic has generous limits for file sizes. Most files should be okay to
        upload.
      </p>
      <ul>
        <li>
          <strong>Images</strong>: 10 MB
        </li>
        <li>
          <strong>PDFs</strong>: 100 MB
        </li>
        <li>
          <strong>Audio</strong>: 100 MB
        </li>
        <li>
          <strong>Videos</strong>: 100 MB (recommended to host on another
          service, such as YouTube or Vimeo)
        </li>
        <li>
          <strong>Any other type</strong>: 100 MB
        </li>
      </ul>
      <p>
        <Link to="/general/images">Learn more about image sizes</Link>
      </p>

      <h2>Official Guides</h2>
      <p>
        The following guides from Prismic explain how to use the Media Library
        to manage media:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/add-and-edit-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to add and edit images
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/768851-media-supported"
            target="_blank"
            rel="noopener noreferrer"
          >
            Media supported on Prismic
          </a>
        </li>
      </ul>
    </>
  ),
}

import * as React from 'react'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'Page',
  description:
    'The Page custom type represents a page on the site. Pages are managed in Prismic using two tabs: Main and Body.',
  path: [
    { label: 'Document Types', href: '/types' },
    { label: 'Page', href: '/types/page' },
  ],
  content: () => (
    <>
      <ul>
        <li>
          <strong>Main</strong> Information about the page such as its title and
          URL.
        </li>
        <li>
          <strong>Body</strong> Page content such as images and text.
        </li>
      </ul>

      <p>
        All pages within the website start with the main header and end with the
        main footer. All content on the page is designed to be responsive to
        work on both mobile and desktop devices.
      </p>

      <table>
        <thead>
          <tr>
            <th>Prismic Field</th>
            <th>Description</th>
            <th>Required</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Title</strong> <small>Rich Text</small>
            </td>
            <td>None</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>UID</strong> <small>UID</small>
            </td>
            <td>Unique identifier</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Meta Title</strong> <small>Plain Text</small>
            </td>
            <td>Override the publicly viewable page title</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Meta Description</strong> <small>Plain Text</small>
            </td>
            <td>One sentence description of the page's content</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Parent</strong> <small>Link</small>
            </td>
            <td>Parent of the page</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Redirect To</strong> <small>Link</small>
            </td>
            <td>Redirect this page to another page or external URL</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Redirect Is Permanent</strong> <small>Link</small>
            </td>
            <td>Make the redirect permanent (this cannot be undone!)</td>
            <td>Optional</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

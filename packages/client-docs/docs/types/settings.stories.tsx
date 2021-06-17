import * as React from 'react'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Settings',
  description:
    'The Settings custom type represents general settings for the site.',
  path: [
    { label: 'Document Types', href: '/types' },
    { label: 'Settings', href: '/types/settings' },
  ],
  content: () => (
    <>
      <p>
        <strong>Note</strong>: Only one Settings document can be created. The
        master document contains all content.
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
            <td>Do not edit</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Site Name</strong> <small>Rich Text</small>
            </td>
            <td>Name of the site</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Site Description</strong> <small>Rich Text</small>
            </td>
            <td>Description of the site provided to search engines</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Site Copyright</strong> <small>Rich Text</small>
            </td>
            <td>Copyright text at the bottom of the site</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Redirects</h4>
      <p>
        Visitors can be redirected from one URL to another by adding it to this
        list.
      </p>
      <ul>
        <li>
          <strong>Setting is Permanent to Yes</strong>: Permanent redirects that
          should only be created if you are 100% sure it will not need to be
          undone.
        </li>
        <li>
          <strong>Setting is Permanent to No</strong>: Temporary redirects that
          can be undone.
        </li>
      </ul>
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
              <strong>Redirects</strong> <small>List</small>
            </td>
            <td>List of redirects</td>
            <td>
              <strong>Optional</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

import * as React from 'react'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'Navigation',
  description:
    'The Navigation custom type represents groups of pages or links used to navigate the site.',
  path: [
    { label: 'Document Types', href: '/types' },
    { label: 'Navigation', href: '/types/navigation' },
  ],
  content: () => (
    <>
      <p>
        The Hawaii Leadership Forum website uses one main navigation document:
      </p>
      <ul>
        <li>
          <strong>Primary</strong>: Used as the main navigation displayed in the{' '}
          <Link to="/slices/page-intro">Page Intro</Link> slice and footer.
        </li>
      </ul>

      <p>
        If future pages to the site are added, additional navigation menus can
        be created to accomodate additional{' '}
        <Link to="/slices/page-intro">Page Intro</Link> slices.
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
            <td>Title of the navigation</td>
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
        </tbody>
      </table>

      <h3>Nav Items</h3>
      <p>
        A Navigation document also contains a <strong>Nav Item</strong> list
        field to represent a link in the navigation list.
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
              <strong>Label</strong> <small>Plain Text</small>
            </td>
            <td>Name of the link</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>

          <tr>
            <td>
              <strong>Link</strong> <small>Link</small>
            </td>
            <td>
              <small>None</small>
            </td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

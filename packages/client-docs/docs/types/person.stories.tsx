import * as React from 'react'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Person',
  description:
    'The Person custom type represents an Hawaii Leadership Forum team team member.',
  path: [
    { label: 'Document Types', href: '/types' },
    { label: 'Person', href: '/types/person' },
  ],
  content: () => (
    <>
      <p>
        Documents of the <strong>Person</strong> type will be used primarily for
        the <Link to="/slices/team">Team</Link> slice.
      </p>

      <table>
        <thead>
          <th>Prismic Field</th>
          <th>Description</th>
          <th>Required</th>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>First Name</strong> <small>Plain Text</small>
            </td>
            <td>Self descriptive</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Last Name</strong> <small>Plain Text</small>
            </td>
            <td>Self descriptive</td>
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
              <strong>Title</strong> <small>Plain Text</small>
            </td>
            <td>
              The position that this person holds. Shown if Position Type is{' '}
              <strong>Staff Team</strong>
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Position Type</strong> <small>Dropdown</small>
            </td>
            <td>
              One of <strong>Staff Team</strong> or <strong>Director</strong>
            </td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Bio</strong> <small>Rich Text</small>
            </td>
            <td>
              Biography for the Person. Shown in a popup if Position Type is{' '}
              <strong>Director</strong>
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Bio Link</strong> <small>Link</small>
            </td>
            <td>
              Link to an external biography page. Used if Position Type is{' '}
              <strong>Staff Team</strong>
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Headshot</strong> <small>Image</small>
            </td>
            <td>
              Image focused on the face of the Person. Shown if Position Type is{' '}
              <strong>Director</strong>
            </td>
            <td>Optional</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

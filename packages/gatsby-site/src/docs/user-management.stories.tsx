import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'User Management',
  description: html`Adding, removing, and editing permissions of users in the
  CMS.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    { label: 'User Management', href: '/prismic/user-management' },
  ],
  content: () => (
    <>
      <h2>Plan Details</h2>
      <p>
        Prismic bases its pricing on number of users. As of April 2019, this
        site is on Prismic's <strong>Starter plan</strong> which allows three
        users to access the CMS.
      </p>
      <p>
        Wall-to-Wall is one of those users, allowing two additional users to be
        added.
      </p>
      <p>
        We recommend upgrading the plan or creating a generic login that can be
        used by multiple people if the number of users is a concern.
      </p>

      <table>
        <thead>
          <th>Plan Name</th>
          <th># of users</th>
        </thead>

        <tbody>
          <tr>
            <td>
              <strong>Starter</strong>
            </td>
            <td>3 users</td>
          </tr>

          <tr>
            <td>
              <strong>Small</strong>
            </td>
            <td>7 users</td>
          </tr>

          <tr>
            <td>
              <strong>Medium</strong>
            </td>
            <td>25 users</td>
          </tr>

          <tr>
            <td>
              <strong>Platinum</strong>
            </td>
            <td>Unlimited users</td>
          </tr>
        </tbody>
      </table>
      <p>
        <a
          href="https://prismic.io/pricing"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          Current pricing information for Prismic
        </a>
      </p>

      <h2>Access Levels</h2>
      <p>
        With the Starter and Small plan, all users are given the Administrator
        Role. Administrators are the highest level of access and have the
        ability to manage custom types, collections, users, OAuth
        authorizations, etc.
      </p>
      <p>
        As the highest level, Administrators have access to all the technical
        aspects of the CMS and its configuration so care has to be taken to not
        change certain settings or lines of code.
      </p>
      <p>In general, stick to the Content and Media Library tabs in Prismic.</p>

      <h2>Adding, Editing, and Removing Users</h2>
      <p>
        The following article from Prismic describes how to add a user. Editing
        and removing users is performed using the same interface as adding
        users.
      </p>
      <p>
        <a
          href="https://user-guides.prismic.io/account-profile-and-user-management/inviting-new-users-to-a-repository"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          How to send an invite to a user and manage invitations
        </a>
        .
      </p>
    </>
  ),
}

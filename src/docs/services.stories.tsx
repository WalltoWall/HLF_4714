import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../client_docs/types'

export let meta: StoryMetadata = {
  title: 'Services',
  description: html`All services used to run and maintain the site.`,
  path: [
    { label: 'General', href: '/general' },
    { label: 'Services', href: '/general/services' },
  ],
  content: () => (
    <>
      <h2>Overview</h2>
      <p>
        The site uses several services to host, store, and track website content
        and visitors. Some require a monthly or annual service fee.
      </p>
      <h2>Services</h2>

      <h3>General</h3>
      <ul>
        <li>
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Netlify
          </a>{' '}
          : Static site hosting platform used to serve and build the site.
        </li>
        <li>
          <a
            href="https://prismic.io"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Prismic
          </a>{' '}
          : Content management system used to edit content on the site.
        </li>
      </ul>

      <h3>User Interface</h3>
      <ul>
        <li>
          <a
            href="https://www.netlify.com/products/forms/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Netlify Forms
          </a>{' '}
          : Static site hosting platform used to accept form submissions.
        </li>
      </ul>

      <h3>Analytics</h3>
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/tag-manager/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Google Tag Manager
          </a>{' '}
          : Website tag manager used to load Google Analytics and any other
          tracking services. (Free)
        </li>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Google Analytics
          </a>{' '}
          : Website analytics platform used to understand website visitors.
          (Free)
        </li>
      </ul>
    </>
  ),
}

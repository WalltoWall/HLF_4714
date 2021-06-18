import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'What is Prismic?',
  description: html`Prismic is a modern Content Management System (CMS).`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    { label: 'What is Prismic?', href: '/prismic/what-is-prismic' },
  ],
  content: () => (
    <>
      <h2>Quick intro</h2>
      <p>
        All content on the site is stored within{' '}
        <a
          href="https://prismic.io"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Prismic
        </a>
        . When content is updated in Prismic, the website is also updated to
        reflect the changes.
      </p>

      <h3>Hosted</h3>
      <p>
        Prismic is a hosted CMS. A hosted CMS means Prismic manages the servers
        used to run the CMS. Traditional CMSs require the CMS to be hosted on
        your own server which involves ensuring the server is properly
        maintained, secured, and made fault-tolerant.
      </p>
      <p>
        Using Prismic means not needing to worry about running a special server.
      </p>

      <h3>Headless</h3>
      <p>
        Prismic is a headless CMS. Headless CMSs differ from traditional CMSs in
        that they manage content separately from the public-facing website. In
        the case of this website, the public-facing front-end is hosted on
        Netlify.
      </p>
      <p>
        The separation of CMS and front-end allows the website to be very
        flexible, modern, and fast.
      </p>
      <p>
        <a
          href="https://prismic.io"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          Learn more on Prismic's website
        </a>
        .
      </p>
    </>
  ),
}

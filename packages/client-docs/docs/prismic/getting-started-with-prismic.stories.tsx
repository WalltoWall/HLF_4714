import * as React from 'react'
import html from 'ts-dedent'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Getting Started with Prismic',
  description: html`Overview of the site's content management system.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    {
      label: 'Getting Started with Prismic',
      href: '/prismic/getting-started-with-prismic',
    },
  ],
  content: () => (
    <>
      <h2>Quick intro</h2>
      <p>
        Prismic is your site's content management system (CMS) and is used to
        create and edit content. Content is managed primarily through two ways:{' '}
        <strong>Documents</strong> and <strong>Slices</strong>.
      </p>

      <h3>Documents</h3>
      <p>
        Documents contain the content for pages on the site. Documents can also
        be used as settings for other Documents. For example, a Document could
        contain information for a blog post or product.
      </p>
      <p>Several Document types have already been configured for your site.</p>
      <p>
        <Link to="/types">See all Document types here</Link>
      </p>

      <h3>Slices</h3>
      <p>
        Slices are used within most Documents to build content. They are
        configurable blocks of content with a predefined look and feel. Think of
        these as the content building blocks by which you'll assemble a page.
      </p>
      <p>
        This is what a blog post might look like in Prismic. `Name` and
        `Summary` are text fields while `Content` is made with Slices.
      </p>
      {/* prettier-ignore */}
      <pre dangerouslySetInnerHTML={{ __html: html`
				Blog Post
				_________
        
				Name:    My first blog post! 
				Summary: Learn how to use Prismic, a modern CMS.
				Content: [Text slice]
             [Image slice]
             [Text slice]
      `}}>
			</pre>
      <p>Each Document type has its own set of available Slices.</p>
      <p>
        <Link to="/admin/slices/">See all Slices here</Link>.
      </p>

      <h2>Logging in</h2>
      <p>
        Prismic is managed separately from the website and has its own login
        credentials.
      </p>
      <p>
        Depending on your service level, you will either have a single set of
        credentials shared among all of the site's editors, or each editor will
        have their own login. Wall-to-Wall uses their own separate account to
        access your Prismic content.
      </p>
      <p>
        You can always access Prismic by opening this documentation site and
        clicking the "Open Prismic" button at the top of the page.
      </p>
      <p>
        Alternatively, you can go to this URL directly:{' '}
        <a
          href="https://hawaiileadershipforum.org/admin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://hawaiileadershipforum.org/admin/
        </a>
        .
      </p>

      <h2>Editing pages and documents</h2>
      <p>
        Most of your interaction with the site will involve editing pages and
        documents within Prismic.
      </p>
      <p>
        <Link to="/prismic/editing-pages-and-documents/">
          Read about editing pages and documents here
        </Link>
        .
      </p>
    </>
  ),
}

import React from 'react'
import html from 'ts-dedent'
import { ContentLayout } from '../components/ContentLayout'
import { RichTextContainer } from '../components/RichTextContainer'

export let Home = () => {
  return (
    <ContentLayout
      title="CMS Documentation"
      description={html`
        Welcome to your website's documentation. Every part of the site is
        documented in detail to give you an understanding of how to manage and
        update its content.
      `}
    >
      <RichTextContainer>
        <h2>Sections</h2>
        <p>
          Use the sidebar to the left or the action button to the bottom-right
          to navigate through the different sections of the documentation.
        </p>

        <h3>Documentation</h3>
        <p>
          General information about website content, its underlying services,
          and management guides.
        </p>
        <ul>
          <li>
            <strong>General</strong>: Overview of managing the site and its
            content.
          </li>
          <li>
            <strong>Prismic</strong>: Guides on using the site's content
            management system,{' '}
            <a
              href="https://prismic.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prismic
            </a>
            .
          </li>
          <li>
            <strong>Slices</strong>: Examples of the blocks that can be used to
            customize the site.
          </li>
          <li>
            <strong>Workflows</strong>: Instructions on performing common
            content updates.
          </li>
        </ul>

        <h3>Pages</h3>
        <p>
          All pages on the site are managed in Prismic using Page documents. To
          learn more about the fields and Slices available to Pages, see the
          documentation in the <strong>Slices</strong> section.
        </p>

        <h3>Document Types</h3>
        <p>
          While Pages are the primary document type in Prismic to manage
          content, all other content is managed through a collection of other
          document types. This includes content such as the site's copyright
          text and navigation menus. Learn more about the different fields
          available to each document type in their respective documentation
          within the <strong>Document Types</strong> section.
        </p>

        <h3>Style Guide</h3>
        <p>
          Colors and typography used throughout the site are listed within the{' '}
          <strong>Style Guide</strong> section. Use these specifications when
          creating new website content.
        </p>
      </RichTextContainer>
    </ContentLayout>
  )
}

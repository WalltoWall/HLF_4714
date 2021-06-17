import * as React from 'react'
import html from 'ts-dedent'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Editing Pages and Documents',
  description: html`How to edit pages and other content.`,
  path: [
    { label: 'Prismic', href: '/prismic' },
    {
      label: 'Editing Pages and Documents',
      href: '/prismic/editing-pages-and-documents',
    },
  ],
  content: () => (
    <>
      <h2>Overview</h2>
      <p>
        Most of your interaction with the site will involve editing pages and
        documents within Prismic. Prismic allows creating drafts, previews, and
        scheduled publications. Prismic saves the history of every change in a
        document.
      </p>

      <h2>Pages vs. Documents</h2>
      <p>
        When we talk about Pages and Documents, we are talking about the same
        thing from Prismic's perspective. Pages are just a type of Document.
      </p>
      <p>
        Certain Document types, however, are treated differently than others.
        Some Documents will create publicly viewable pages on the site while
        others may only be used as settings, such as blog categories.
      </p>
      <p>
        Pages are the most general and direct way to create a page on the site.
        They have a flexible set of Slices that allow you to add general
        information to the site. Other Document types may include Slices that
        are made for a specific use-case.
      </p>
      <p>
        If the content you are adding to the site may be better suited for a
        specialized Document type, be sure to use that specialized type as it
        may include a special design or may be listed elsewhere automatically.
      </p>

      <h2>Creating Documents and Pages</h2>
      <p>
        Creating Documents and Pages can be done using the{' '}
        <strong>green Create new</strong> button in Prismic. This may also
        appear as a <strong>green pencil icon</strong>.
      </p>
      <p>
        You will be prompted to select a Document type.
        <a href="/admin/types/" target="_blank" rel="noopener noreferrer">
          See descriptions of each Document type here
        </a>
        .
      </p>
      <p>
        The following document from Prismic describes how to create Documents:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/771684-create-a-new-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to create a new document
          </a>
        </li>
      </ul>

      <h2>Editing Content</h2>
      <p>
        Documents usually contain several fields and Slice zones that allow you
        to provide content for a page on the site. Depending on the type of
        field, Prismic will tailor the interface to match the type of content it
        needs. For example, you may see a WYSIWYG editor, a dropdown selector,
        or a map to select a coordinate.
      </p>
      <p>
        The following documents from Prismic describe how to edit different
        types of fields:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/edit-and-format-a-rich-text-field"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Rich Text fields
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/links"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Link fields
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/browse-documents-and-edit-content/editing-content/add-and-edit-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to edit Image fields
          </a>
        </li>
      </ul>
      <p>
        While editing your content, you can save drafts multiple times before
        publishing.
      </p>

      <h2>Previewing</h2>
      <p>
        Before publishing your new content, you may need to preview how it
        looks. After saving your changes, you can click the "Preview" button to
        see the website with your changes.
      </p>
      <p>
        The following document from Prismic describes how to preview changes:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/768819-preview-a-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to preview a document
          </a>
        </li>
      </ul>

      <h2>Publishing</h2>
      <p>
        Once your changes are complete, you can publish your changes to the live
        site. After publishing, your changes will be sent to the site's hosting
        provider to automatically rebuild the site.
      </p>
      <p>Your changes will show up on the live site in 2-3 minutes</p>
      <blockquote>
        <h2>Important</h2>
        <p>
          Saving and publishing are two different actions. <em>Save</em> and
          then <em>publish</em> your document to go live.
        </p>
      </blockquote>
      <h3>Schedule a publish</h3>
      <p>
        Prismic allows scheduling your changes to publish automatically at a
        specified date and time. This can be helpful if you are keeping
        information private until an announcement elsewhere. You can group
        changes from multiple documents into a single scheduled publish.
      </p>
      <p>Prismic calls this Releases.</p>
      <p>
        The following document from Prismic describe how to create and schedule
        a Release:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/778328-create-and-add-to-a-release"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to create and add to a release
          </a>
        </li>
      </ul>

      <h2>Restore past version</h2>
      <p>
        Prismic saves a copy of every published Document allowing you to
        reference or restore a previous version at any point. This can be useful
        if content was prematurely removed or only temporarily altered.
      </p>
      <p>
        The following documents from Prismic describe how to use Document
        versions:
      </p>
      <ul>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/778556-versioning-and-restoring-a-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            Versioning and restoring a document
          </a>
        </li>
        <li>
          <a
            href="https://user-guides.prismic.io/en/articles/778597-discover-what-changed-in-your-documents"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover what changed in your documents
          </a>
        </li>
      </ul>
    </>
  ),
}

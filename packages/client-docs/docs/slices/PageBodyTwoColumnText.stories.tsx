import * as React from 'react'
import html from 'ts-dedent'
import * as faker from 'faker'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyTwoColumnText } from 'gatsby-site/src/slices/PageBodyTwoColumnText/PageBodyTwoColumnText'

export let meta: StoryMetadata = {
  title: 'Two Column Text',
  description: 'Large two-column text block with a variety of text styles.',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Two Column Text', href: '/slices/two-column-text' },
  ],
  content: () => (
    <>
      <h3>Fields</h3>
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
              <strong>Left Text</strong> <small>Rich Text</small>
            </td>
            <td>
              Text present in the left column on desktop, or below on mobile.
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Right Text</strong> <small>Rich Text</small>
            </td>
            <td>
              Text present in the right column on desktop, or above on mobile.
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

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyTwoColumnText
        leftHTML={html`<p>${faker.lorem.paragraphs(1)}</p>
          <p>${faker.lorem.paragraphs(1)}</p>`}
        rightHTML={html`
          <h4>${faker.random.words(2)}</h4>
          <h2>${faker.lorem.sentences(1)}</h2>
        `}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}

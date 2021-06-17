import * as React from 'react'
import html from 'ts-dedent'
import * as faker from 'faker'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyCenteredText } from './PageBodyCenteredText'

export let meta: StoryMetadata = {
  title: 'Centered Text',
  description: 'Large introductory block with center-aligned text.',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Centered Text', href: '/slices/centered-text' },
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
              <strong>Text</strong> <small>Rich Text</small>
            </td>
            <td>Text displayed in the slice</td>
            <td>Optional</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyCenteredText
        textHTML={html`
          <h4>${faker.random.words(2)}</h4>
          <p>${faker.lorem.paragraphs(1)}</p>
        `}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}

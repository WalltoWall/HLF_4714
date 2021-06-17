import * as React from 'react'
import html from 'ts-dedent'
import * as faker from 'faker'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyTwoColumnText } from './PageBodyTwoColumnText'

export let meta: StoryMetadata = {
  title: 'Two Column Text',
  description: 'Large two-column text block with a variety of text styles.',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Two Column Text', href: '/slices/two-column-text' },
  ],
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

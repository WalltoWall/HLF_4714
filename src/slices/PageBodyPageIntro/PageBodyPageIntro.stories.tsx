import * as React from 'react'
import * as faker from 'faker'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyPageIntro } from './PageBodyPageIntro'
import { titleize } from '../../lib/titleize'

export let meta: StoryMetadata = {
  title: 'Page Intro',
  description: 'Lorem ipsum sit dolor',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Page Intro', href: '/slices/page-intro' },
  ],
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyPageIntro
        heading={titleize(faker.lorem.sentence())}
        navItems={[
          { href: '#', label: faker.random.word() },
          { href: '#', label: faker.random.word() },
          { href: '#', label: faker.random.word() },
          { href: '#', label: faker.random.word() },
        ]}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}

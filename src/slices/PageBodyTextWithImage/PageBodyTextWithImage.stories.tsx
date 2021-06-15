import * as React from 'react'
import * as faker from 'faker'
import html from 'ts-dedent'
import { getGatsbyImageData } from '@imgix/gatsby'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyTextWithImage } from './PageBodyTextWithImage'
import { titleize } from '../../lib/titleize'

export let meta: StoryMetadata = {
  title: 'Text With Image',
  description: 'Lorem ipsum sit dolor',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Text With Image', href: '/slices/text-with-image' },
  ],
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyTextWithImage
        subheading={faker.random.word()}
        heading={titleize(faker.lorem.words(3))}
        sections={[
          {
            buttonLink: '#',
            buttonText: faker.lorem.words(2),
            imageAlt: '',
            textHTML: html`
              <p>${faker.lorem.paragraphs(2)}</p>
              <p>${faker.lorem.paragraphs(2)}</p>
            `,
            gatsbyImage: getGatsbyImageData({
              src: 'https://images.prismic.io/hawaii-leadership-forum/258c9f1a-3e5e-437d-938f-a231b369dcad_OFH-Logo-2018_Centered.png',
              sourceWidth: 591,
              sourceHeight: 306,
              layout: 'fullWidth',
            }),
          },
          {
            buttonLink: '#',
            buttonText: faker.lorem.words(2),
            imageAlt: '',
            textHTML: html`
              <p>${faker.lorem.paragraphs(2)}</p>
              <p>${faker.lorem.paragraphs(2)}</p>
            `,
            gatsbyImage: getGatsbyImageData({
              src: 'https://images.prismic.io/hawaii-leadership-forum/1c67ff66-34a1-459e-bf6a-ba2ba7077994_Smallify-Black.png',
              sourceWidth: 398,
              sourceHeight: 108,
              layout: 'fullWidth',
            }),
          },
        ]}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}

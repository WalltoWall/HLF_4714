import * as React from 'react'
import { getGatsbyImageData } from '@imgix/gatsby'

import type { StoryMetadata } from '../../../client_docs/types'
import { PageContainer } from '../../components/PageContainer'
import { default as PageBodyTexturedImage } from './PageBodyTexturedImage'

export let meta: StoryMetadata = {
  title: 'Textured Image',
  description: 'Full-width block for narrow & decorative images',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Textured Image', href: '/slices/textured-image' },
  ],
}

export let Example = () => {
  return (
    <PageContainer withFullHeight={false} withCentering={false}>
      <PageBodyTexturedImage
        imageAlt=""
        gatsbyImage={getGatsbyImageData({
          src: 'https://images.prismic.io/hawaii-leadership-forum/2b459211-1fc6-4bab-be2a-4112456d8213_plant-1.jpg',
          sourceWidth: 1450,
          sourceHeight: 91,
          layout: 'fullWidth',
        })}
        nextSharesBg={false}
      />
    </PageContainer>
  )
}

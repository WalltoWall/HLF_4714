import * as React from 'react'
import { getGatsbyImageData } from '@imgix/gatsby'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyTexturedImage } from 'gatsby-site/src/slices/PageBodyTexturedImage/PageBodyTexturedImage'

export let meta: StoryMetadata = {
  title: 'Textured Image',
  description: 'Full-width block for narrow & decorative images',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Textured Image', href: '/slices/textured-image' },
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
              <strong>Image</strong> <small>Image</small>
            </td>
            <td>Image is constrained to max height of 75px</td>
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

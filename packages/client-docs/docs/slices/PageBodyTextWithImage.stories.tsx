import * as React from 'react'
import * as faker from 'faker'
import html from 'ts-dedent'
import { getGatsbyImageData } from '@imgix/gatsby'

import type { StoryMetadata } from '../../types'
import { PageContainer } from 'gatsby-site/src/components/PageContainer'
import { default as PageBodyTextWithImage } from 'gatsby-site/src/slices/PageBodyTextWithImage/PageBodyTextWithImage'

export let meta: StoryMetadata = {
  title: 'Text With Image',
  description: 'Expandable text with accompanying image',
  path: [
    { label: 'Slices', href: '/slices' },
    { label: 'Text With Image', href: '/slices/text-with-image' },
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
              <strong>Subheading</strong> <small>Rich Text</small>
            </td>
            <td>Small caps heading above repeatable items</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Heading</strong> <small>Rich Text</small>
            </td>
            <td>Serif heading above repeatable items</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Repeatable Fields</h3>
      <p>
        Each item represents an expandable item with an image, text and optional
        external button link.
      </p>
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
            <td>Expandable text alongside image</td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Image</strong> <small>Image</small>
            </td>
            <td>
              Image shown alongside text. Should be an image legible at small
              sizes
            </td>
            <td>
              <strong>Required</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Button Text</strong> <small>Plain Text</small>
            </td>
            <td>
              Used if <strong>Button Link</strong> is provided. Defaults to
              "Learn More"
            </td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>
              <strong>Button Link</strong> <small>Link</small>
            </td>
            <td>Destination URL when button is clicked</td>
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
      <PageBodyTextWithImage
        subheading={faker.random.word()}
        heading={faker.lorem.sentence(3)}
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

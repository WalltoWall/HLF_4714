import * as React from 'react'
import altTextExample from '../../assets/altTextExample.png'
import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Accessibility & ADA Compliance',
  description:
    'Guidelines to maintain an accessible website and ADA compliance when making changes in Prismic.',
  path: [
    { label: 'General', href: '/general' },
    {
      label: 'Accessibility & ADA Compliance',
      href: '/general/accessibility-and-ada-compliance',
    },
  ],
  content: () => (
    <>
      <p>
        In order to maintain an accessible website, content editors must ensure
        that their changes do not accidentally discriminate against or exclude
        people with disabilities. This article will provide Wall-to-Wall's
        recommended best practices for website accessibility and maintaining ADA
        compliance.
      </p>
      <blockquote>
        <p>
          <em>Note:</em> The internet and ADA compliance are fluid standards, so
          these guidelines may not currently encompass new developments or
          technologies. Additional breakdowns of specific guidelines can be
          found in WCAG, a set of accessibility standards determined by the
          World Wide Web Consortium.
        </p>
      </blockquote>
      <h2>Image Alt Text</h2>
      <p>
        When adding new images to the Media Library, always remember to enter a
        summarized description of the image. Descriptions allow screen reader
        users to glean the intent of images on a page.
      </p>
      <img src={altTextExample} alt="" />
      <blockquote>
        <p>
          <em>Image Text:</em> If the image you are adding contains text and
          that text is required to convey the meaning of the image to the
          reader, then the alt text must contain **all** the text in the image.
        </p>
      </blockquote>
      <h2>Color Contrast</h2>
      <p>
        Make sure that your visuals have enough contrast and color to be easily
        identifiable and distinguishable. This requirement isn’t very intensive,
        but when uploading new media, be sure that your image is clear and that
        text has enough contrast to be easily legible.
      </p>
      <p>
        Within the documentation for individual slices, the{' '}
        <strong>Recommendations</strong> sections will let you know if there are
        contrast considerations when selecting an image or text color.
      </p>
    </>
  ),
}

import * as React from 'react'
import { Link } from 'react-router-dom'

import type { StoryMetadata } from '../../types'

export let meta: StoryMetadata = {
  title: 'Images',
  description:
    'Best practices and usage patterns when working with images in Prismic.',
  path: [
    { label: 'General', href: '/general' },
    { label: 'Images', href: '/general/images' },
  ],
  content: () => (
    <>
      <h2>Image Sizing</h2>
      <p>
        Content displayed on the site is managed through Slices. Each slice
        document explains image size guidelines.
      </p>
      <p>
        Prismic will automatically resize your images to a size suitable for the
        visitors device. If you upload a 4000x3000 pixel image, for example,
        Prismic will automatically resize it to the size of the image on the
        site.
      </p>
      <p>
        In general, upload the largest resolution image you have even if the
        image is only used in a smaller size.
      </p>

      <blockquote>
        <h2>File size limitation</h2>
        <p>
          Prismic has a 10 MB file upload limit for images. While the dimensions
          of your image can be larger than what the site needs, it must be under
          10 MB.
        </p>
      </blockquote>

      <p>
        If you need to resize your images due to Prismic's file size limitation,
        we recommended utilizing any built-in image editing software that is
        installed on your operating system.
      </p>

      <h2>ADA Compliance</h2>

      <p>
        When adding new images, you must add alternative text descriptions
        (a.k.a. alt text) to all images in order to maintain ADA Compliance.
      </p>

      <p>
        For more information on maintaining an accessible webpage, please see
        the{' '}
        <Link to="/admin/guides/general/accessibility-and-ada-compliance">
          ADA Compliance
        </Link>{' '}
        guide.
      </p>
    </>
  ),
}

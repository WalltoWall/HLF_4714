import * as React from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

import { PageBodyTexturedImageFragment } from '../../types.generated'
import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'

export type PageBodyTexturedImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyTexturedImage = ({
  imageAlt,
  gatsbyImage,
}: PageBodyTexturedImageProps) => {
  if (!gatsbyImage) return null

  return (
    <section data-textured-image className="relative">
      <GatsbyImage
        className="h-[38px] sm:h-[50px] md:h-[60px] lg:h-[75px]"
        image={gatsbyImage}
        alt={imageAlt ?? ''}
        imgStyle={{ objectFit: 'cover' }}
      />
    </section>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyTexturedImageFragment,
  typeof mapDataToContext
>) => ({
  gatsbyImage: getImage(data.primary?.image as ImageDataLike),
  imageAlt: data.primary?.image?.alt,
})

export const mapDataToContext = () => ({
  bg: Symbol('Dynamic Color'),
})

export default PageBodyTexturedImage

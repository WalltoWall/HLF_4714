import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

import { PageBodyTexturedImageFragment } from '../../types.generated'
import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'

export type PageBodyTexturedImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyTexturedImage = ({
  imageAlt,
  imageFluid,
}: PageBodyTexturedImageProps) => {
  if (!imageFluid) return

  return (
    <section data-textured-image className="relative">
      <GatsbyImage
        className="h-[38px] sm:h-[50px] md:h-[60px] lg:h-[75px]"
        image={imageFluid}
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
  imageFluid: getImage(data.primary?.image as ImageDataLike),
  imageAlt: data.primary?.image?.alt,
})

export const mapDataToContext = () => ({
  bg: Symbol('Dynamic Color'),
})

export const fragment = graphql`
  fragment PageBodyTexturedImage on PrismicPageDataBodyTexturedImage {
    primary {
      image {
        alt
        gatsbyImageData(width: 1450, placeholder: BLURRED)
      }
    }
  }
`

export default PageBodyTexturedImage

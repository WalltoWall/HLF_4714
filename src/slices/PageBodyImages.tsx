import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { getRichText, undefIfEmpty } from '@walltowall/helpers'

import { PageBodyImagesFragment } from '../types.generated'
import { PageTemplateEnhancerProps } from '../templates/page'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyImagesProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyImages = ({ children }: PageBodyImagesProps) => {
  return (
    <BoundedBox style={{ backgroundColor: 'black', color: 'white' }}>
      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '500px',
        }}
      >
        {children}
      </div>
    </BoundedBox>
  )
}

type ImageProps = {
  captionHTML?: string
  imageFluid?: FluidObject
  imageAlt?: string
}

const Image = ({ captionHTML, imageFluid, imageAlt }: ImageProps) => {
  return (
    <figure style={{ display: 'flex', flexDirection: 'column' }}>
      {imageFluid && <GatsbyImage fluid={imageFluid} alt={imageAlt} />}
      {captionHTML && (
        <HTMLContent
          as="figcaption"
          html={captionHTML}
          style={{ marginTop: 4 }}
        />
      )}
    </figure>
  )
}

PageBodyImages.Image = Image

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyImagesFragment, typeof mapDataToContext>) => ({
  children: data?.items?.map((item) => (
    <PageBodyImages.Image
      key={item?.image?.url}
      imageFluid={item?.image?.fluid as FluidObject}
      imageAlt={undefIfEmpty(item?.image?.alt) as string | undefined}
      captionHTML={getRichText(item?.caption)}
    />
  )) as React.ReactNode,
})

export const mapDataToContext = () => ({
  bg: 'black',
})

export const fragment = graphql`
  fragment PageBodyImages on PrismicPageBodyImages {
    items {
      image {
        alt
        url
        fluid(maxWidth: 1000) {
          ...GatsbyPrismicImageFluid
        }
      }
      caption {
        html
        text
      }
    }
  }
`

export default PageBodyImages

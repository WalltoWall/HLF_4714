import * as React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'
import GatsbyImage from 'gatsby-image'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyTextWithImageFragment } from '../../types.generated'
import { sansCaps, serifHeading } from '../../typography'
import { HTMLContent } from '../../components/HTMLContent'

const Section = ({
  imageAlt,
  imageFluid,
  textHTML,
}: NonNullable<PageBodyTextWithImageProps['sections']>[number]) => {
  return (
    <div
      className={clsx(
        'grid justify-items-center py-7 gap-y-7',
        'md:grid-cols-6 md:gap-y-0 md:gap-x-6',
      )}
    >
      {imageFluid && (
        <div className="max-w-[150px] md:max-w-[175px] w-full md:col-span-2 md:justify-self-center">
          <GatsbyImage
            fluid={imageFluid}
            alt={imageAlt}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
      )}

      {textHTML && (
        <HTMLContent
          html={textHTML}
          variant="textWithImage"
          className="md:col-span-4 md:pl-20"
        />
      )}
    </div>
  )
}

export type PageBodyTextWithImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

// TODO: Add link to logo.
const PageBodyTextWithImage = ({
  heading,
  sections = [],
  subheading,
  index,
}: PageBodyTextWithImageProps) => {
  return (
    <BoundedBox
      as="section"
      data-page-text-with-image
      style={{ zIndex: index }}
      className={clsx('relative bg-white md:bg-green-92', 'py-10 lg:py-20')}
    >
      <div className="grid gap-y-6 md:gap-y-9">
        {subheading && (
          <h4 className={clsx(sansCaps, 'text-gray-17 text-center md:-mb-3')}>
            {subheading}
          </h4>
        )}
        {heading && (
          <h2 className={clsx(serifHeading, 'text-gray-25 text-center')}>
            {heading}
          </h2>
        )}

        <div className="border-t border-b divide-y divide-gray-87 border-gray-87">
          {sections.map((section, idx) => (
            <Section key={idx} {...section} />
          ))}
        </div>
      </div>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyTextWithImageFragment,
  typeof mapDataToContext
>) => {
  return {
    subheading: data.primary?.subheading?.text,
    heading: data.primary?.heading?.text,
    sections: data.items?.map((item) => ({
      imageFluid: item?.image?.fluid,
      imageAlt: item?.image?.alt,
      textHTML: item?.text?.html,
    })),
  }
}

export const mapDataToContext = () => ({
  bg: Symbol('multi'),
})

export const fragment = graphql`
  fragment PageBodyTextWithImage on PrismicPageBodyTextWithImage {
    primary {
      subheading {
        text
      }
      heading {
        text
      }
    }
    items {
      image {
        alt
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid
        }
      }
      text {
        html
      }
    }
  }
`

export default PageBodyTextWithImage

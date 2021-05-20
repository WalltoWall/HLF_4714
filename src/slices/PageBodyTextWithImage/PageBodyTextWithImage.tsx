import * as React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'
import GatsbyImage from 'gatsby-image'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyTextWithImageFragment } from '../../types.generated'
import { sansCaps, serifHeading } from '../../typography'
import { HTMLContent } from '../../components/HTMLContent'
import { ButtonLink } from '../../components/ButtonLink'
import { focusRing } from '../../lib/utilStyles'

const MotionHTMLContent = motion(HTMLContent)

const Section = ({
  imageAlt,
  imageFluid,
  textHTML,
  buttonLink,
  buttonText,
}: NonNullable<PageBodyTextWithImageProps['sections']>[number]) => {
  const [isExpanded, toggleExpanded] = React.useReducer((val) => !val, false)

  return (
    <motion.div
      layout
      className={clsx(
        'grid justify-items-center py-7 gap-y-7',
        'md:grid-cols-6 md:gap-y-0 md:gap-x-6',
      )}
    >
      {imageFluid && (
        <motion.div
          layout="position"
          className="max-w-[150px] md:max-w-[175px] w-full md:col-span-2 md:justify-self-center"
        >
          <GatsbyImage
            fluid={imageFluid}
            alt={imageAlt}
            imgStyle={{ objectFit: 'contain' }}
          />
        </motion.div>
      )}

      <motion.div layout className="md:col-span-4 md:pl-20 space-y-7">
        {textHTML && (
          <motion.div
            layout="position"
            className={clsx(
              'relative overflow-hidden',
              !isExpanded && 'max-h-[150px]',
            )}
          >
            <MotionHTMLContent
              layout="position"
              html={textHTML}
              variant="textWithImage"
              className={clsx(isExpanded && 'pb-1')}
            />
            <motion.div
              layout="position"
              className={clsx(
                'absolute inset-x-0 bottom-0 h-24 pointer-events-none max-w-full',
                'bg-gradient-to-b to-white from-[#fff0]',
                isExpanded && 'opacity-0 yot',
              )}
            />
          </motion.div>
        )}

        <motion.div
          layout
          className="flex items-center justify-center space-x-5 md:space-x-6 md:justify-start"
        >
          {buttonLink && buttonText && (
            <ButtonLink href={buttonLink}>{buttonText}</ButtonLink>
          )}
          <motion.button
            layout
            className={clsx(focusRing, 'sans-caps text-green-24 py-px')}
            onClick={toggleExpanded}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export type PageBodyTextWithImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

// TODO: Add link to logo.
const PageBodyTextWithImage = ({
  heading,
  sections = [],
  subheading,
}: PageBodyTextWithImageProps) => {
  return (
    <BoundedBox
      as="section"
      data-page-text-with-image
      className={clsx('relative bg-white', 'py-10 lg:py-20')}
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

        <AnimateSharedLayout>
          <motion.div
            layout
            className="border-t border-b divide-y divide-gray-87 border-gray-87"
          >
            {sections.map((section, idx) => (
              <Section key={idx} {...section} />
            ))}
          </motion.div>
        </AnimateSharedLayout>
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
      buttonLink: item?.button_link?.url,
      buttonText: item?.button_text?.text,
    })),
  }
}

export const mapDataToContext = () => ({
  bg: 'bg-white',
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
      button_text {
        text
      }
      button_link {
        url
      }
    }
  }
`

export default PageBodyTextWithImage

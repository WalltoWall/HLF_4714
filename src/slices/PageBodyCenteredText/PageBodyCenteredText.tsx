import * as React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyCenteredTextFragment } from '../../types.generated'
import * as typo from '../../lib/typography'
import { HTMLContent } from '../../components/HTMLContent'

export type PageBodyCenteredTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyCenteredText = ({
  capsHeading,
  textHTML,
}: PageBodyCenteredTextProps) => {
  return (
    <BoundedBox
      as="section"
      data-page-centered-text
      className={clsx('relative bg-white', 'py-10 lg:py-20')}
    >
      <div className="text-center space-y-7">
        {capsHeading && <h4 className={typo.capsText}>{capsHeading}</h4>}
        {textHTML && (
          <HTMLContent
            html={textHTML}
            variant="centeredText"
            className="max-w-2xl mx-auto"
          />
        )}
      </div>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyCenteredTextFragment,
  typeof mapDataToContext
>) => ({
  capsHeading: data.primary?.caps_heading?.text,
  textHTML: data.primary?.text?.html,
})

export const mapDataToContext = () => ({
  bg: 'bg-white',
})

export const fragment = graphql`
  fragment PageBodyCenteredText on PrismicPageBodyCenteredText {
    primary {
      caps_heading {
        text
      }
      text {
        html
      }
    }
  }
`

export default PageBodyCenteredText

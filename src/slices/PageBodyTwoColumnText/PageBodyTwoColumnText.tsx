import * as React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyTwoColumnTextFragment } from '../../types.generated'
import { HTMLContent } from '../../components/HTMLContent'
import { Oval } from '../../components/Oval'

import * as styles from './PageBodyTwoColumnText.module.css'

export type PageBodyTwoColumnTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyTwoColumnText = ({
  leftHTML,
  rightHTML,
}: PageBodyTwoColumnTextProps) => {
  return (
    <BoundedBox
      as="section"
      data-page-centered-text
      className={clsx('relative', 'py-10 lg:py-20')}
    >
      <Oval
        className={clsx(
          styles.opaqueOval,
          'absolute inset-y-0 pointer-events-none text-green-92 z-[-1]',
          'opacity-60',
        )}
      />
      <Oval
        className={clsx(
          styles.solidOval,
          'absolute pointer-events-none text-green-92 z-[-1]',
        )}
      />

      <div
        className={clsx(
          'isolate grid gap-y-8',
          'md:grid-flow-col-dense md:grid-cols-2 md:gap-x-16 md:gap-y-0',
          'lg:gap-x-36',
        )}
      >
        {rightHTML && (
          <HTMLContent
            variant="twoColumnText"
            html={rightHTML}
            className="md:col-start-2"
          />
        )}
        {leftHTML && (
          <HTMLContent
            variant="twoColumnText"
            html={leftHTML}
            className="md:col-start-1"
          />
        )}
      </div>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyTwoColumnTextFragment,
  typeof mapDataToContext
>) => ({
  leftHTML: data.primary?.left_text?.html,
  rightHTML: data.primary?.right_text?.html,
})

export const mapDataToContext = () => ({
  bg: 'bg-green-92',
})

export const fragment = graphql`
  fragment PageBodyTwoColumnText on PrismicPageBodyTwoColumnText {
    primary {
      left_text {
        html
      }
      right_text {
        html
      }
    }
  }
`

export default PageBodyTwoColumnText

import * as React from 'react'
import clsx from 'clsx'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyCallToActionFragment } from '../../types.generated'
import { sansCaps, serifHeading } from '../../typography'
import { HTMLContent } from '../../components/HTMLContent'

export type PageBodyTeamProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyCallToAction = ({
  heading,
  subheading,
  textHTML,
}: PageBodyTeamProps) => {
  return (
    <BoundedBox
      as="section"
      data-page-cta
      className={clsx('relative bg-white', 'py-10 lg:py-20')}
    >
      <div className="grid gap-y-8 md:grid-cols-6 md:gap-y-0 md:gap-x-6">
        <div className="space-y-5 md:col-span-2">
          {subheading && <h4 className={sansCaps}>{subheading}</h4>}
          {heading && <h2 className={serifHeading}>{heading}</h2>}
        </div>

        {textHTML && (
          <HTMLContent
            variant="callToAction"
            html={textHTML}
            className="md:col-span-4 md:pl-20"
          />
        )}
      </div>
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyCallToActionFragment,
  typeof mapDataToContext
>) => ({
  subheading: data.primary?.subheading?.text,
  heading: data.primary?.heading?.text,
  textHTML: data.primary?.text?.html,
})

export const mapDataToContext = () => ({
  bg: 'bg-white',
})

export default PageBodyCallToAction

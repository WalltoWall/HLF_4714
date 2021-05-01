import * as React from 'react'
import { graphql } from 'gatsby'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

import { PageBodyTextFragment } from '../types.generated'
import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'

export type PageBodyTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyText = ({ textHTML }: PageBodyTextProps) => {
  return (
    <BoundedBox as="section">
      {textHTML && <HTMLContent html={textHTML} />}
    </BoundedBox>
  )
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyTextFragment, typeof mapDataToContext>) => ({
  textHTML: data?.primary?.text?.html,
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyText on PrismicPageBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default PageBodyText

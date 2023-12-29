import * as React from 'react'
import { graphql } from 'gatsby'

import { MapDataToPropsArgs } from '../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../templates/page'
import { PageBodyAnchorFragment } from '../types.generated'

export type PageBodyAnchorProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

const PageBodyAnchor = ({ anchor }: PageBodyAnchorProps) => {
	if (!anchor) return null

	return <div id={anchor} />
}

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<PageBodyAnchorFragment, typeof mapDataToContext>) => ({
	anchor: data.primary?.anchor,
})

export const mapDataToContext = () => ({})

export const fragment = graphql`
	fragment PageBodyAnchor on PrismicPageDataBodyAnchor {
		id
		primary {
			anchor
		}
	}
`

export default PageBodyAnchor

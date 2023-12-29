import * as React from 'react'
import { graphql } from 'gatsby'
import type { SliceComponentProps } from '@prismicio/react'

type Slice = Queries.AnchorFragment & { slice_type: 'anchor' }
type Props = SliceComponentProps<Slice>

const ANchor = ({ slice }: Props) => {
	if (!slice.primary.anchor) return null

	return <div id={slice.primary.anchor} />
}

export const fragment = graphql`
	fragment Anchor on PrismicPageDataBodyAnchor {
		id
		primary {
			anchor
		}
	}
`

export default ANchor

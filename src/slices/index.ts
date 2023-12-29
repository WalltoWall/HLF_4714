import { graphql } from 'gatsby'
import React from 'react'

export const components = {
	anchor: React.lazy(() => import('./Anchor')),
	call_to_action: React.lazy(() => import('./CallToAction')),
	centered_text: React.lazy(() => import('./CenteredText')),
	page_intro: React.lazy(() => import('./PageIntro')),
	team: React.lazy(() => import('./Team/Team')),
	text_with_image: React.lazy(() => import('./TextWithImage')),
	textured_image: React.lazy(() => import('./TexturedImage')),
	two_column_text: React.lazy(() => import('./TwoColumnText')),
}

export const query = graphql`
	fragment Slices on PrismicPageDataBody {
		... on PrismicSlice {
			id
			slice_label
			slice_type
		}
		...Anchor
		...CallToAction
		...CenteredText
		...PageIntro
		...Team
		...TextWithImage
		...TexturedImage
		...TwoColumnText
	}
`

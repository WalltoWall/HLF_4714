import { graphql } from 'gatsby'

export const fragment = graphql`
	fragment PageBodyCallToAction on PrismicPageDataBodyCallToAction {
		primary {
			heading {
				text
			}
			subheading {
				text
			}
			text {
				html
			}
		}
	}
`

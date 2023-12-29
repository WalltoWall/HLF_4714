import { graphql } from 'gatsby'

export const fragment = graphql`
	fragment PageBodyTexturedImage on PrismicPageDataBodyTexturedImage {
		primary {
			image {
				alt
				gatsbyImageData(width: 1450, placeholder: BLURRED)
			}
		}
	}
`

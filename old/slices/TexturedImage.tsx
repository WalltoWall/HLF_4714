import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import type { SliceComponentProps } from '@prismicio/react'

type Slice = Queries.TexturedImageFragment & {
	slice_type: 'textured_image'
}
type Props = SliceComponentProps<Slice>

const TexturedImage = ({ slice }: Props) => {
	const gatsbyImage = getImage(slice.primary.image)
	const imageAlt = slice.primary.image?.alt

	if (!gatsbyImage) return null

	return (
		<section data-textured-image className="relative">
			<GatsbyImage
				className="h-[38px] sm:h-[50px] md:h-[60px] lg:h-[75px]"
				image={gatsbyImage}
				alt={imageAlt ?? ''}
				imgStyle={{ objectFit: 'cover' }}
			/>
		</section>
	)
}

export default TexturedImage

export const fragment = graphql`
	fragment TexturedImage on PrismicPageDataBodyTexturedImage {
		id
		primary {
			image {
				alt
				gatsbyImageData(width: 1450, placeholder: BLURRED)
			}
		}
	}
`

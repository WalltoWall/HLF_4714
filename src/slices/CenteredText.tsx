import * as React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import type { SliceComponentProps } from '@prismicio/react'

type Slice = Queries.CenteredTextFragment & {
	slice_type: 'centered_text'
}
type Props = SliceComponentProps<Slice>

const CenteredText = ({ slice }: Props) => {
	const textHTML = slice.primary.text.html

	return (
		<BoundedBox
			as="section"
			data-page-centered-text
			className={clsx('relative bg-white', 'py-10 lg:py-20')}
		>
			{textHTML && (
				<HTMLContent
					html={textHTML}
					variant="centeredText"
					className="max-w-2xl mx-auto text-center"
				/>
			)}
		</BoundedBox>
	)
}

export default CenteredText

export const fragment = graphql`
	fragment CenteredText on PrismicPageDataBodyCenteredText {
		id
		primary {
			text {
				html
			}
		}
	}
`

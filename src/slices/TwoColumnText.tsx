import * as React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Oval } from '../components/Oval'
import type { SliceComponentProps } from '@prismicio/react'

type Slice = Queries.TwoColumnTextFragment & {
	slice_type: 'two_column_text'
}
type Props = SliceComponentProps<Slice>

const TwoColumnText = ({ slice }: Props) => {
	const leftHTML = slice.primary.left_text.html
	const rightHTML = slice.primary.right_text.html

	return (
		<BoundedBox
			as="section"
			data-page-two-column-text
			className={clsx(
				'relative overflow-hidden',
				'pt-24 md:pt-32 container:pt-56',
				'pb-10 lg:pb-20',
			)}
		>
			<Oval
				variant="opaque"
				className={clsx(
					'absolute pointer-events-none text-green-92',
					'opacity-60',
				)}
			/>
			<Oval
				variant="solid"
				className={clsx('absolute pointer-events-none text-green-92')}
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

export default TwoColumnText

export const fragment = graphql`
	fragment TwoColumnText on PrismicPageDataBodyTwoColumnText {
		id
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

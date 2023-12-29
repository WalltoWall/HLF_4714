import * as React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

import { BoundedBox } from '../components/BoundedBox'
import { sansCaps, serifHeading } from '../typography'
import { HTMLContent } from '../components/HTMLContent'
import type { SliceComponentProps } from '@prismicio/react'

type Slice = Queries.CallToActionFragment & {
	slice_type: 'call_to_action'
}
type Props = SliceComponentProps<Slice>

const CallToAction = ({ slice }: Props) => {
	const heading = slice.primary.heading.text
	const subheading = slice.primary.subheading.text
	const textHTML = slice.primary.text.html

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

export default CallToAction

export const fragment = graphql`
	fragment CallToAction on PrismicPageDataBodyCallToAction {
		id
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

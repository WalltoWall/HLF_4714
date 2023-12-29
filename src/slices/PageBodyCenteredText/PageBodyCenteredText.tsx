import * as React from 'react'
import clsx from 'clsx'

import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { PageBodyCenteredTextFragment } from '../../types.generated'
import { HTMLContent } from '../../components/HTMLContent'

export type PageBodyCenteredTextProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

const PageBodyCenteredText = ({ textHTML }: PageBodyCenteredTextProps) => {
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

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<
	PageBodyCenteredTextFragment,
	typeof mapDataToContext
>) => ({
	textHTML: data.primary?.text?.html,
})

export const mapDataToContext = () => ({
	bg: 'bg-white',
})

export default PageBodyCenteredText

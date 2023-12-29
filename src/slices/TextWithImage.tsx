import * as React from 'react'
import clsx from 'clsx'
import {
	GatsbyImage,
	getImage,
	type IGatsbyImageData,
} from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { BoundedBox } from '../components/BoundedBox'
import { sansCaps, serifHeading } from '../typography'
import { HTMLContent } from '../components/HTMLContent'
import { ButtonLink } from '../components/ButtonLink'
import { focusRing } from '../lib/utilStyles'
import type { SliceComponentProps } from '@prismicio/react'

type SectionProps = {
	gatsbyImage: IGatsbyImageData | undefined
	imageAlt: string | null | undefined
	textHTML: string | null
	buttonLink: string | null | undefined
	buttonText: string | null
}

const Section = ({
	imageAlt,
	gatsbyImage,
	textHTML,
	buttonLink,
	buttonText,
}: SectionProps) => {
	const [isExpanded, toggleExpanded] = React.useReducer((val) => !val, false)

	return (
		<div
			className={clsx(
				'grid justify-items-center py-7 gap-y-7',
				'md:grid-cols-6 md:gap-y-0 md:gap-x-6',
			)}
		>
			{gatsbyImage && (
				<div
					className={clsx(
						'max-w-[150px] md:max-w-[175px] w-full',
						'md:col-span-2 md:justify-self-center',
						'flex-shrink-0',
					)}
				>
					<GatsbyImage
						image={gatsbyImage}
						alt={imageAlt ?? ''}
						imgStyle={{ objectFit: 'contain' }}
					/>
				</div>
			)}

			<div className="md:col-span-4 md:pl-20 space-y-7">
				{textHTML && (
					<div
						className={clsx(
							'relative overflow-hidden',
							!isExpanded && 'max-h-[150px]',
						)}
					>
						<HTMLContent
							html={textHTML}
							variant="textWithImage"
							className={clsx(isExpanded && 'pb-1', 'pt-[2px]')}
						/>
						<div
							className={clsx(
								'absolute inset-x-0 bottom-0 h-24 pointer-events-none max-w-full',
								'bg-gradient-to-b to-white from-[#fff0]',
								isExpanded && 'opacity-0',
							)}
						/>
					</div>
				)}

				<div className="flex items-center justify-center space-x-5 md:space-x-6 md:justify-start">
					{buttonLink && buttonText && (
						<ButtonLink href={buttonLink}>{buttonText}</ButtonLink>
					)}
					<button
						className={clsx(
							focusRing,
							sansCaps,
							'text-green-24 py-px',
							'select-none',
						)}
						onClick={toggleExpanded}
					>
						{isExpanded ? 'Read Less' : 'Read More'}
					</button>
				</div>
			</div>
		</div>
	)
}

type Slice = Queries.TextWithImageFragment & {
	slice_type: 'text_with_image'
}
type Props = SliceComponentProps<Slice>

const TextWithImage = ({ slice }: Props) => {
	const { primary, items = [] } = slice

	const subheading = primary?.subheading?.text
	const heading = primary?.heading?.text
	const sections = items.map((item) => ({
		gatsbyImage: getImage(item?.image),
		imageAlt: item?.image?.alt,
		textHTML: item?.text?.html,
		buttonLink: item?.button_link?.url,
		buttonText: item?.button_text?.text,
	}))

	return (
		<BoundedBox
			as="section"
			data-page-text-with-image
			className={clsx('relative bg-white', 'py-10 lg:py-20')}
		>
			<div className="grid gap-y-6 md:gap-y-9">
				{subheading && (
					<h4
						className={clsx(
							sansCaps,
							'text-gray-17 text-center md:-mb-3',
						)}
					>
						{subheading}
					</h4>
				)}
				{heading && (
					<h2
						className={clsx(
							serifHeading,
							'text-gray-25 text-center',
						)}
					>
						{heading}
					</h2>
				)}

				<div className="border-t border-b divide-y divide-gray-87 border-gray-87">
					{sections.map((section, idx) => (
						<Section key={idx} {...section} />
					))}
				</div>
			</div>
		</BoundedBox>
	)
}

export default TextWithImage

export const fragment = graphql`
	fragment TextWithImage on PrismicPageDataBodyTextWithImage {
		id
		primary {
			subheading {
				text
			}
			heading {
				text
			}
		}
		items {
			image {
				alt
				gatsbyImageData(width: 800, placeholder: BLURRED)
			}
			text {
				html
			}
			button_text {
				text
			}
			button_link {
				url
			}
		}
	}
`

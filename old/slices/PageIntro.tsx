import * as React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

import { BoundedBox } from '../components/BoundedBox'
import { HStack } from '../components/HStack'
import heroBgUrl from '../assets/hero-bg.jpg'
import * as typo from '../typography'
import { ChevronRight } from '../components/icons/ChevronRight'
import { Link } from '../components/Link'
import type { SliceComponentProps } from '@prismicio/react'

interface NavItemProps {
	children: string
	href: string
}

const NavItem = ({ children, href }: NavItemProps) => {
	return (
		<li>
			<Link className="flex items-center space-x-2 group" href={href}>
				<div className={typo.sansCaps}>{children}</div>
				<ChevronRight
					className={clsx(
						'w-[8px] transform transition ease-out',
						'group-hover:translate-x-1 group-focus:translate-x-1',
					)}
				/>
			</Link>
		</li>
	)
}

type NavItem = { label?: string | null; href?: string | null }

type Slice = Queries.PageIntroFragment & { slice_type: 'page_intro' }
type Props = SliceComponentProps<Slice>

const PageIntro = ({ slice }: Props) => {
	const heading = slice.primary.heading.text

	let navItems: NavItem[] = []

	if (
		slice.primary.navigation?.document?.__typename === 'PrismicNavigation'
	) {
		navItems = slice.primary.navigation.document.data.nav_items.map(
			(item) => ({
				label: item.label.text,
				href: item.link?.url,
			}),
		)
	}

	return (
		<BoundedBox
			as="section"
			data-page-intro
			className={clsx(
				'relative pt-[72px] pb-6',
				'md:pt-20 md:pb-7',
				'lg:pt-24 lg:pb-8',
			)}
		>
			<div className="absolute inset-0">
				<img
					className="object-cover w-full h-full"
					src={heroBgUrl}
					loading="lazy"
					decoding="async"
					width={2400}
					height={624}
					alt=""
				/>
			</div>

			<div
				className={clsx(
					'text-white isolate',
					'w-10/12 md:w-full',
					'space-y-6 md:space-y-8',
				)}
			>
				{heading && (
					<h2 className={clsx(typo.serifHeading, 'max-w-[20ch]')}>
						{heading}
					</h2>
				)}

				<nav>
					<HStack
						as="ul"
						columnGap="30px"
						rowGap="16px"
						mdColumnGap="42px"
					>
						{navItems.map((item, idx) => {
							if (!item.label || !item.href) return

							return (
								<NavItem
									key={item.label + idx}
									href={item.href}
								>
									{item.label}
								</NavItem>
							)
						})}
					</HStack>
				</nav>
			</div>
		</BoundedBox>
	)
}

export default PageIntro

export const fragment = graphql`
	fragment PageIntro on PrismicPageDataBodyPageIntro {
		id
		primary {
			heading {
				text
			}
			navigation {
				document {
					__typename

					... on PrismicNavigation {
						_previewable
						data {
							nav_items {
								label {
									text
								}
								link {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`

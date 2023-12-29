import * as React from 'react'
import clsx from 'clsx'

import { PageBodyPageIntroFragment } from '../../types.generated'
import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'
import { BoundedBox } from '../../components/BoundedBox'
import { HStack } from '../../components/HStack'
import heroBgUrl from '../../assets/hero-bg.jpg'
import * as typo from '../../typography'
import { ChevronRight } from '../../components/icons/ChevronRight'
import { Link } from '../../components/Link'

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

export type PageBodyPageIntroProps = ReturnType<typeof mapDataToProps> &
	PageTemplateEnhancerProps

const PageBodyPageIntro = ({
	heading,
	navItems = [],
}: PageBodyPageIntroProps) => {
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

export const mapDataToProps = ({
	data,
}: MapDataToPropsArgs<PageBodyPageIntroFragment, typeof mapDataToContext>) => ({
	heading: data.primary?.heading?.text,
	navItems: data.primary?.navigation?.document?.data?.nav_items?.map(
		(navItem) => ({
			label: navItem?.label?.text,
			href: navItem?.link?.url,
		}),
	),
})

export const mapDataToContext = () => ({
	bg: Symbol('Background image'),
})

export default PageBodyPageIntro

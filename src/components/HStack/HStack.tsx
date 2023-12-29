import * as React from 'react'
import clsx from 'clsx'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'

import * as styles from './HStack.module.css'

const defaultElement = 'div'

interface OwnProps {
	columnGap?: string
	rowGap?: string
	smColumnGap?: string
	smRowGap?: string
	mdColumnGap?: string
	mdRowGap?: string
}

export type HStackProps<T extends React.ElementType = typeof defaultElement> =
	PolymorphicPropsWithoutRef<OwnProps, T>

export const HStack = <T extends React.ElementType = typeof defaultElement>({
	as,
	className,
	style,
	columnGap = '0px',
	rowGap = '0px',
	smColumnGap,
	smRowGap,
	mdColumnGap,
	mdRowGap,
	...props
}: HStackProps<T>) => {
	const Element: React.ElementType = as || defaultElement

	return (
		<Element
			className={clsx(className, 'flex flex-wrap', styles.hStack)}
			style={{
				...style,
				'--column-gap': columnGap,
				'--row-gap': rowGap,
				'--sm-column-gap': smColumnGap ?? columnGap,
				'--sm-row-gap': smRowGap ?? rowGap,
				'--md-column-gap': mdColumnGap ?? smColumnGap ?? columnGap,
				'--md-row-gap': mdRowGap ?? smRowGap ?? rowGap,
			}}
			{...props}
		/>
	)
}

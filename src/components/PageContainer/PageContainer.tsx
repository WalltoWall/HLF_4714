import React from 'react'
import clsx from 'clsx'

import * as styles from './PageContainer.module.css'

interface PageContainerProps {
	children: React.ReactNode
	withFullHeight?: boolean
	withCentering?: boolean
}

export const PageContainer = ({
	children,
	withFullHeight = true,
	withCentering = true,
}: PageContainerProps) => {
	return (
		<div className="overflow-hidden">
			<div
				className={clsx(
					'relative flex flex-col max-w-[1240px] px-2 bg-white',
					withFullHeight && 'min-h-screen',
					withCentering ? 'mx-auto' : 'mr-auto',
				)}
			>
				<div
					className={clsx(
						'absolute inset-y-0 w-2 left-0 pointer-events-none',
						styles.leftBorderGradient,
					)}
				/>
				<div
					className={clsx(
						'absolute inset-y-0 right-0 w-2 pointer-events-none',
						styles.rightBorderGradient,
					)}
				/>
				{children}
			</div>
		</div>
	)
}

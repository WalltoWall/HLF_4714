import * as React from 'react'

import { BoundedBox } from '../BoundedBox'
import { Link } from '../Link'

import logoUrl from '../../assets/logo.svg'

export const Header = () => {
	return (
		<BoundedBox
			as="header"
			className="relative py-4 bg-white md:py-5 lg:py-6"
		>
			<div className="flex justify-center">
				<Link
					href="/"
					className="focus:ring-offset-2 focus:ring-offset-white"
				>
					<span className="sr-only">Navigate to home</span>

					<img
						src={logoUrl}
						alt="Hawaii Leadership Forum"
						loading="lazy"
						decoding="async"
						className="w-[200px] md:w-[230px] lg:w-[260px]"
						width={300}
						height={92}
					/>
				</Link>
			</div>
		</BoundedBox>
	)
}

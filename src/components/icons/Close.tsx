import * as React from 'react'

export const Close = (props: React.ComponentProps<'svg'>) => {
	return (
		<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g
				fill="none"
				fillRule="evenodd"
				stroke="#087050"
				strokeLinecap="square"
				strokeWidth={2}
				transform="translate(1.838337 1.854503)"
			>
				<path d="m.173913.173913 7.652174 7.652174" />
				<path
					d="m.173913.173913 7.652174 7.652174"
					transform="matrix(-1 0 0 1 8 0)"
				/>
			</g>
		</svg>
	)
}

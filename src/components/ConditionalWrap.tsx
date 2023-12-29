import React from 'react'

interface Props {
	condition: boolean
	children: JSX.Element
	wrap: (children: React.ReactNode) => JSX.Element
}

export let ConditionalWrap = ({
	condition,
	children,
	wrap,
}: Props): JSX.Element =>
	condition ? React.cloneElement(wrap(children)) : children

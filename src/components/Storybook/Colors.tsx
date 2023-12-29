import React, { useState } from 'react'

import * as styles from './Colors.module.css'

// Matches a sequence of numbers.
const COLOR_REGEX = /(?=\d+)/
const ROW_HEIGHT = 6
const COLUMN_WIDTH = 6
const ROW_HEIGHT_REM = `${ROW_HEIGHT}rem`
const COLUMN_WIDTH_REM = `${COLUMN_WIDTH}rem`

type Color = {
	value: string
	name: string
	lightness?: string
	bucket: string
}

type ColorProps = Color & {
	withOutline?: boolean
	row: number
	zIndex: number
}

const Color = ({ value, name, lightness, row, zIndex }: ColorProps) => {
	const [state, setState] = useState({
		isHovered: false,
		isShowingCopyMsg: false,
	})
	const { isHovered, isShowingCopyMsg } = state

	let column: number
	let xAdjust = 0

	if (lightness) {
		const ratio = Number.parseInt(lightness) / 10
		column = Math.floor(ratio)
		xAdjust = (ratio % 1) * COLUMN_WIDTH
	} else column = name === 'white' ? 10 : 1

	const showPopover = () =>
		setState({ isShowingCopyMsg: false, isHovered: true })
	const hidePopover = () => setState((p) => ({ ...p, isHovered: false }))

	const copyColorValue = async () => {
		try {
			await navigator.clipboard.writeText(value)
			setState((p) => ({ ...p, isShowingCopyMsg: true }))

			setTimeout(hidePopover, 1000)
		} catch {
			// Noop
		}
	}

	return (
		<button
			className={styles.color}
			style={{
				gridRow: row,
				gridColumn: column,
				transform: `translate(${-1.75 + xAdjust}rem, -1.75rem)`,
				zIndex,
			}}
			onMouseEnter={showPopover}
			onMouseLeave={hidePopover}
			onFocus={showPopover}
			onBlur={hidePopover}
			onClick={copyColorValue}
		>
			<div
				className={styles.colorCircle}
				style={{
					background: value,
					boxShadow:
						name === 'white'
							? 'inset 0 0 0 1px #00000012'
							: undefined,
				}}
			/>

			<div
				className={styles.popover}
				style={{ opacity: isHovered ? 1 : 0 }}
			>
				<h3 className={styles.popoverName}>
					{isShowingCopyMsg
						? 'Copied color!'
						: `${name} ${lightness}`}
				</h3>
				{!isShowingCopyMsg && (
					<p className={styles.popoverValue}>{value}</p>
				)}
			</div>
		</button>
	)
}

type ColorBuckets = Record<string, Color[]>

interface ColorsProps {
	colors: Record<string | number | symbol, string>
}

export const Colors = ({ colors: rawColors }: ColorsProps) => {
	const {
		transparent: _transparent,
		current: _current,
		...colors
	} = rawColors

	const colorBuckets = Object.entries(colors).reduce((acc, [name, value]) => {
		const [colorName, ...lightnessParts] = name.split(COLOR_REGEX)
		if (colorName === 'current') return acc

		const monochromeColors = ['black', 'white', 'gray']
		let bucketName = colorName
		if (monochromeColors.includes(colorName)) bucketName = 'monochrome'

		const colorObj = {
			value,
			name: colorName,
			bucket: bucketName,
			lightness: lightnessParts.join(''),
		}

		acc[bucketName] = acc[bucketName] ?? []
		acc[bucketName].push(colorObj)

		return acc
	}, {} as ColorBuckets)

	const allColorKeys = Object.keys(colorBuckets)
	const allColorBuckets = Object.values(colorBuckets)
	const numRows = allColorKeys.length - 1

	return (
		<div className={styles.container}>
			<aside
				className={styles.aside}
				style={{
					gridTemplateRows: `repeat(${numRows}, ${ROW_HEIGHT_REM})`,
				}}
			>
				{allColorKeys.map((name) => (
					<h3 className={styles.colorHeading} key={name}>
						{name}
					</h3>
				))}
			</aside>

			<section
				className={styles.lineGrid}
				style={{
					gridTemplateRows: `repeat(${numRows}, ${ROW_HEIGHT_REM})`,
					gridTemplateColumns: `repeat(9, ${COLUMN_WIDTH_REM})`,
				}}
			>
				{Array(numRows * 9)
					.fill(undefined)
					.map((_, idx) => (
						<div key={idx} className={styles.gridCell} />
					))}
				{allColorBuckets.map((bucketColors, bucketIdx) =>
					bucketColors.map((color) => (
						<Color
							key={color.value}
							row={bucketIdx + 1}
							{...color}
							zIndex={allColorBuckets.length - bucketIdx}
						/>
					)),
				)}
			</section>
		</div>
	)
}

type ExpandArgs = {
	open: boolean
	duration?: number
	minHeight?: number
}

export function expand(node: HTMLElement, { open, minHeight = 0 }: ExpandArgs) {
	node.style.height = "auto"
	const initialHeight = node.offsetHeight

	if (!open) {
		node.style.height = minHeight + "px"
	}

	return {
		update({ open, duration }: ExpandArgs) {
			let animation = node.animate(
				[{ height: initialHeight + "px" }, { height: minHeight + "px" }],
				{ duration, fill: "both" }
			)

			animation.pause()

			if (!open) {
				animation.play()
			} else {
				animation.reverse()
			}
		}
	}
}

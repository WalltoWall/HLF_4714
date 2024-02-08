export function anchorAttrs(href?: string) {
	if (href?.startsWith("http")) {
		return {
			target: "_blank",
			rel: "noreferrer"
		}
	}

	return {
		target: undefined,
		rel: undefined
	}
}

<script lang="ts">
	import type { Content } from "@prismicio/client"

	export let slice: Content.AnchorSlice
</script>

<div
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	id={slice.primary.anchor?.replace("#", "")}
/>

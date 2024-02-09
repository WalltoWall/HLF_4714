<script lang="ts">
	import { PrismicRichText } from "@prismicio/svelte"
	import OList from "./PrismicRichText/OList.svelte"
	import List from "./PrismicRichText/List.svelte"
	import Strong from "./PrismicRichText/Strong.svelte"
	import Hyperlink from "./PrismicRichText/Hyperlink.svelte"
	import type { ComponentProps } from "svelte"

	export let field: ComponentProps<PrismicRichText>["field"]
	export let components: ComponentProps<PrismicRichText>["components"] = {}
</script>

<PrismicRichText
	{field}
	components={{
		oList: OList,
		list: List,
		strong: Strong,
		hyperlink: Hyperlink,
		...components
	}}
/>

<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import type { Content } from "@prismicio/client"
	import * as prismic from "@prismicio/client"
	import CenteredTextParagraph from "./CenteredTextParagraph.svelte"
	import CenteredTextHeading from "./CenteredTextHeading.svelte"

	export let slice: Content.CenteredTextSlice
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative bg-white py-10 lg:py-20"
>
	{#if prismic.isFilled.richText(slice.primary.text)}
		<div class="max-w-2xl mx-auto text-center">
			<PrismicRichText
				field={slice.primary.text}
				components={{
					heading4: CenteredTextHeading,
					paragraph: CenteredTextParagraph
				}}
			/>
		</div>
	{/if}
</Bounded>

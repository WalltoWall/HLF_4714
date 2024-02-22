<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import type { Content } from "@prismicio/client"
	import * as prismic from "@prismicio/client"
	import * as typo from "$lib/typography"
	import CallToActionParagraph from "./CallToActionParagraph.svelte"
	import CallToActionHeading from "./CallToActionHeading.svelte"
	import CallToActionListItem from "./CallToActionListItem.svelte"
	import CallToActionOListItem from "./CallToActionOListItem.svelte"

	export let slice: Content.CallToActionSlice

	const heading = prismic.asText(slice.primary.heading)
	const subheading = prismic.asText(slice.primary.subheading)
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative bg-white py-10 lg:py-20"
>
	<div class="grid gap-y-8 md:grid-cols-6 md:gap-y-0 md:gap-x-6">
		<div class="space-y-5 md:col-span-2">
			{#if subheading}
				<p class={typo.sansCaps}>{subheading}</p>
			{/if}

			{#if heading}
				<h2 class={typo.serifHeading}>{heading}</h2>
			{/if}
		</div>

		{#if prismic.isFilled.richText(slice.primary.text)}
			<div class="md:col-span-4 md:pl-20">
				<PrismicRichText
					field={slice.primary.text}
					components={{
						paragraph: CallToActionParagraph,
						heading5: CallToActionHeading,
						oListItem: CallToActionOListItem,
						listItem: CallToActionListItem
					}}
				/>
			</div>
		{/if}
	</div>
</Bounded>

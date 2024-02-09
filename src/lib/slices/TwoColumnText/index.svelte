<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import type { Content } from "@prismicio/client"
	import Oval from "./Oval.svelte"
	import clsx from "clsx"
	import * as prismic from "@prismicio/client"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import TwoColumnTextHeading2 from "./TwoColumnTextHeading2.svelte"
	import TwoColumnTextHeading3 from "./TwoColumnTextHeading3.svelte"
	import TwoColumnTextParagraph from "./TwoColumnTextParagraph.svelte"

	export let slice: Content.TwoColumnTextSlice

	const left = slice.primary.leftText
	const right = slice.primary.rightText
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative overflow-hidden pt-24 md:pt-32 container:pt-56 pb-10 lg:pb-20"
>
	<Oval
		variant="opaque"
		class={clsx("absolute pointer-events-none text-green-92", "opacity-60")}
	/>
	<Oval
		variant="solid"
		class={clsx("absolute pointer-events-none text-green-92")}
	/>
	<div
		class={clsx(
			"isolate grid gap-y-8",
			"md:grid-flow-col-dense md:grid-cols-2 md:gap-x-16 md:gap-y-0",
			"lg:gap-x-36"
		)}
	>
		{#if prismic.isFilled.richText(right)}
			<div class="md:col-start-2">
				<PrismicRichText
					field={right}
					components={{
						heading2: TwoColumnTextHeading2,
						heading3: TwoColumnTextHeading3,
						paragraph: TwoColumnTextParagraph
					}}
				/>
			</div>
		{/if}

		{#if prismic.isFilled.richText(left)}
			<div class="md:col-start-1">
				<PrismicRichText
					field={left}
					components={{
						heading2: TwoColumnTextHeading2,
						heading3: TwoColumnTextHeading3,
						paragraph: TwoColumnTextParagraph
					}}
				/>
			</div>
		{/if}
	</div>
</Bounded>

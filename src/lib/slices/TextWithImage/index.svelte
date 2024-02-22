<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import type { Content } from "@prismicio/client"
	import * as prismic from "@prismicio/client"
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import ExpandableSection from "./ExpandableSection.svelte"

	export let slice: Content.TextWithImageSlice

	const subheading = prismic.asText(slice.primary.subheading)
	const heading = prismic.asText(slice.primary.heading)
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative bg-white py-10 lg:py-20"
>
	<div class="grid gap-y-6 md:gap-y-9">
		{#if subheading}
			<p class={clsx(typo.sansCaps, "text-gray-17 text-center md:-mb-3")}>
				{subheading}
			</p>
		{/if}

		{#if heading}
			<h2 class={clsx(typo.serifHeading, "text-gray-25 text-center")}>
				{heading}
			</h2>
		{/if}

		<div class="border-t border-b divide-y divide-gray-87 border-gray-87">
			{#each slice.items as item}
				<ExpandableSection {item} />
			{/each}
		</div>
	</div>
</Bounded>

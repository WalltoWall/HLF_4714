<script lang="ts">
	import { PrismicImage } from "@prismicio/svelte"
	import * as prismic from "@prismicio/client"
	import clsx from "clsx"

	import Bounded from "$lib/components/Bounded.svelte"

	export let slice: prismic.Content.ImageSlice
	export let index: number
</script>

<Bounded
	tag="section"
	class={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if prismic.isFilled.image(slice.primary.image)}
		<div class="bg-gray-100">
			<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
		</div>
	{/if}
</Bounded>

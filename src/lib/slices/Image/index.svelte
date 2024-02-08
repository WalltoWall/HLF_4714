<script lang="ts">
	import { PrismicImage } from "@prismicio/svelte"
	import * as prismic from "@prismicio/client"

	export let slice: prismic.Content.ImageSlice
</script>

<section
	class="relative"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if prismic.isFilled.image(slice.primary.image)}
		<PrismicImage
			field={slice.primary.image}
			sizes="(min-width: 56rem) 56rem, 100vw"
			class="w-full h-[38px] sm:h-[50px] md:h-[60px] lg:h-[75px] object-cover"
		/>
	{/if}
</section>

<script lang="ts">
	import type { Content } from "@prismicio/client"
	import * as prismic from "@prismicio/client"
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import { PrismicImage } from "@prismicio/svelte"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import ButtonLink from "$lib/components/ButtonLink.svelte"
	import TextWithImageParagraph from "./TextWithImageParagraph.svelte"
	import TextWithImageListItem from "./TextWithImageListItem.svelte"

	export let item: Content.TextWithImageSliceDefaultItem

	let expanded = false
</script>

<div
	class={clsx(
		"grid justify-items-center py-7 gap-y-7",
		"md:grid-cols-6 md:gap-y-0 md:gap-x-6"
	)}
>
	<div
		class="max-w-[150px] md:max-w-[175px] w-full md:col-span-2 md:justify-self-center flex-shrink-0"
	>
		{#if prismic.isFilled.image(item.image)}
			<PrismicImage field={item.image} class="object-contain" />
		{/if}
	</div>

	<div class="md:col-span-4 md:pl-20 space-y-7">
		<div class={clsx("relative overflow-hidden", !expanded && "max-h-[150px]")}>
			<div class={clsx(expanded && "pb-1", "pt-[2px]")}>
				{#if prismic.isFilled.richText(item.text)}
					<PrismicRichText
						field={item.text}
						components={{
							paragraph: TextWithImageParagraph,
							oListItem: TextWithImageListItem,
							listItem: TextWithImageListItem
						}}
					/>
				{/if}

				<div
					class={clsx(
						"absolute inset-x-0 bottom-0 h-24 pointer-events-none max-w-full",
						"bg-gradient-to-b to-white from-[#fff0]",
						expanded && "opacity-0"
					)}
				/>
			</div>
		</div>

		<div
			class="flex items-center justify-center space-x-5 md:space-x-6 md:justify-start"
		>
			{#if prismic.isFilled.link(item.buttonLink) && item.buttonText}
				<ButtonLink
					href={prismic.asLink(item.buttonLink)}
					class="outline-green-24"
				>
					{item.buttonText}
				</ButtonLink>
			{/if}

			<button
				class={clsx(typo.sansCaps, "text-green-24 py-px", "select-none")}
				on:click={() => (expanded = !expanded)}
			>
				{expanded ? "Read Less" : "Read More"}
			</button>
		</div>
	</div>
</div>

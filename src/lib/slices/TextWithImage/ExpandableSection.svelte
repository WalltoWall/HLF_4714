<script lang="ts">
	import type { Content } from "@prismicio/client"
	import { createCollapsible, melt } from "@melt-ui/svelte"
	import * as prismic from "@prismicio/client"
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import { PrismicImage } from "@prismicio/svelte"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import ButtonLink from "$lib/components/ButtonLink.svelte"
	import TextWithImageParagraph from "./TextWithImageParagraph.svelte"
	import TextWithImageOListItem from "./TextWithImageOListItem.svelte"
	import TextWithImageListItem from "./TextWithImageListItem.svelte"
	import { expand } from "./expand"

	export let item: Content.TextWithImageSliceDefaultItem

	const length = prismic.asText(item.text).length
	const isExpandable = length >= 420
	const duration = Math.min(200, length - 520)

	const {
		elements: { content, root, trigger },
		states: { open }
	} = createCollapsible({ defaultOpen: !isExpandable, forceVisible: true })
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
			<PrismicImage
				field={item.image}
				class="object-contain"
				sizes="175px"
				loading="lazy"
			/>
		{/if}
	</div>

	<div class="md:col-span-4 md:pl-20 space-y-7" use:melt={$root}>
		<div
			class={clsx("relative overflow-hidden pt-0.5", $open && "pb-1.5")}
			use:melt={$content}
		>
			<div
				use:expand={{ open: $open, duration, minHeight: 160 }}
				class={clsx(isExpandable && "h-40")}
			>
				{#if prismic.isFilled.richText(item.text)}
					<PrismicRichText
						field={item.text}
						components={{
							paragraph: TextWithImageParagraph,
							oListItem: TextWithImageOListItem,
							listItem: TextWithImageListItem
						}}
					/>
				{/if}
			</div>

			<div
				class={clsx(
					"absolute inset-x-0 bottom-0 h-24 pointer-events-none max-w-full",
					"bg-gradient-to-b to-white from-[#fff0]",
					$open && "opacity-0"
				)}
			/>
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

			{#if isExpandable}
				<button
					class={clsx(
						typo.sansCaps,
						"text-green-24 py-px select-none outline-green-24"
					)}
					use:melt={$trigger}
				>
					{$open ? "Read Less" : "Read More"}
				</button>
			{/if}
		</div>
	</div>
</div>

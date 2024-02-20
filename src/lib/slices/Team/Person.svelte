<script lang="ts">
	import { asText, isFilled, type Content } from "@prismicio/client"
	import * as typo from "$lib/typography"
	import { PrismicImage } from "@prismicio/svelte"
	import clsx from "clsx"
	import { createDialog, melt } from "@melt-ui/svelte"
	import { fade } from "svelte/transition"
	import { flyAndScale } from "$lib/transition"
	import PrismicRichText from "$lib/components/PrismicRichText.svelte"
	import TextWithImageParagraph from "../TextWithImage/TextWithImageParagraph.svelte"
	import TextWithImageListItem from "../TextWithImage/TextWithImageListItem.svelte"
	import TextWithImageOListItem from "../TextWithImage/TextWithImageOListItem.svelte"
	import Close from "$lib/components/icons/Close.svelte"

	export let person: Content.PersonDocumentData

	const name = `${asText(person.firstName)} ${asText(person.lastName)}`

	const {
		elements: {
			trigger,
			overlay,
			content,
			title,
			description,
			close,
			portalled
		},
		states: { open }
	} = createDialog({
		forceVisible: true,
		defaultOpen: false
	})
</script>

<li>
	<button
		class="flex flex-col items-center group w-[90px] sm:w-28 md:w-32 lg:w-[130px] outline-teal-45"
		use:melt={$trigger}
	>
		<span class="sr-only">Open {name}'s biography.</span>

		<div
			class="flex-shrink-0 rounded-xl bg-gray-87 overflow-hidden h-[90px] sm:h-28 md:h-32 lg:h-[130px] w-[90px] sm:w-28 md:w-32 lg:w-[130px]"
		>
			{#if isFilled.image(person.headshot)}
				<PrismicImage
					field={person.headshot}
					class="object-cover rounded-xl w-full h-full"
					sizes="(min-width: 64rem) 130px, (min-width: 30rem) 7rem, 90px"
					widths={[90, 130, 260]}
					loading="lazy"
				/>
			{/if}
		</div>

		<p class={clsx(typo.personName, "text-center text-green-24 pb-1 mt-4")}>
			{name}
		</p>

		{#if person.title}
			<p class={clsx(typo.personTitle, "text-gray-17 mt-3 text-balance")}>
				{person.title}
			</p>
		{/if}
	</button>
</li>

{#if $open}
	<div use:melt={$portalled}>
		<div
			use:melt={$overlay}
			transition:fade={{ duration: $open ? 300 : 200 }}
			class="fixed inset-0 transition-opacity bg-black bg-opacity-80"
		/>

		<div
			class="fixed inset-0 flex items-end justify-center min-h-screen px-4 pt-4 pb-20 md:p-0 md:items-center"
		>
			<div
				use:melt={$content}
				transition:flyAndScale={{
					duration: $open ? 300 : 200,
					y: 8,
					start: 0.95
				}}
				class="relative md:my-8 rounded-lg shadow-xl bg-green-92 md:max-w-xl md:w-full overflow-hidden"
			>
				<div class="relative px-5 md:px-8">
					<img
						src="/images/pattern.jpg"
						alt=""
						loading="lazy"
						decoding="async"
						class="absolute right-0 inset-y-0 w-[95px] md:w-[135px] pointer-events-none object-cover h-full"
					/>

					<div
						class="relative overflow-scroll max-h-80 pt-8 md:pt-9 pb-5 md:pb-6 hide-scrollbar"
					>
						<div
							class="float-right rounded-xl bg-gray-87 ml-3 mb-3 md:ml-5 overflow-hidden h-[100px] md:h-28 lg:h-[130px] w-[100px] md:w-28 lg:w-[130px]"
						>
							{#if isFilled.image(person.headshot)}
								<PrismicImage
									field={person.headshot}
									class="object-cover rounded-xl"
									loading="lazy"
									sizes="(min-width: 64rem) 130px, (min-width: 30rem) 7rem, 90px"
									widths={[90, 130, 260]}
								/>
							{/if}
						</div>

						<div>
							<h3
								use:melt={$title}
								class="mb-5 font-bold text-green-24 md:mb-6 text-20 leading-1_25 capsize font-sans"
							>
								{name}
							</h3>

							{#if isFilled.richText(person.bio)}
								<div use:melt={$description}>
									<PrismicRichText
										field={person.bio}
										components={{
											paragraph: TextWithImageParagraph,
											oListItem: TextWithImageOListItem,
											listItem: TextWithImageListItem
										}}
									/>
								</div>
							{/if}
						</div>
					</div>

					<div
						class="absolute inset-x-0 top-0 h-6 pointer-events-none max-w-full bg-gradient-to-t to-green-92 from-[#e8f5e200]"
					/>
					<div
						class="absolute inset-x-0 bottom-0 h-6 pointer-events-none max-w-full bg-gradient-to-b to-green-92 from-[#e8f5e200]"
					/>
				</div>

				<div
					class={clsx(
						"flex justify-end border-t-2 border-gray-87",
						"px-5 py-4 md:px-8"
					)}
				>
					<button
						type="button"
						use:melt={$close}
						class="flex items-center gap-x-2 outline-green-24"
					>
						<div class={clsx(typo.sansCaps, "text-green-24")}>Close</div>

						<Close class="w-3 h-3" />
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.hide-scrollbar {
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>

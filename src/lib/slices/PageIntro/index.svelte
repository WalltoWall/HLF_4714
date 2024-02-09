<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import type { Content } from "@prismicio/client"
	import * as prismic from "@prismicio/client"
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import ChevronRight from "$lib/components/icons/ChevronRight.svelte"

	export let slice: Content.PageIntroSlice

	const navigation = prismic.isFilled.contentRelationship(
		slice.primary.navigation
	)
		? (
				slice.primary
					.navigation as unknown as prismic.Content.NavigationDocument
			).data.navItems
		: []

	const items = navigation
		.filter((item) => prismic.isFilled.link(item.link))
		.map((item) => ({
			href: prismic.asLink(item.link),
			label: item.label,
			attrs: prismic.asLinkAttrs(item.link)
		}))

	const heading = prismic.asText(slice.primary.heading)
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative pt-[72px] pb-6 md:pt-20 md:pb-7 lg:pt-24 lg:pb-8"
>
	<div class="absolute inset-0">
		<img
			class="object-cover w-full h-full"
			src="/images/hero-bg.jpg"
			loading="lazy"
			decoding="async"
			width={2400}
			height={624}
			alt=""
		/>
	</div>

	<div
		class={clsx(
			"text-white isolate",
			"w-10/12 md:w-full",
			"space-y-6 md:space-y-8"
		)}
	>
		{#if heading}
			<h2 class={clsx(typo.serifHeading, "max-w-[20ch]")}>
				{heading}
			</h2>
		{/if}

		<nav>
			<ul class="flex flex-wrap gap-y-[30px] gap-x-4 md:gap-x-[42px]">
				{#each items as item}
					<li class="flex items-center gap-2 group">
						<a class={typo.sansCaps} href={item.href} {...item.attrs}>
							{item.label}
						</a>
						<ChevronRight
							class="w-2 transform transition ease-out group-hover:translate-x-1 group-focus-within:translate-x-1"
						/>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</Bounded>

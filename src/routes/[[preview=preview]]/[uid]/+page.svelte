<script lang="ts">
	import { SliceZone } from "@prismicio/svelte"
	import * as prismic from "@prismicio/client"
	import { components } from "$lib/slices"
	import type { SliceContext } from "$lib/context.js"
	import { page } from "$app/stores"

	export let data

	const prisPage = data.page.data
	const context: SliceContext = { people: data.people }
	const siteTitle = prismic.asText($page.data.settings.data.siteTitle)
</script>

<svelte:head>
	<title>{prismic.asText(prisPage.title)} | {siteTitle}</title>
	{#if prisPage.meta_description}
		<meta name="description" content={prisPage.meta_description} />
	{/if}
	{#if prisPage.meta_title}
		<meta name="og:title" content={prisPage.meta_title} />
	{/if}
	{#if prisPage.meta_image}
		<meta name="og:image" content={prisPage.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<SliceZone slices={prisPage.slices} {context} {components} />

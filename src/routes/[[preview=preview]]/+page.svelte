<script lang="ts">
	import { SliceZone } from "@prismicio/svelte"
	import { components } from "$lib/slices"

	export let data

	const page = data.page.data
</script>

<svelte:head>
	{#if page.meta_description}
		<meta name="description" content={page.meta_description} />
	{/if}
	{#if page.meta_title}
		<meta name="og:title" content={page.meta_title} />
	{/if}
	{#if page.meta_image}
		<meta name="og:image" content={page.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />

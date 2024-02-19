<script lang="ts">
	import "@fontsource/pt-serif/400.css"
	import "../app.css"

	import { PrismicPreview } from "@prismicio/svelte/kit"
	import { repositoryName } from "$lib/prismicio"
	import GradientContainer from "$lib/components/GradientContainer.svelte"
	import Analytics from "$lib/components/Analytics.svelte"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"
	import * as prismic from "@prismicio/client"
	import { dev } from "$app/environment"

	export let data

	const settings = data.settings.data

	const title = prismic.asText(settings.siteTitle)
	const description = prismic.asText(settings.siteDescription)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<GradientContainer>
	<Header />
	<main id="main"><slot /></main>
	<Footer settings={data.settings} />
</GradientContainer>

{#if !dev}
	<Analytics />
	<PrismicPreview {repositoryName} />
{/if}

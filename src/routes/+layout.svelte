<script lang="ts">
	import "@fontsource/pt-serif/400.css"
	import "../app.css"

	import { PrismicPreview } from "@prismicio/svelte/kit"
	import { repositoryName } from "$lib/prismicio"
	import GradientContainer from "$lib/components/GradientContainer.svelte"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"
	import * as prismic from "@prismicio/client"

	export let data

	const settings = data.settings.data

	const title = prismic.asText(settings.siteTitle)
	const description = prismic.asText(settings.siteDescription)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="text-slate-800">
	<GradientContainer>
		<Header />
		<main id="main"><slot /></main>
		<Footer settings={data.settings} />
	</GradientContainer>
</div>

<PrismicPreview {repositoryName} />

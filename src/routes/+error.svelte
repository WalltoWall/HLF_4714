<script lang="ts">
	import ButtonLink from "$lib/components/ButtonLink.svelte"
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import { page } from "$app/stores"
	import * as prismic from "@prismicio/client"

	const siteTitle = prismic.asText($page.data.settings.data.siteTitle)
</script>

<div
	class="min-h-[50svh] flex flex-col justify-center items-center space-y-6 md:space-y-9"
>
	<p class={clsx(typo.sansCaps, "text-gray-17 text-center md:-mb-3")}>
		Not Found
	</p>

	<h1
		class={clsx(
			typo.serifHeading,
			"text-gray-25 text-center text-balance max-w-[40ch]"
		)}
	>
		Sorry, we weren't able to find anything for the requested page.
	</h1>

	<ButtonLink href="/">Back to Home</ButtonLink>
</div>

<svelte:head>
	<title>Not Found | {siteTitle}</title>
</svelte:head>

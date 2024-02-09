<script lang="ts">
	import * as typo from "$lib/typography"
	import clsx from "clsx"
	import ExternalLink from "$lib/components/icons/ExternalLink.svelte"
	import { anchorAttrs } from "$lib/helpers"

	let className: string | undefined = undefined
	export { className as class }

	export let href: string | null
</script>

<a
	{href}
	class={clsx(
		className,
		"select-none",
		"py-3 px-5 md:py-4 md:px-6 bg-gray-25 inline-flex hover:bg-black",
		"focus:bg-black transition space-x-2 md:space-x-3 items-center"
	)}
	{...anchorAttrs(href)}
>
	<div class={clsx("text-white", typo.sansCaps)}><slot /></div>
	<ExternalLink class="w-3.5 h-3.5 md:w-4 md:h-4" />
</a>

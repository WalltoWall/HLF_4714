<script lang="ts">
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import type { Content } from "@prismicio/client"
	import Director from "./Director.svelte"

	export let subheading: string = ""
	export let heading: string = ""

	export let people: Content.PersonDocument[] = []
</script>

<div class="space-y-8 md:space-y-12 lg:space-y-16">
	<div class="space-y-6">
		{#if subheading}
			<p class={clsx(typo.sansCaps, "text-gray-17 text-center")}>
				{subheading}
			</p>
		{/if}

		{#if heading}
			<h2 class={clsx(typo.serifHeading, "text-gray-25 text-center")}>
				{heading}
			</h2>
		{/if}
	</div>

	<ul class={clsx("flex justify-center flex-wrap", "gap-5 md:gap-x-6")}>
		{#each people as person}
			<Director person={person.data} />
		{/each}
	</ul>
</div>

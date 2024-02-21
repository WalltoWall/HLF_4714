<script lang="ts">
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import type { Content } from "@prismicio/client"
	import Person from "./Person.svelte"

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

	<ul
		class="flex justify-center flex-wrap max-w-2xl w-full mx-auto gap-x-5 gap-y-7 md:gap-x-6 md:gap-y-10"
	>
		{#each people as person}
			<Person person={person.data} />
		{/each}
	</ul>
</div>

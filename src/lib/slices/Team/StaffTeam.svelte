<script lang="ts">
	import clsx from "clsx"
	import * as typo from "$lib/typography"
	import type { Content } from "@prismicio/client"
	import Member from "./Member.svelte"

	export let heading: string = ""

	export let people: Content.PersonDocument[] = []
</script>

<div class="space-y-8 md:space-y-12 lg:space-y-16">
	{#if heading}
		<h2 class={clsx(typo.serifHeading, "text-gray-25 text-center")}>
			{heading}
		</h2>
	{/if}

	<ul
		class="grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:gap-x-10"
	>
		{#each people as person}
			<Member person={person.data} />
		{/each}
	</ul>
</div>

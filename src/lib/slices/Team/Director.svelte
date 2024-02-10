<script lang="ts">
	import { asText, isFilled, type Content } from "@prismicio/client"
	import * as typo from "$lib/typography"
	import { PrismicImage } from "@prismicio/svelte"
	import clsx from "clsx"

	export let person: Content.PersonDocumentData

	const name = `${asText(person.firstName)} ${asText(person.lastName)}`
</script>

<li>
	<button
		class="flex flex-col items-center group w-[90px] sm:w-28 md:w-32 lg:w-[130px] outline-teal-45"
	>
		<span class="sr-only">Open {name}'s biography.</span>

		<div class="flex-shrink-0 rounded-xl bg-gray-87 overflow-hidden">
			{#if isFilled.image(person.headshot)}
				<PrismicImage
					field={person.headshot}
					class="object-cover rounded-xl h-[90px] sm:h-28 md:h-32 lg:h-[130px] w-[90px] sm:w-28 md:w-32 lg:w-[130px]"
				/>
			{/if}
		</div>

		<p class={clsx(typo.personName, "text-center text-green-24 pb-1 mt-4")}>
			{name}
		</p>
	</button>
</li>

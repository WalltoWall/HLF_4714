<script lang="ts">
	import {
		asLink,
		asLinkAttrs,
		asText,
		isFilled,
		type Content
	} from "@prismicio/client"
	import * as typo from "$lib/typography"
	import clsx from "clsx"
	import ConditionalWrap from "$lib/components/ConditionalWrap.svelte"

	export let person: Content.PersonDocumentData

	const name = `${asText(person.firstName)} ${asText(person.lastName)}`
</script>

<li class="text-center">
	<ConditionalWrap
		tag="a"
		href={asLink(person.bioLink)}
		class="outline-green-24 inline-block"
		condition={isFilled.link(person.bioLink)}
		{...asLinkAttrs(person.bioLink)}
	>
		<p class={clsx(typo.personName, "text-green-24")}>{name}</p>
		{#if person.title}
			<p class={clsx(typo.personTitle, "text-gray-17 mt-3 text-balance")}>
				{person.title}
			</p>
		{/if}
	</ConditionalWrap>
</li>

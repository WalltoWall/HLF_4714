<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte"
	import type { Content } from "@prismicio/client"
	import Oval from "$lib/components/Oval.svelte"
	import * as prismic from "@prismicio/client"
	import Directors from "./Directors.svelte"
	import type { SliceContext } from "$lib/context"
	import StaffTeam from "./StaffTeam.svelte"

	export let slice: Content.TeamSlice
	export let context: SliceContext

	const directors = context.people.filter(
		(p) => p.data.positionType === "Director"
	)
	const staffTeam = context.people.filter(
		(p) => p.data.positionType === "Staff Team"
	)
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative overflow-hidden pt-24 pb-10 container:pt-56"
>
	<Oval
		variant="opaqueReverse"
		class="absolute pointer-events-none text-green-92 opacity-60"
	/>
	<Oval
		variant="solidReverse"
		class="absolute pointer-events-none text-green-92"
	/>

	<div class="space-y-9 md:space-y-16 isolate">
		<Directors
			people={directors}
			heading={prismic.asText(slice.primary.directorsHeading)}
			subheading={prismic.asText(slice.primary.subheading)}
		/>

		<hr class="w-full border-t border-gray-87" />

		<StaffTeam
			people={staffTeam}
			heading={prismic.asText(slice.primary.staffTeamHeading)}
		/>
	</div>
</Bounded>

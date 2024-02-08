<script lang="ts">
	import * as prismic from "@prismicio/client"
	import Bounded from "./Bounded.svelte"
	import PrismicRichText from "./PrismicRichText.svelte"
	import Navigation from "./Footer/Navigation.svelte"
	import DisclaimerParagraph from "./Footer/DisclaimerParagraph.svelte"

	export let settings: prismic.Content.SettingsDocument

	const copyright = settings.data.siteCopyright?.replace(
		"{YEAR}",
		new Date().getFullYear().toString()
	)
	const navigation = prismic.isFilled.contentRelationship(
		settings.data.footerNavigation
	)
		? (settings.data
				.footerNavigation as unknown as prismic.Content.NavigationDocument)
		: undefined
</script>

<footer class="relative mt-auto space-y-6 bg-white">
	<Bounded>
		{#if prismic.isFilled.richText(settings.data.siteDisclaimer)}
			<div class="text-center">
				<PrismicRichText
					field={settings.data.siteDisclaimer}
					components={{ paragraph: DisclaimerParagraph }}
				/>
			</div>
		{/if}
	</Bounded>

	<Bounded
		class="py-5 bg-gradient-to-r from-yellow-59 to-teal-45 from-[-40%] to-[100%]"
	>
		<div class="flex flex-col items-center space-y-6">
			{#if navigation}
				<Navigation {navigation} />
			{/if}

			<p class="text-center text-white text-11 font-sans leading-1_45 capsize">
				{copyright} <br />
				Website designed & developed by
				<a
					href="https://walltowall.com"
					class="underline"
					target="_blank"
					rel="noreferrer"
				>
					Wall-to-Wall Studios. Inc
				</a>
			</p>
		</div>
	</Bounded>
</footer>

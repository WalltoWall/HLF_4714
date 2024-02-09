<script lang="ts">
	import * as prismic from "@prismicio/client"

	export let navigation: prismic.Content.NavigationDocument

	const items = navigation.data.navItems
		.filter((item) => prismic.isFilled.link(item.link))
		.map((item) => ({
			href: prismic.asLink(item.link),
			label: item.label,
			attrs: prismic.asLinkAttrs(item.link)
		}))
</script>

<nav>
	<ul class="items-center gap-y-5 gap-x-2 flex sm:gap-x-4 md:gap-x-[50px]">
		<li>
			<a href="/" class="block">
				<span class="sr-only">Navigate to home</span>
				<img
					loading="lazy"
					decoding="async"
					src="/images/logo-sm.svg"
					class="w-5 sm:w-[26px] md:w-9"
					alt="Hawaii Leadership Forum"
					width={36}
					height={36}
				/>
			</a>
		</li>

		{#each items as item}
			<li
				class="font-sans text-10 leading-1_25 capsize sm:text-11 lg:text-12 font-bold uppercase tracking-caps text-white"
			>
				<a href={item.href} {...item.attrs}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

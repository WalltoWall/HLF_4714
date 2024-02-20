<script lang="ts">
	import Bounded from "./Bounded.svelte"
</script>

<Bounded tag="header" class="relative py-4 bg-white md:py-5 lg:py-6">
	<div class="flex justify-center">
		<a href="/" class="outline-white">
			<span class="sr-only">Navigate to home</span>

			<img
				src="/images/logo.svg"
				alt="Hawaii Leadership Forum"
				loading="lazy"
				decoding="async"
				class="w-[200px] md:w-[230px] lg:w-[260px]"
				width={300}
				height={92}
			/>
		</a>
	</div>
</Bounded>

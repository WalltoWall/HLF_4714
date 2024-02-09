<script lang="ts">
	import type { RTLinkNode } from "@prismicio/client"
	import { PrismicLink } from "@prismicio/svelte"

	export let node: RTLinkNode
</script>

<PrismicLink
	field={node.data}
	class="hover:underline decoration-1 underline-offset-2 text-green-24 outline-green-24"
>
	<slot />
</PrismicLink>

<script lang="ts">
	import clsx from "clsx"

	export let tag: string = "section"
	export let collapsible = true
</script>

<svelte:element
	this={tag}
	data-collapsible={collapsible}
	{...$$restProps}
	class={clsx("px-6 md:px-8", $$props.class)}
>
	<div class="mx-auto w-full max-w-content h-full flex flex-col"><slot /></div>
</svelte:element>

<script lang="ts">
	export let tag: string = "div"
	export let condition: boolean
</script>

{#if condition}
	<svelte:element this={tag} {...$$restProps}>
		<slot />
	</svelte:element>
{:else}
	<slot />
{/if}

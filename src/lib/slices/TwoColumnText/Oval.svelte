<script lang="ts">
	import clsx from "clsx"

	export let variant: "opaque" | "solid" | "opaqueReverse" | "solidReverse"
	let className: string | undefined = undefined
	export { className as class }
</script>

<svg class={clsx(variant, className, "safari-only")} viewBox="0 0 1440 3047">
	<circle
		cx={4893}
		cy={4588}
		fill="currentColor"
		fill-rule="evenodd"
		r={4500}
		transform="matrix(-1 0 0 1 5515 -88)"
	/>
</svg>

<style lang="postcss">
	.opaque {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		width: calc(100vw + 250px);

		@screen container {
			--gutter-size: calc(100vw - 1224px);
			--offset-amnt: calc(var(--gutter-size) / -2);

			width: calc(100vw + 1200px);
		}
	}

	.solid {
		left: 0;
		right: 0;
		top: 36px;
		bottom: 0;

		width: calc(100vw + 50px);
		transform: translateX(-50px);

		@screen container {
			--gutter-size: calc(100vw - 1224px);
			--offset-amnt: calc(var(--gutter-size) / -2);

			top: 120px;

			width: calc(100vw + 350px);
			transform: translateX(-350px);
		}
	}

	.opaqueReverse {
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;

		width: calc(100vw + 250px);
		transform: tranlsateX(-250px);

		@screen container {
			--gutter-size: calc(100vw - 1224px);
			--offset-amnt: calc(var(--gutter-size) / -2);

			width: calc(100vw + 1200px);
			transform: translateX(-1200px);
		}
	}

	.solidReverse {
		right: 0;
		left: 0;
		top: 36px;
		bottom: 0;

		width: calc(100vw + 50px);

		@screen container {
			--gutter-size: calc(100vw - 1224px);
			--offset-amnt: calc(var(--gutter-size) / -2);

			top: 120px;

			width: calc(100vw + 350px);
		}
	}
</style>

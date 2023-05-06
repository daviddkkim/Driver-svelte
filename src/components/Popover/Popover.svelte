<script>
	import { clickOutside } from '../../utils/clickoutside';
	export let open = false;
</script>

<div class={'relative'}>
	<button on:click={() => (open = !open)}> <slot name="trigger" /></button>
	{#if open}
		<div
			class={'absolute top-0 left-0 width-fit height-fit border bg-white rounded-md shadow-md'}
			use:clickOutside
			on:click_outside={() => {
				open = false;
			}}
		>
			<slot name="content" />
		</div>
	{/if}
</div>

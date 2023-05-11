<script lang="ts">
	export let row: any;
	export let onInput = (row: any) => {
		console.log(row);
	};
</script>

<div class="flex h-fit w-fit items-center">
	<input type="checkbox" class="mr-2" bind:checked={row.todo} on:change={()=> {
		onInput(row)
	}}/>
	<span
		contenteditable
		class={'p-1 border border-transparent rounded-md'}
		bind:innerText={row.content}
		on:input={() => {
			onInput(row);
		}}
	/>
</div>

<style>
	[contenteditable] {
		&:hover {
			border: 1px solid theme('colors.stone.700');
		}

		&:focus {
			outline: none;
			border: 1px solid theme('colors.stone.700');
		}
	}
</style>

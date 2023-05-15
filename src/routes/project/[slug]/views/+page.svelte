<script lang="ts">
	import { debounce } from '$lib/utils/debounce';
	import { TodoItem } from '../../../../components';
	export let data;
	const submitContentChange = async (row: any) => {
		const response = await fetch('/api/updateTodoItem', {
			method: 'POST',
			body: JSON.stringify(row),
			headers: {
				'content-type': 'application/json'
			}
		});

	};

	const debouncedSubmitContentChange = debounce(submitContentChange, 300);
</script>

<div class="p-3">
	{#each data.data as row}
		<TodoItem bind:row onInput={debouncedSubmitContentChange} />
	{/each}
</div>
<button
	on:click={() => {
		console.log(data.data);
	}}>test</button
>

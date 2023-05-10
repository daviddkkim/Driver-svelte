<script lang="ts">
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

        console.log(response)
	};
</script>

<div class="p-3">
	{#each data.data as row}
		<TodoItem bind:content={row.content} onInput={submitContentChange}/>
	{/each}
</div>
<button
	on:click={() => {
		console.log(data.data);
	}}>test</button
>

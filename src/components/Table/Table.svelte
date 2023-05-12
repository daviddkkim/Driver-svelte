<script lang="ts">
	import { PlusIcon } from '../.';

	import TabelHeaderCell from './TableHeaderCell.svelte';
	const TableContainer = `bg-white border border-b-0 border-t-0 border-l-0 rounded-md text-stone-700 w-full h-fit`;
	const TableHeader = `flex border-b bg-stone-50`;
	const TableRow = ` flex`;
	const TableCell = `bg-white px-4 py-1 text-sm  border-r border-b text-stone-700 hover:bg-stone-100  overflow-hidden w-[180px] whitespace-nowrap `;

	export let onAddColClick = () => {};
	export let onDeleteColClick = (colName: string) => {};
	export let onEditColClick = (colName: string) => {};
	export let selected:string[] = [];
	export let data = [
		{ firstname: 'John', lastname: 'Doe' },
		{ firstname: 'Jane', lastname: 'Doe' }
	];
	export let column = [
		{
			header: 'firstname'
		},
		{
			header: 'lastname'
		}
	];

	const sortedData = data.map((row) => {
		return Object.values(row);
	});
</script>

<div class={TableContainer}>
	<div>
		<div class={TableHeader}>
			<TabelHeaderCell label={''} compact/>
			{#each column as col}
				<TabelHeaderCell label={col.header} onDeleteClick={onDeleteColClick} onEditClick={onEditColClick}/>
			{/each}
			<button class={`px-3`} on:click={onAddColClick}><PlusIcon height={14} width={14} /></button>
		</div>
	</div>
	<div>
		{#each sortedData as row}
			<div class={TableRow}>
				<div class={TableCell + `w-[46px]`}>
					<input
						type='checkbox'
                        bind:group={selected}
                        value={row}
					/>
				</div>
				{#each row as cell}
					<div class={TableCell}>{cell}</div>
				{/each}
			</div>
		{/each}
	</div>
	<slot name="addRowForm" />
</div>

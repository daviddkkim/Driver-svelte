<script lang="ts">
	import { PlusIcon } from '../.';
	import TabelHeaderCell from './TableHeaderCell.svelte';
	const TableContainer = `bg-white border border-b-0 border-t-0 border-l-0 rounded-md text-stone-700 w-full h-fit`;
	const TableHeader = `flex border-b bg-stone-50`;
	const TableRow = ` flex`;
	const TableCell = `bg-white px-4 py-1 text-sm  border-r border-b text-stone-700 hover:bg-stone-100  overflow-hidden w-[180px] whitespace-nowrap last:rounded-r-smfirst:rounded-l-sm`;

	export let onAddClick = () => {};
	export let onHeaderClick = (colName: string) => {};

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
			{#each column as col}
				<TabelHeaderCell label={col.header} onDeleteClick={onHeaderClick} />
			{/each}
			<button class={`px-3`} on:click={onAddClick}><PlusIcon height={14} width={14} /></button>
			<div id={'addColumnPopover'} />
		</div>
	</div>
	<div>
		{#each sortedData as row}
			<div class={TableRow}>
				{#each row as cell}
					<div class={TableCell}>{cell}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

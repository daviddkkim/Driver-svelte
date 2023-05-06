<script lang="ts">
	import { Popover, MoreHorizontalIcon } from '../.';
	const TableContainer = `bg-white border border-b-0 border-t-0 border-l-0 rounded-md text-stone-700 w-full h-fit`;
	const TableHeader = `flex border-b bg-stone-50`;
	const HeaderCell = `bg-stone-50 font-medium text-sm px-4 py-1  border-r text-stone-700 hover:bg-stone-100 w-[180px] last:rounded-r-sm first:rounded-l-sm flex justify-between items-center`;
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
				<div class={HeaderCell}>
					{col.header}
					<Popover>
						<MoreHorizontalIcon slot="trigger" width={12} height={12} />
						<div slot="content" class={'flex flex-col p-1 items-start'}>
							<button
								on:click={() => {
									onHeaderClick(col.header);
								}}
                                class={'p-1'}>Delete</button
							>
							<button class={'p-1'}>Edit</button>
						</div></Popover
					>
				</div>
			{/each}
			<button on:click={onAddClick}>+</button>
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

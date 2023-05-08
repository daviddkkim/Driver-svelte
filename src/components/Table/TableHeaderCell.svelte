<script lang="ts">
	import { MoreHorizontalIcon, Popover } from '..';
	export let label: string;
	export let onDeleteClick: null | ((header: string) => void) = null;
	export let compact: boolean = false;
	let open = false;
	const HeaderCell = `bg-stone-50 font-medium text-sm px-4 py-1  border-r text-stone-700 hover:bg-stone-100 w-[180px] flex justify-between items-center`;
	const CompactHeaderCell = `bg-stone-50 font-medium text-sm px-4 py-1  border-r text-stone-700 hover:bg-stone-100 w-[46px] flex justify-between items-center`;
</script>

<div class={compact ? CompactHeaderCell : HeaderCell}>
	{label}
	{#if onDeleteClick}
		<Popover bind:open>
			<MoreHorizontalIcon slot="trigger" width={12} height={12} />
			<div slot="content" class={'flex flex-col p-1 items-start'}>
				<button
					on:click={() => {
						open = false;
						onDeleteClick && onDeleteClick(label);
					}}
					class={'p-1'}>Delete</button
				>
				<button class={'p-1'}>Edit</button>
			</div></Popover
		>
	{/if}
</div>

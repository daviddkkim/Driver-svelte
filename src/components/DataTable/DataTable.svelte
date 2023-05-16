<script lang="ts">
	import { writable } from 'svelte/store';
	//issue with flexRender typing https://github.com/TanStack/table/issues/4778
	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import {
		createSvelteTable,
		flexRender as flexRenderOrig,
		getCoreRowModel
	} from '@tanstack/svelte-table';
	import type { ColumnDef, TableOptions } from '@tanstack/table-core/src/types';
	
    type GenericColumnDef = $$Generic<ColumnDef>;
	export let columns: GenericColumnDef[];


    type GenericData = $$Generic<ComponentProps>;

	export let data: GenericData[];
	const flexRender = <P extends Record<string, any>, C = any>(
		component: C,
		props: P
	): ComponentType<SvelteComponentTyped> =>
		flexRenderOrig(component, props) as ComponentType<SvelteComponentTyped>;

	//@ts-ignore
	const options = writable<TableOptions<T>>({
		data: data,
		columns: columns,
		//@ts-ignore
		getCoreRowModel: getCoreRowModel()
	});

	const rerender = () => {
		options.update((options) => ({
			...options,
			data: data
		}));
	};

	//@ts-ignore
	const table = createSvelteTable(options);
</script>

<div class="p-2">
	<table>
		<thead>
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th colSpan={header.colSpan}>
							{#if !header.isPlaceholder}
								<svelte:component
									this={flexRender(header.column.columnDef.header, header.getContext())}
								/>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</thead>
		<tbody>
			{#each $table.getRowModel().rows as row}
				<tr>
					{#each row.getVisibleCells() as cell}
						<td>
							<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			{#each $table.getFooterGroups() as footerGroup}
				<tr>
					{#each footerGroup.headers as header}
						<th colSpan={header.colSpan}>
							{#if !header.isPlaceholder}
								<svelte:component
									this={flexRender(header.column.columnDef.footer, header.getContext())}
								/>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</tfoot>
	</table>
	<div class="h-4" />
	<button on:click={() => rerender()} class="border p-2"> Rerender </button>
</div>

<script lang="ts">
	import { Table } from '../../../../components';

	export let data;
	export let form;

	let colType = 'text';
	let openAddCol = false;
	let openDeleteCol = false;
	let selectedCol = '';
	const columns = data.columns.map((col) => {
		return {
			header: col.column_name
		};
	});

	const onHeaderClick = (colName: string) => {
		openDeleteCol = !openDeleteCol;
		selectedCol = colName;
	};

	console.log(form);
</script>

<div class={'flex flex-col w-full'}>
	<Table
		data={data.data}
		column={columns}
		onAddClick={() => {
			openAddCol = !openAddCol;
		}}
		{onHeaderClick}
	/>
	{#if openAddCol}
		<!-- Turn into re-usable modal. Also this should probably be a popover for better ux -->
		<div class={'w-full h-full fixed items-center inset-0 bg-stone-900/25'}>
			<div
				class={'z-20 absolute bg-white border inset-2/4 -translate-y-2/4 -translate-x-2/4 max-w-[400px] w-full h-fit rounded-md shadow-lg'}
			>
				<form method="POST" action="?/addColumn">
					<div class={`p-3`}>
						<label class={'flex flex-col text-sm mb-3'} for="columnName">
							Column name
							<input
								class={'border rounded-md p-2 text-sm'}
								type="text"
								id="columnName"
								name="column_name"
							/>
						</label>
						<label class={'flex flex-col text-sm'} for="columnType">
							Column type
							<select
								class={`border rounded-md p-2 appearance-none text-sm`}
								value={colType}
								id="columnType"
								name="column_type"
							>
								<option value="text">text</option>
								<option value="checkbox">checkbox</option>
							</select>
						</label>
					</div>
					<div class={'w-full p-3 border-t bg-stone-50 flex justify-end'}>
						<label class={'text-sm flex items-center mr-auto'}>
							<input type="checkbox" class={'mr-1'} /> Create another column</label
						>
						<button class={'bg-orange-600 text-white text-sm px-2 py-1 rounded-md'} type="submit">
							Save</button
						>
					</div>
				</form>
			</div>
		</div>
	{/if}
	{#if openDeleteCol}
		<!-- Turn into re-usable modal. Also this should probably be a popover for better ux -->
		<div class={'w-full h-full fixed items-center inset-0 bg-stone-900/25'}>
			<div
				class={'z-20 absolute bg-white border inset-2/4 -translate-y-2/4 -translate-x-2/4 max-w-[400px] w-full h-fit rounded-md shadow-lg'}
			>
				<form method="POST" action="?/deleteColumn">
					<div class={`p-3`}>
						<label class={'flex flex-col text-sm mb-3'} for="columnName">
							Column name
							<input
								class={'border rounded-md p-2 text-sm opacity-50'}
								type="text"
								id="columnName"
								name="column_name"
								readonly
								value={selectedCol}
							/>
						</label>
					</div>
					<div class={'w-full p-3 border-t bg-stone-50 flex justify-end'}>
						<span class={'text-sm flex items-center mr-1 text-stone-500'}>
							this action cannot be undone</span
						>
						<button class={'bg-red-600 text-white text-sm px-2 py-1 rounded-md'} type="submit">
							Delete</button
						>
					</div>
				</form>
			</div>
		</div>
	{/if}
	<div />
</div>

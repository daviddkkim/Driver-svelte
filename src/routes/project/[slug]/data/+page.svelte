<script lang="ts">
	import { Button, PlusIcon, Table } from '../../../../components';
	import { applyAction, enhance } from '$app/forms';
	import { columnTypes } from '../../../../lib/types';
	export let data;
	export let form;
	let colType = 'text';
	let openAddCol = false;
	let openDeleteCol = false;
	let openEditCol = false;
	let selectedCol = '';
	let selected: string[] = [];

	$: columns = data.columns.map((col) => {
		return {
			header: col.column_name
		};
	});

	$: rowData = data.data;

	const onDeleteColClick = (colName: string) => {
		openDeleteCol = !openDeleteCol;
		selectedCol = colName;
	};
	const onEditColClick = (colName: string) => {
		openEditCol = !openEditCol;
		selectedCol = colName;
	};

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			openAddCol = false;
			openDeleteCol = false;
		}
	}
</script>

<div class={'flex flex-col w-full'}>
	<div class={'flex items-center px-3 h-[42px] bg-stone-100 border-b'}>
		{#if selected.length > 0}
			<form
				method="POST"
				action="?/deleteRows"
				use:enhance={({ data }) => {
					//can I do this without data.append? so i dont need javascript?
					data.append('rows', JSON.stringify(selected));
					return async ({ result, update }) => {
						//TODO: I don't actually know the diff between update and applyActions.
						await update();
						if (result.type === 'success') {
							await applyAction(result);
						}
					};
				}}
			>
				<Button size={'small'} type={'submit'}>Delete</Button>
			</form>
		{/if}
	</div>
	<!-- 	this makes the data update on page load-->
	{#key data}
		<Table
			data={rowData}
			column={columns}
			bind:selected
			onAddColClick={() => {
				openAddCol = !openAddCol;
			}}
			{onDeleteColClick}
			{onEditColClick}
		>
			<form slot="addRowForm" method="POST" action="?/addRow" use:enhance>
				<button class={`p-3`}><PlusIcon height={14} width={14} /></button>
				{#if form?.error}
					<p class={'text-red-600 py-2 px-3 m-2 border border-red-200 bg-red-50 rounded-md'}>
						{form.error}
					</p>
				{/if}
			</form>
		</Table>
	{/key}
	{#if openAddCol}
		<!-- Turn into re-usable modal. Also this should probably be a popover for better ux -->
		<div class={'w-full h-full fixed items-center inset-0 bg-stone-900/25'}>
			<div
				class={'z-20 absolute bg-white border inset-2/4 -translate-y-2/4 -translate-x-2/4 max-w-[400px] w-full h-fit rounded-md shadow-lg'}
			>
				<form
					method="POST"
					action="?/addColumn"
					use:enhance={() => {
						return async ({ result, update }) => {
							await update();
							if (result.type === 'success') {
								await applyAction(result);
								openAddCol = false;
							}
						};
					}}
				>
					<div class={`p-3`}>
						<label class={'flex flex-col text-sm mb-3'} for="columnName">
							Column name
							<input
								class={'border rounded-md p-2 text-sm'}
								type="text"
								id="columnName"
								name="column_name"
								required
							/>
						</label>
						<label class={'flex flex-col text-sm mb-3'} for="columnType">
							Column type
							<select
								class={`border rounded-md p-2 appearance-none text-sm`}
								value={colType}
								id="columnType"
								name="column_type"
								required
							>
								{#each columnTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</label>
						<label class={'flex flex-col text-sm mb-3'} for="columnDefault">
							Column default
							<input
								class={'border rounded-md p-2 text-sm'}
								type="text"
								id="columnDefault"
								name="column_default"
							/>
						</label>
					</div>
					<div class={'w-full p-3 border-t bg-stone-50 flex flex-col'}>
						{#if form?.error}
							<p class={'text-red-600 py-2 px-3 mb-2 border border-red-200 bg-red-50 rounded-md'}>
								{form.error}
							</p>
						{/if}
						<div class={'flex justify-end'}>
							<label class={'text-sm flex items-center mr-auto'}>
								<input type="checkbox" class={'mr-1'} /> Create another column</label
							>
							<Button
								on:click={() => {
									openAddCol = false;
								}}
								style={'mr-2'}
							>
								cancel
							</Button>
							<Button color={'primary'} type={'submit'}>Save</Button>
						</div>
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
						<Button
							on:click={() => {
								openDeleteCol = false;
							}}
							style={'mr-auto'}
						>
							cancel
						</Button>
						<span class={'text-sm flex items-center mr-1 text-stone-500'}>
							this action cannot be undone</span
						>
						<Button color="danger" type={'submit'}>Delete</Button>
					</div>
				</form>
			</div>
		</div>
	{/if}
	{#if openEditCol}
		<!-- Turn into re-usable modal. Also this should probably be a popover for better ux -->
		<div class={'w-full h-full fixed items-center inset-0 bg-stone-900/25'}>
			<div
				class={'z-20 absolute bg-white border inset-2/4 -translate-y-2/4 -translate-x-2/4 max-w-[400px] w-full h-fit rounded-md shadow-lg'}
			>
				<form
					method="POST"
					action="?/editColumn"
					use:enhance={({ data }) => {
						//can I do this without data.append? so i dont need javascript?
						data.append('selectedCol', JSON.stringify(selectedCol));
						return async ({ result, update }) => {
							//TODO: I don't actually know the diff between update and applyActions.
							await update();
							if (result.type === 'success') {
								await applyAction(result);
							}
						};
					}}
				>
					<div class={`p-3`}>
						<label class={'flex flex-col text-sm mb-3'} for="columnName">
							Column name
							<input
								class={'border rounded-md p-2 text-sm'}
								type="text"
								id="columnName"
								name="column_name"
								value={selectedCol}
							/>
						</label>
						<label class={'flex flex-col text-sm mb-3'} for="columnType">
							Column type
							<select
								class={`border rounded-md p-2 appearance-none text-sm`}
								value={colType}
								id="columnType"
								name="column_type"
								required
							>
								{#each columnTypes as type}
									<option value={type}>{type}</option>
								{/each}
							</select>
						</label>
						<label class={'flex flex-col text-sm mb-3'} for="columnDefault">
							Column default
							<input
								class={'border rounded-md p-2 text-sm'}
								type="text"
								id="columnDefault"
								name="column_default"
							/>
						</label>
					</div>
					<div class={'w-full p-3 border-t bg-stone-50 flex justify-end'}>
						<Button
							on:click={() => {
								openEditCol = false;
							}}
							style={'mr-auto'}
						>
							cancel
						</Button>
						<Button color="primary" type={'submit'}>Save</Button>
					</div>
				</form>
			</div>
		</div>
	{/if}
	<div />
</div>

<svelte:window on:keydown={onKeyDown} />

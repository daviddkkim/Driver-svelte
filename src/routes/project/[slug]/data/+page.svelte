<script lang="ts">
	import { Table } from '../../../../components';

	export let data;

	console.log(data)
	const columns = data.columns.map((col) => {
		return {
			header: col.column_name
		}
	});

</script>

<div class={'flex flex-col w-full'}>
	<div class={'flex items-center px-4 py-2 w-full border-b border-stone-200'}>Tool bar</div>
	<Table data={data.data} column={columns} />
</div>

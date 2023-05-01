<script lang="ts">
	const TableContainer = `bg-white border rounded-md text-stone-700 hover:bg-stone-100`;
	const TableHeader = `flex border-b`;
	const HeaderCell = `bg-white p-4  border-r text-stone-700 hover:bg-stone-100 w-full last:border-r-0 last:rounded-r-md first:rounded-l-md`;
	const TableRow = ` flex border-b last:border-b-0`;
	const TableCell = `bg-white p-4  border-r text-stone-700 hover:bg-stone-100 w-full last:border-r-0 last:rounded-r-md first:rounded-l-md`;
</script>

<div class={TableContainer}>
	<div>
		<div class={TableHeader}>
			<div class={HeaderCell}>header</div>
			<div class={HeaderCell}>header</div>
			<div class={HeaderCell}>header</div>
			<div class={HeaderCell}>header</div>
		</div>
	</div>
	<div>
		<div class={TableRow}>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
		</div>
	</div>
</div>

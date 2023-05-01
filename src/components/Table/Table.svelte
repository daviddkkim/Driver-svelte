<script lang="ts">
	const TableContainer = `bg-white border border-t-0 border-l-0 rounded-sm text-stone-700 hover:bg-stone-100`;
	const TableHeader = `flex border-b`;
	const HeaderCell = `bg-stone-50 font-medium p-4  border-r text-stone-700 hover:bg-stone-100 w-full last:border-r-0 last:rounded-r-sm first:rounded-l-sm`;
	const TableRow = ` flex border-b last:border-b-0`;
	const TableCell = `bg-white p-4  border-r text-stone-700 hover:bg-stone-100 w-full last:border-r-0 last:rounded-r-sm first:rounded-l-sm`;
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
		<div class={TableRow}>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
			<div class={TableCell}>body</div>
		</div>
	</div>
</div>

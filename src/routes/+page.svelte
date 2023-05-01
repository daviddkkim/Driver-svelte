<script lang="ts">
	const Layout = `flex flex-col gap-4`;
	const CardsLayout = `flex flex gap-2`;
	const Card = `bg-white border rounded-md p-4 text-stone-700 hover:bg-stone-100`;
	const NewButton = `border rounded-md p-4 text-stone-700 border-dashed`
</script>

<div class={Layout}>
	<h1>Projects</h1>
	<div class={CardsLayout}>
		<a href="/project/something" class={Card}> Something</a>
		<button class={NewButton}> + </button>

	</div>
</div>

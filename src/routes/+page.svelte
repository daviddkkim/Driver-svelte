<script lang="ts">
	import { DriverLogo } from '../components';

	const Layout = `flex flex-col gap-4`;
	const CardsLayout = `flex flex gap-2 px-4`;
	const Card = `bg-white border rounded-md p-4 text-stone-700 hover:bg-stone-100`;
	const NewButton = `border rounded-md p-4 text-stone-700 border-dashed`;
	const TopNav = `flex w-full px-6 py-6 font-medium text-stone-900 border-b border-stone-200`;
</script>

<div class={Layout}>
	<div class={TopNav}>
		<DriverLogo width={24} height={24} />
	</div>

	<div class={CardsLayout}>
		<a href="/project/something" class={Card}> Something</a>
		<button class={NewButton}> + </button>
	</div>
</div>

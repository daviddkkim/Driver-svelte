<script lang="ts">
	import { page } from '$app/stores';

	const TopNav = `flex w-full  px-4 py-2 font-medium`;
	const TabNav = `flex w-full border-b px-2 py-0 gap-4`;
	const TabItem = `flex px-2 py-3 rounded-sm text-stone-700 hover:bg-stone-100`;
	const ActiveTabItem = `flex px-2 py-3 rounded-sm text-stone-700 hover:bg-stone-100 border-b-2 border-orange-300`;
	let activeTabValue = $page.route.id?.substring($page.route.id.lastIndexOf('/') + 1);
</script>

<div class={TopNav}>{$page.params.slug}</div>
<div class={TabNav}>
	<a
		class={activeTabValue === 'database' ? ActiveTabItem : TabItem}
		href={`/project/${$page.params.slug}/database`}
		on:click={() => {
			activeTabValue = 'database';
		}}
	>
		Database
	</a>
	<a
		class={activeTabValue === 'views' ? ActiveTabItem : TabItem}
		href={`/project/${$page.params.slug}/views`}
		on:click={() => {
			activeTabValue = 'views';
		}}>Views</a
	>
	<a
		class={activeTabValue === 'settings' ? ActiveTabItem : TabItem}
		href={`/project/${$page.params.slug}/settings`}
		on:click={() => {
			activeTabValue = 'settings';
		}}>Settings</a
	>
</div>
<slot />

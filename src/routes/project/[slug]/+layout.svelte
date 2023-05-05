<script lang="ts">
	import { page } from '$app/stores';
	import { DriverLogo } from '../../../components';

	const TopNav = `flex w-full  px-6 py-6 font-medium text-stone-900 border-b border-stone-200`;
	const TabNav = `flex flex-col border-b px-4 py-2 gap-2 w-fit border-r border-stone-200`;
	const TabItem = `flex px-2 py-1 rounded-md text-stone-500 hover:text-stone-600 hover:bg-stone-50 `;
	const ActiveTabItem = `flex px-2 py-1 rounded-md text-stone-900 `;
	let activeTabValue = $page.route.id?.substring($page.route.id.lastIndexOf('/') + 1);
</script>

<div class={TopNav}>
	<a href={'/'} class={'font-[400] text-stone-500 hover:text-stone-600'}>
		<DriverLogo width={24} height={24} />
	</a>
	<span class={'text-stone-300 px-3'}> / </span>
	{$page.params.slug}
</div>
<div class={'flex w-full h-full'}>
	<div class={TabNav}>
		<a
			class={activeTabValue === 'data' ? ActiveTabItem : TabItem}
			href={`/project/${$page.params.slug}/data`}
			on:click={() => {
				activeTabValue = 'data';
			}}
		>
			Data
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
</div>

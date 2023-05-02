<script lang="ts">
	import { page } from '$app/stores';
	const TopNav = `flex w-full  px-4 py-2`;
	const TabNav = `flex w-full border-b px-2 py-2 gap-4`;
	const TabItem = `flex px-2 py-1 rounded-sm text-stone-700 hover:bg-stone-100`;
</script>

<div class={TopNav}>{$page.params.slug}</div>
<div class={TabNav}>
	<a class={TabItem} href={`/project/${$page.params.slug}/database`}>Database</a>
	<a class={TabItem} href={`/project/${$page.params.slug}/views`}>Views</a>
	<a class={TabItem} href={`/project/${$page.params.slug}/settings`}>Settings</a>
</div>  
<slot />

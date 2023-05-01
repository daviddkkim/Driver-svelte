<script lang="ts">
	import { page } from '$app/stores';
    const TopNav = `flex w-full border-b px-4 py-2`;
    
</script>

<div class={TopNav}>{$page.params.slug}</div>

<slot />

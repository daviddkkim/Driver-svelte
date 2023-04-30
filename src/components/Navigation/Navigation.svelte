<script lang="ts">
	const navcontainer = `bg-white border-r border-zinc-200 h-screen w-[124px] flex flex-col gap-1 p-4`;
</script>

<nav class={navcontainer}>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>
<slot />

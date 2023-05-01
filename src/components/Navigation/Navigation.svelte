<script lang="ts">
	import { DriverLogo } from '../.';
	const navcontainer = `bg-white border-r border-stone-200 h-screen w-[124px] flex flex-col gap-1 p-2`;
	const navlink = `text-stone-700 hover:text-stone-800 hover:bg-stone-100 rounded-sm px-2 py-1`;
	const logo = `mx-2`
</script>

<nav class={navcontainer}>
	<DriverLogo width={24} height={24} style={logo}/>
	<a href="/" class={navlink}>Home</a>
	<a href="/about" class={navlink}>About</a>
	<a href="/settings" class={navlink}>Settings</a>
</nav>

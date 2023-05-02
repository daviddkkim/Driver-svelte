<script>
	import '../app.css';

	const Container = `flex bg-stone-200 h-full min-h-screen w-full min-w-screen`;
	const ContentContainer =
		'flex flex-col w-full m-2 bg-white rounded-md shadow-sm border-stone-300 border';
		
</script>

<div class={Container}>
	<div class={ContentContainer}>
		<slot />
	</div>
</div>

<style>
	div {
		display: flex;
	}
</style>

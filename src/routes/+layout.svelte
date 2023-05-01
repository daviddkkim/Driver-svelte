<script>
	import '../app.css';
	import { Navigation } from '../components';

	const Container = `flex`;
	const ContentContainer = 'flex flex-col p-4 w-full';
</script>

<div class={Container}>
	<Navigation />
	<div class={ContentContainer}>
		<slot />
	</div>
</div>

<style>
	div {
		display: flex;
	}
</style>

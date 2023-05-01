<script lang="ts">
	export let height = 14;
	export let width = 22;
	export let mainColor = '#44403C';
	export let secondaryColor = '#FFFFFF';
	export let style= ``;
</script>

<svg {width} {height} class={style} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_101_19)">
		<rect width="22" height="14" rx="1" fill={mainColor} />
		<rect x="11" y="7" width="6" height="11" rx="1" fill={secondaryColor} />
	</g>
	<defs>
		<clipPath id="clip0_101_19">
			<rect {width} {height} rx="1" fill={secondaryColor} />
		</clipPath>
	</defs>
</svg>

<script lang="ts">
	let buttonProps = {
		class: [$$restProps.class]
	};
	export let color: 'default' | 'primary' | 'danger' = 'default';
	export let size: 'small' | 'medium' = 'medium';
	export let style = '';
	const ButtonPreset = `flex items-center`;

	const Size = {
		small: `px-2 h-[26px] gap-1 text-xs font-medium rounded-md`,
		medium: `px-3 h-[30px] gap-1 text-sm font-medium rounded-md`
	};
	const Color = {
		default: `bg-stone-50 border border-color-stone-600 hover:bg-stone-100 hover:border-color-stone-700`,
		primary: `bg-orange-600 border border-color-orange-700 hover:bg-orange-700 hover:border-color-orange-800 text-white`,
		danger: `bg-red-600 border border-color-red-700 hover:bg-red-700 hover:border-color-red-800 text-white`
	};
</script>

<button
	{...buttonProps}
	class={Size[`${size}`] + ' ' + Color[`${color}`] + ' ' + ButtonPreset + ' ' + style}
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave
>
	<slot name="leadingIcon" class={`mr-1`} />
	<slot>Button</slot>
	<slot name="trailingIcon" class={`ml-1`} />
</button>

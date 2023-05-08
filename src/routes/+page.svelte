<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { DriverLogo } from '../components';
	export let data;
	export let form;

	let openCreateProject = false;
	const Layout = `flex flex-col gap-4`;
	const CardsLayout = `flex flex gap-2 px-4`;
	const Card = `bg-white border rounded-md p-4 text-stone-700 hover:bg-stone-100`;
	const NewButton = `border rounded-md p-4 text-stone-700 border-dashed`;
	const TopNav = `flex w-full px-6 py-6 font-medium text-stone-900 border-b border-stone-200`;
</script>

<div class={Layout}>
	<div class={TopNav}>
		<DriverLogo width={24} height={24} />
	</div>

	<div class={CardsLayout}>
		{#each data.projects as project}
			<a href={'/project/' + project.name} class={Card}> {project.name}</a>
		{/each}
		<button
			class={NewButton}
			on:click={() => {
				openCreateProject = true;
			}}
		>
			+
		</button>
	</div>
</div>
{#if openCreateProject == true}
	<div class={'w-full h-full fixed items-center inset-0 bg-stone-900/25'}>
		<div
			class={'z-20 absolute bg-white border inset-2/4 -translate-y-2/4 -translate-x-2/4 max-w-[400px] w-full h-fit rounded-md shadow-lg'}
		>
			<form
				method="POST"
				action="?/createProject"
				use:enhance={() => {
					return async ({ result, update }) => {
						await update();
						console.log(result);
						if (result.type === 'success') {
							await applyAction(result);
							openCreateProject = false;
						}
					};
				}}
			>
				<div class={`p-3`}>
					<label class={'flex flex-col text-sm mb-3'} for="projectName">
						Project name
						<input
							class={'border rounded-md p-2 text-sm'}
							type="text"
							id="projectName"
							name="project_name"
							required
						/>
					</label>
				</div>
				<div class={'w-full p-3 border-t bg-stone-50 flex flex-col'}>
					{#if form?.error}
						<p class={'text-red-600 py-2 px-3 mb-2 border border-red-200 bg-red-50 rounded-md'}>
							{form.error}
						</p>
					{/if}
					<div class={'flex justify-end'}>
						<button
							on:click={() => {
								openCreateProject = false;
							}}
							class={'mr-auto'}
						>
							cancel
						</button>
						<button class={'bg-orange-600 text-white text-sm px-2 py-1 rounded-md'}> Save</button>
					</div>
				</div>
			</form>
		</div>
	</div>
{/if}

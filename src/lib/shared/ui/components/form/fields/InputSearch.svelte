<script>
	export let value;
	export let placeholder = 'search cars';
	export let isRequired = false;
	export let debounce;
</script>

<div class="flex items-center w-full">
	<slot />
	<input
		on:keyup={({ target: { value } }) => debounce(value)}
		type="search"
		bind:value
		{placeholder}
		x-model="q"
		class={$$props}
		required={isRequired}
	/>
</div>

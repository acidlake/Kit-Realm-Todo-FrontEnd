<script>
	export let placeholder = 'write cars';
	export let isRequired = false;
	export let value = '';
</script>

<div class="curbo-container-input">
	<slot />
	<input
		bind:value
		type="text"
		{placeholder}
		class={$$props.class + ' w-full'}
		required={isRequired}
	/>
</div>

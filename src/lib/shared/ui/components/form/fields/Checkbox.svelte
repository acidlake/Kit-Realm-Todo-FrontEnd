<script>
	export let checked = false;
	export let name = 'deafult-1';
	export let id = 'default';
</script>

<label class="flex items-center" for={id}>
	<input {id} {name} class="curbo-input-checkbox mr-2" type="checkbox" bind:checked />
	<slot />
</label>

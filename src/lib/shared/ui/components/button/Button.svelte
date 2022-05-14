<script>
	export let onclick = () => {};
</script>

<button on:click={() => onclick()} class={'curbo-primary-btn ' + $$props.class}><slot /> </button>

<script>
	export let label;
	export let properties = '';
</script>

<button on:click class={'curbo-secondary-btn ' + properties}
	>{#if label}{label}{/if}<slot /></button
>

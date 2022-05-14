<script>
	export let href;
</script>

<a {href} sveltekit:prefetch class={$$props.class}>
	<slot />
</a>

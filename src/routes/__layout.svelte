<script>
	//
	import { browser } from '$app/env';
	import core from '$core/functions';
	import '../app.css';

	core.sentryInit({
		dsn: import.meta.env.VITE_SENTRY_DSN,
		environment: import.meta.env.VITE_SENTRY_ENV
	});
	if (browser) {
		window.onunhandledrejection = function (e) {
			throw new Error(e);
		};
	}
</script>

{#if browser}
	<slot />
{/if}

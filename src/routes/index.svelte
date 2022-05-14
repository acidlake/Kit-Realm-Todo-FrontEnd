<script>
	import { HeadTags, Auth } from '$components';
	import { Text } from '$ui/components';

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'SvelteKit Todo Realm',
		description: 'Sveltekit Realm Todos',
		url: '/',
		keywords: ['sveltekit', 'realm', 'svelte'],
		searchUrl: '/'
	};
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<div class="flex flex-col justify-center items-center py-4">
		<Text text='SvelteKit Todo App' class="text-4xl font-bold" />
		<Text text='Mongodb Realm Example' class="text-xl" />
</div>
<Auth />
<div class="flex flex-col justify-center items-center py-4">
	<Text text='Login Credentials' class="text-xl font-bold" />
	<Text text='Email: demo@demo.com' class="text-xl" />
	<Text text='Password: 123456789' class="text-xl" />
</div>

<div class="flex flex-col justify-center items-center py-4">
	<Text text='Email: demo2@demo.com' class="text-xl" />
	<Text text='Password: 123456789' class="text-xl" />
</div>

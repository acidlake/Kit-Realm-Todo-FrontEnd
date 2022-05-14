<script>
  // Core
	import core from "$core/functions";
  import { user, realmResults } from "$store";
  // Components
	import { HeadTags, Todos } from '$components';
	import { Text } from '$ui/components';

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: 'Todos',
		description: 'todos',
		url: '/todos',
		keywords: ['todos'],
		searchUrl: '/todos'
	};

	const loadTodos = function(){
		core.callRealmFunction({
			functionName: 'getMyTodos',
			query: {
				realmUserId: $user.appUserId
			}
		})
	}
	// load todos

</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<div class="flex flex-col justify-center items-center py-4">
  <Text text='Todos' class="text-4xl font-bold" />
  <Text text={`Welcome: ${$user?.profile?.name ?? ''} ${$user?.profile?.lastName ?? ''} - ${$user?.email ?? ''}`} class="text-xl" />
</div>

<div class="flex flex-col justify-center items-center py-4" use:loadTodos>
	<Todos bind:user={$user} bind:todos={$realmResults} reloadData={loadTodos} />
</div>
<script>
	//
	import { user, realmResults } from "$store";
	import * as Realm from "realm-web";
	import { browser } from '$app/env';
  import { Toasts } from "$ui/components";
	import core from '$core/functions';
	import '../app.css';

	//
	$: core.isLoggedIn();

	//
	const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });
  const userCustomData = app?.currentUser?.customData;

	core.sentryInit({
		dsn: import.meta.env.VITE_SENTRY_DSN,
		environment: import.meta.env.VITE_SENTRY_ENV
	});
	if (browser) {
		window.onunhandledrejection = function (e) {
			throw new Error(e);
		};
	}

	//
	$: if (userCustomData?.actions) {
    const payload = {
      appUserId: app.currentUser.id,
      userId: userCustomData._id,
      email: userCustomData.identifier,
      actions: userCustomData?.actions,
      profile: userCustomData?.profile,
      userCustomData,
    };
    user.update(() => payload);
  }
</script>
{#if browser}
<Toasts />
<div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
  <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
    <div class="flex items-center justify-center h-14 border-b">
      <div>Kit Realm Todos</div>
    </div>
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
      <ul class="flex flex-col py-4 space-y-1">
        <li class="px-5">
          <div class="flex flex-row items-center h-8">
            <div class="text-sm font-light tracking-wide text-gray-500">Menu</div>
          </div>
        </li>
        
        
        <li>
          <a href="/todos" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Tasks</span>
						<span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">{$realmResults?.rs?.length ?? 0}</span>
          </a>
        </li>
        
       
        
        
        <li>
          <button on:click={core.logout}  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
	<slot />
</div>
	
{/if}

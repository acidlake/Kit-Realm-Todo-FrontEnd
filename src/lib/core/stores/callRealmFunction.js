import * as Realm from 'realm-web';
const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });
import { writable } from 'svelte/store';

export const realmResults = writable([]);
export const callFunction = async function (params) {
	if (!params) return false;
	const { functionName, query } = params;
	let response = {
		loading: true,
		rs: []
	}
	await app.currentUser
		.callFunction(functionName, query)
		.then((rs) => {
			if (rs) {
				if(rs?.length > 0){
					response.rs = rs;
					response.loading = false;
				}
				realmResults.update(() => response);
			}else{
				realmResults.update(() => response);
			}
		})
		.catch((err) => {
			return new Error(err);
		});

	return;
};

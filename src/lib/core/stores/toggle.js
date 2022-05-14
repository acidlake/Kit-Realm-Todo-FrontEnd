import { writable } from 'svelte/store';

function toggle(initState) {
	let { subscribe, update } = writable(initState);
	const toggle = () => update((s) => !s);
	return { subscribe, toggle };
}

export const createToggle = (state) => toggle(state);

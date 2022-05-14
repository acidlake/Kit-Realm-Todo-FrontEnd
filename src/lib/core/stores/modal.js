import { writable } from 'svelte/store';

const defaults = { id: null, show: false };

export const modal = writable(defaults);

export const dismissModal = () => {
	modal.update(() => defaults);
};

<script>
	import { createEventDispatcher } from 'svelte';
	import { getDateRows, uuid, noop } from '$lib/utils/date-time';

	const dispatch = createEventDispatcher();

	// props
	export let date;
	export let month;
	export let year;
	export let isAllowed;

	// local vars to help in render
	const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	let cells;

	// function helpers
	const onChange = (date) => {
		dispatch('datechange', new Date(year, month, date));
	};

	const allow = (year, month, date) => {
		if (!date) return true;
		return isAllowed(new Date(year, month, date));
	};

	$: cells = getDateRows(month, year).map((c) => ({
		value: c,
		allowed: allow(year, month, c)
	}));
</script>

<div class="w-[190px] h-full">
	<div class="flex flex-row items-center justify-center text-xs ">
		{#each weekdays as day}
			<span class="w-6 text-center m-auto">{day}</span>
		{/each}
	</div>

	<div class="flex flex-wrap items-center justify-center text-xs ">
		{#each cells as { allowed, value } (uuid())}
			<div
				on:click={allowed && value ? onChange.bind(this, value) : noop}
				class="w-6 h-6 rounded-full m-auto items-center flex justify-center"
				class:highlight={allowed && value}
				class:disabled={!allowed}
				class:selected={new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() ===
					new Date(year, month, value).getTime()}
			>
				{value || ''}
			</div>
		{/each}
	</div>
</div>

<style>
	.selected {
		@apply bg-curbo-blue-dacnis text-curbo-white;
	}

	.highlight {
		transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.disabled {
		@apply text-curbo-grey-silver-medal cursor-not-allowed;
	}

	.highlight:hover {
		@apply bg-curbo-white-smoke cursor-pointer;
		transform: scale(1.2);
	}

	.selected.highlight:hover {
		@apply bg-curbo-blue-turquoise text-curbo-white;
	}
</style>

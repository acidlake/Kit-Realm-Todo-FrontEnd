<script>
	import { createEventDispatcher } from 'svelte';

	import { getMonthName } from '$lib/utils/date-time';
	import Calender from './Calendar.svelte';

	const dispatch = createEventDispatcher();

	// props
	export let isAllowed = () => true;
	export let selected = new Date();
	export let name = '';

	// state
	let month, year;

	// so that these change with props
	$: {
		month = selected.getMonth();
		year = selected.getFullYear();
	}

	// handlers

	const next = () => {
		if (month === 11) {
			month = 0;
			year = year + 1;
			return;
		}
		month = month + 1;
	};

	const prev = () => {
		if (month === 0) {
			month = 11;
			year -= 1;
			return;
		}
		month -= 1;
	};

	const onDateChange = (d) => {
		dispatch('datechange', d.detail);
	};
</script>

<div class="flex flex-col justify-center items-center w-[190px] h-[200px]">
	<div class="flex  items-center  justify-between text-center text-xs w-[176px] mb-1">
		<button on:click={prev}><i class="fa-solid fa-angle-left" /></button>
		<span>{getMonthName(month)} {year}</span>
		<button on:click={next}><i class="fa-solid fa-angle-right" /></button>
	</div>
	<Calender {name} {month} {year} date={selected} {isAllowed} on:datechange={onDateChange} />
</div>

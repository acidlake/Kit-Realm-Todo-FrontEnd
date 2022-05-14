<script>
	import { Buttons } from '$ui/components';

	import DatePicker from './DatePicker.svelte';
	import { dateSelected, showDatePicker } from '$store';

	export let range = false;
	export let label_txt = 'From';
	export let width = 'w-[672px]';

	let optionsRange = [
		'Today',
		'Yesterday',
		'Last 7 days',
		'Last 30 days',
		'This months',
		'Last months',
		'Custom'
	];

	let fromCurrentDate = new Date();
	let toCurrentDate = new Date();

	const onDateChangeFrom = (d) => {
		fromCurrentDate = d.detail;
	};
	const onDateChangeTo = (d) => {
		toCurrentDate = d.detail;
	};

	const onToday = () => (toCurrentDate = new Date());

	let onCurrentDate = () => {
		showDatePicker.update(() => false)
		if (range) {
			return dateSelected.update(() => [fromCurrentDate, toCurrentDate]);
		}
		return dateSelected.update(() => [fromCurrentDate]);
	};
</script>

<div
	class="flex items-center rounded-lg shadow-2xl max-w-2xl bg-curbo-white {width} transition duration-500 ease-in-out"
>
	<div class="w-48 h-[356px] border-r border-curbo-white-smoke flex flex-col justify-evenly">
		<ul class="h-fit">
			{#each optionsRange as option}
				<li
					class="flex items-center h-9 my-1 text-sm text-curbo-grey-rainy hover:text-curbo-white hover:bg-curbo-blue-turquoise active:bg-curbo-blue-dacnis"
				>
					<button class="w-full h-full pl-9 justify-start">{option}</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex-1 grid grid-cols-4 px-8 py-7">
		<div class={`${range ? 'col-span-2 items-start' : 'col-span-4 items-center'}  flex flex-col `}>
			<label for="from" class="text-sm font-normal mb-3 ml-[6px]">{label_txt}</label>
			<DatePicker
				name="from"
				on:datechange={onDateChangeFrom}
				selected={fromCurrentDate}
				isAllowed={(date) => {
					const millisecs = date.getTime();
					if (millisecs + 25 * 3600 * 1000 < Date.now()) return false;
					if (millisecs > Date.now() + 3600 * 24 * 45 * 1000) return false;
					return true;
				}}
			/>
		</div>
		{#if range}
			<div class="col-span-2 flex flex-col items-start ml-4">
				<div class="flex w-full justify-between  mb-3">
					<label for="To" class="text-sm font-normal ml-2">To</label>
					<span
						role="button"
						class="text-xs font-normal text-curbo-blue-turquoise mr-1 hover:text-curbo-blue-dacnis active:text-curbo-blue-turquoise"
						on:click={onToday}
					>
						Set today
					</span>
				</div>
				<DatePicker
					name="to"
					on:datechange={onDateChangeTo}
					selected={toCurrentDate}
					isAllowed={(date) => {
						const millisecs = date.getTime();
						if (millisecs + 25 * 3600 * 1000 < Date.now()) return false;
						if (millisecs > Date.now() + 3600 * 24 * 45 * 1000) return false;
						return true;
					}}
				/>
			</div>
		{/if}

		<div class="col-span-4 flex flex-row items-center justify-start">
			<Buttons.Primary txt="Apply Range" class="curbo-btn-md mr-2" onclick={() => onCurrentDate()}>
				<i class="fa-solid fa-check mr-2" /> Apply range
			</Buttons.Primary>
			<Buttons.Normal on:click={() => showDatePicker.update(() => false)} txt="Apply Range" class="curbo-btn-md ">Cancel</Buttons.Normal>
		</div>
	</div>
</div>

<script>
	import { showDatePicker } from "$store";
	import { clickOutside } from "$utils";
</script>

<div use:clickOutside on:click_outside={() => showDatePicker.update(() => false)} class="relative inline-block">
	<div class="w-[166px] curbo-container-fields cursor-default ">
		<span class="text-center mr-3 flex-1 text-sm font-medium ">Date Range</span>
		<div class="flex items-center justify-center h-full border-l border-r-curbo-white-smoke pl-3">
			<span role="button" on:click={() => showDatePicker.update(() => true)}>
				<i class="fa-solid fa-calendar-days h-[14px] w-[14px]" />
			</span>
		</div>
	</div>
	{#if $showDatePicker}
		<div class="absolute top-14 right-0 "><slot /></div>
	{/if}
</div>

<script>
	import Select from 'svelte-select';
	import { Svg } from '../svg';

	export let label_txt = 'Select new car';
	export let id = 'new_dropdown';
	export let placeholder = 'Select new';

	export let options = ['Dodge', 'Bmw', 'Mercede Benz'];

	export let handleSelect = (event) => event.detail;
	export let icon = Svg;
</script>

<div class="flex flex-col curbo-icon-dropdown">
	<label for={id} class="mb-[11px] text-base font-bold">{label_txt}</label>
	<Select
		{id}
		{placeholder}
		showChevron={true}
		showIndicator
		containerClasses={$$props.class}
		items={options}
		Icon={icon}
		on:select={handleSelect}
	/>
</div>

<script>
	import { SEO } from '$components';

	const description = 'Curbo Inventario';

	export let metaData = {};

	metaData = {
		title: metaData.title ? metaData.title : 'Inventario Curbo',
		description: metaData.description ? metaData.description : description,
		...metaData
	};
</script>

<SEO {metaData} />

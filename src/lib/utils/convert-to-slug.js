export const convertToSlug = (value = '') =>
	value
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');

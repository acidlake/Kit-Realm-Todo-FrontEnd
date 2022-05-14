export const convertToCurrency = (value = { currency: '', number: 0 }) =>
	new Intl.NumberFormat('en-US', { style: 'currency', currency: value.currency }).format(
		value.number
	);

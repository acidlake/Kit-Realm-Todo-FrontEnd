export const convertToSentence = (value = '') =>
	`${value.charAt(0).toUpperCase()}${value.substr(1).toLocaleLowerCase().replace(/-/g, ' ')}`;

export const replaceWord = (value, bad, good) => value.split(bad).join(good).split(',').join(' ');

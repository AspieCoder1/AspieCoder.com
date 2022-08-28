/*
 * Copyright (c) 2022. AspieCoder
 */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};

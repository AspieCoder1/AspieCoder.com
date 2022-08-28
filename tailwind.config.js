/*
 * Copyright (c) 2022. AspieCoder
 */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'code::before': {
							content: '',
						},
						'code::after': {
							content: '',
						},
						pre: {
							backgroundColor: 'transparent',
						},
						h2: {
							paddingTop: 0,
							marginTop: 0,
							marginBottom: 0.5,
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

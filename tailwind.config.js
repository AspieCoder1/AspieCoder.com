/*
 * Copyright (c) 2022. AspieCoder
 */

const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			typography: ({ theme }) => ({
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
						'blockquote p:first-of-type::before': {
							content: '',
						},
						'blockquote p:last-of-type::after': {
							content: '',
						},
					},
				},
				gray: {
					css: {
						'--tw-prose-quote-borders': theme('colors.gray[400]'),
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(({ addVariant }) => {
			addVariant('not-last', '&:not(:last-child)');
		}),
	],
};

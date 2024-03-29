/*
 * Copyright (c) 2022. AspieCoder
 */

const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
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
						a: {
							color: theme('colors.purple.900'),
							fontWeight: 600,
							textDecoration: 'none',
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
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		plugin(({ addVariant }) => {
			addVariant('not-last', '&:not(:last-child)');
		}),
	],
};

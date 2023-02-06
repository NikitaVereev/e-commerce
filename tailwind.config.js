/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const constants = {
	black: '#161a1e',
	gray: '#9a9a9a',
	orange: '#e58e27',
	white: '#fbfbfb'
}
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	important: '#__next',
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {}
	},
	corePlugins: {
		preflight: false
	},
	plugins: []
}

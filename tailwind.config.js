/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const constants = {
	black: '#161a1e',
	gray: '#565F87',
	orange: '#e58e27',
	white: '#fbfbfb',
	header: '#150F38',
	icon: '#2A1953',
	border: '#40296C',
	main: '#020328',
	fill: '#968EC7'
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

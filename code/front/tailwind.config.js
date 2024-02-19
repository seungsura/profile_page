/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./styles/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			geologica: ['"Geologica"', 'sans-serif'],
		},
		extend: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};

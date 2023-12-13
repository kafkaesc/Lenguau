/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'action-highlight': '#00f',
			black: '#000',
			blue: '#00f',
			faded: '#aaa',
			gray: '#ddd',
			red: '#f00',
			white: '#fff',
		},
		fontFamily: {
			sans: ['Lato', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
		}
	},
	plugins: [],
};

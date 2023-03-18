/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				openAI_Primary: "#202123",
				openAI_Secondary: "#343541",
				openAI_Text: "#ececf1",
				openAI_Hover: "#2A2B32",
			},
		},
	},
	plugins: [],
};

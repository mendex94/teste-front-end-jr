import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			brand: "#F71963",
			background: {
				input: "#F6F5F2",
				primary: "#F4F4F4",
				secondary: "#2A2A2A",
			},
			text: {
				primary: "#3F3F40",
				secondary: "#9F9F9F",
				foreground: "#FFFFFF",
			},
		},
		dropShadow: {
			default: "0 4px 11px 0 rgba(0, 0, 0, 0.13)",
		},
		extend: {},
	},
	plugins: [],
};
export default config;

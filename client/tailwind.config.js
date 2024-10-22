/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			ml: "850px",
			sl: "700px",
		},
		extend: {
			colors: {
				oyange: "#ff385c",
				cream: "#f7f7f7",
			},
			borderRadius: {
				Yxl: "8rem",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
			center: true,
			padding: "15px"
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1680px"
		},
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"aircraft-cabin":
					"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1509541206217-cde45c41aa6d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YWlyY3JhZnR8fHx8fHwxNjM3MTY1ODgy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600')",
			},
			colors: {
				primary: "#4E83AD",
				accent: "#FA817D",
			},
			spacing: {
				26: "6.5rem",
			},
			maxWidth: {
				xxs: "10rem",
			},
		},
		screens: {
			sm: "460px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

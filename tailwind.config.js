/** @type {import('tailwindcss'/ <alpha-value>).Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "oklch(100% 0 0 / <alpha-value>)",
        black: "oklch(0% 0 0 / <alpha-value>)",
        default: {
          50: "oklch(98% 0.02 300 / <alpha-value>)",
          100: "oklch(96.7% 0.02 300 / <alpha-value>)",
          200: "oklch(91% 0.02 300 / <alpha-value>)",
          300: "oklch(87% 0.02 300 / <alpha-value>)",
          400: "oklch(71% 0.02 300 / <alpha-value>)",
          500: "oklch(51% 0.02 300 / <alpha-value>)",
          600: "oklch(44% 0.02 300 / <alpha-value>)",
          700: "oklch(37% 0.02 300 / <alpha-value>)",
          800: "oklch(27% 0.02 300 / <alpha-value>)",
          900: "oklch(21% 0.02 300 / <alpha-value>)",
          950: "oklch(14% 0.02 300 / <alpha-value>)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

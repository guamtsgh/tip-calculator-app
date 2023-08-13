/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "dark-cyan": "hsl(183, 100%, 15%)",
      "dark-grayish-cyan": "hsl(186, 14%, 43%)",
      "grayish-cyan": "hsl(184, 14%, 56%)",
      "light-grayish-cyan": "hsl(185, 41%, 84%)",
      "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      warn: "#d98b78",
    },
    extend: {},
  },
  plugins: [],
};

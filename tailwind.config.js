/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Baris ini sangat penting
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

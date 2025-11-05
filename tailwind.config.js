/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#637AB9',
        secondary: '#4FB7B3',
        accent: '#A8FBD3',
        // Renamed from 'base' to avoid collision with Tailwind's text-base font-size utility
        brand: '#31326F',
        'text-dark': '#0E0F1A',
        'text-light': '#E6E8EF',
        // Provide a clearer surface color name (kept existing key for compatibility)
        'bg-light': '#F9FAFB',
        surface: '#F9FAFB',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#33E6FF',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(51, 230, 255, 0.3)',
        'glow-sm': '0 0 12px rgba(51, 230, 255, 0.2)',
      },
    },
  },
  plugins: [],
}

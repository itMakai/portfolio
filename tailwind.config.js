/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: 'rgba(24, 24, 27, 0.6)',
        'surface-strong': 'rgba(39, 39, 42, 0.8)',
        card: 'rgba(24, 24, 27, 0.4)',
        primary: '#3b82f6',
        accent: '#8b5cf6',
        'accent-2': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

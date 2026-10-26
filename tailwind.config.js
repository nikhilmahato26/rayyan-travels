/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102747',
          'navy-dark': '#0B1C33',
          'navy-light': '#1A3B66',
          blue: '#1769AA',
          'blue-hover': '#125488',
          'blue-light': '#EBF3FA',
          gold: '#E7B44A',
          'gold-hover': '#D9A436',
          'gold-light': '#FDF8EC',
          bg: '#F5F7FA',
          text: '#172B3A',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 39, 71, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 39, 71, 0.16)',
        'elevated': '0 20px 40px -10px rgba(16, 39, 71, 0.2)',
      }
    },
  },
  plugins: [],
}

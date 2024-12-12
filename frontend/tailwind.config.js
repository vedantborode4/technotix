/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': ['2.5rem', {
          lineHeight: '2.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        }],
      }
    },
    
  },
  plugins: [],
}
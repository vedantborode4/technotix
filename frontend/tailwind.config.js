/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      scrollBehavior: {
      smooth: 'smooth',
      },
      fontSize: {
        '4xl': ['2.5rem', {
          lineHeight: '2.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        }],
      },
      backgroundImage: {
        "aboutimg": "url('./src/assets/img/about.jpg')",
        "hero-bg-img": "url('./src/assets/img/hero.jpg')",
        "contact-bg-img": "url('./src/assets/img/contact.jpg')"
      }
    },
    
  },
  plugins: [],
}
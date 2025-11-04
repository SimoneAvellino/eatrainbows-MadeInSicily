import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        turquoise: '#54b0ae', // Blue Turquoise
        sky: '#7eaed2', // Sky Blue
        sunshine: '#f8db74', // Sunshine Yellow
        cobalt: '#03267e', // Deep Cobalt
        porcelain: '#e7eae7', // Porcelain White
      },
      boxShadow: {
        subtle: '0 10px 20px rgba(0,0,0,0.08)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out both',
        bounceY: 'bounceY 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

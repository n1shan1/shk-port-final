/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        movePoints: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        moveSmallPoints: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveDots: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100px)' },
        },
      },
      animation: {
        'move-points': 'movePoints 10s linear infinite',
        'move-small-points': 'moveSmallPoints 3s linear infinite',
        'move-dots': 'moveDots 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


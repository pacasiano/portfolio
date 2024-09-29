/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        // sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        pulseGrowShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(0.9)' },
          '75%': { transform: 'scale(1.1)' },
        },
        pulseHold: {
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'pulse-custom': 'pulseGrowShrink 1.5s ease-in-out infinite, pulseHold 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


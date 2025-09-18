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
      backgroundImage: {
        'dots': "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent 0)"
      },
      colors: {
        primary: "#1E1E2E",     // dark gray-purple (body text)
        secondary: "#6E6A86",   // muted lavender-gray (subtext)
        slash: "#C4B5FD",       // violet-200 (section titles)
        accent: "#8B5CF6",      // violet-500 (main accent)
        accentDark: "#7C3AED",  // violet-600 (hover accent)
        highlight: "#F472B6",   // pink-400 (hover contrast)
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


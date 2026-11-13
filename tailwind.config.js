/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#030917',
        'bg-secondary': '#071329',
        'card-surface': 'rgba(13, 33, 68, 0.55)',
        'brand-primary': '#030917',
        'brand-secondary': '#071329',
        'brand-navy': '#0d2144',
        'brand-card': 'rgba(13, 33, 68, 0.55)',
        'brand-cyan': '#38BDF8',
        'brand-amber': '#F59E0B',
        'accent-amber': {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        'accent-cyan': {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          dark: '#0284C7',
        },
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.35)',
        'glow-composite': '0 0 50px -10px rgba(56, 189, 248, 0.25), 0 0 30px -10px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}

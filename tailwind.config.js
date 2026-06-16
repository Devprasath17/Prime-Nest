/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#C9A84C',
          600: '#b8860b',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#111111',
          300: '#0d0d0d',
          400: '#0a0a0a',
          500: '#080808',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #f0d080 50%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
};

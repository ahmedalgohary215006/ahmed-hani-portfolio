/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          alt: '#080808',
        },
        card: {
          DEFAULT: '#101010',
          alt: '#121212',
        },
        ink: {
          DEFAULT: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
        },
        accent: {
          DEFAULT: '#67E8F9',
        },
      },
      fontFamily: {
        en: ['Manrope', 'Inter', 'sans-serif'],
        ar: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(103, 232, 249, 0.12)',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '30%': { transform: 'translate(3%, 2%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '70%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
      },
    },
  },
  plugins: [],
};

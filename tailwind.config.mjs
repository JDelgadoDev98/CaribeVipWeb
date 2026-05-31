/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'caribe': {
          50: '#e6f7ff',
          100: '#b3e8ff',
          200: '#80d9ff',
          300: '#4dcaff',
          400: '#1abcff',
          500: '#00a3e6',
          600: '#0080b3',
          700: '#005c80',
          800: '#003a4d',
          900: '#001a26',
        },
        'navy': {
          800: '#0a1628',
          900: '#060e1a',
          950: '#030810',
        },
        'sol': '#f5b800',
        'naranja': '#e85d04',
        'celeste': '#38bdf8',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

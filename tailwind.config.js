/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFE5E5', // Soft rose
          DEFAULT: '#FF6B6B', // Rose
          dark: '#E74C3C', // Dark rose
        },
        secondary: {
          light: '#E0F7FA', // Mint
          DEFAULT: '#4ECDC4', // Teal
          dark: '#2C3E50', // Navy
        },
        accent: {
          light: '#FFF5E6', // Pastel orange
          DEFAULT: '#FFB74D', // Orange
          dark: '#F57C00', // Dark orange
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
          dark: '#9E9E9E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
    },
  },
  plugins: [],
} 
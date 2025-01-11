/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7c3aed', // Light shade of purple
          DEFAULT: '#6b21a8', // Default shade
          dark: '#4c1d95', // Dark shade
        },
        secondary: {
          light: '#34d399', // Light green
          DEFAULT: '#10b981', // Default green
          dark: '#047857', // Dark green
        },
        accent: '#f43f5e', // Custom accent color (e.g., red)
        neutral: '#64748b', // Neutral color (e.g., slate)
        background: '#f8fafc', // Background color
      },
    },
  },
  plugins: [],
};

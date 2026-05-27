/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // All the color gradient utilities used in the project
    'from-blue-600', 'from-blue-400', 'from-blue-50', 'from-gray-50',
    'to-purple-800', 'to-blue-50', 'to-indigo-600', 'to-transparent',
    'via-indigo-700',
    'text-white', 'text-blue-100', 'text-blue-600', 'text-gray-700', 'text-gray-600', 'text-green-500', 'text-red-600',
    'bg-white', 'bg-blue-400', 'bg-purple-400', 'bg-red-50', 'bg-yellow-300',
    'hover:bg-yellow-300', 'hover:shadow-3xl', 'hover:scale-105', 'hover:opacity-100', 'hover:translate-x-2', 'hover:shadow-lg',
    'group-hover:shadow-3xl', 'group-hover:scale-105', 'group-hover:opacity-100',
    'animate-pulse', 'animate-fadeIn', 'animate-slideIn',
    'text-transparent', 'bg-clip-text',
    'shadow-2xl', 'shadow-3xl',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6366f1',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
        slideIn: 'slideIn 0.8s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-in-out forwards',
        slideInRight: 'slideInRight 0.8s ease-in-out forwards',
        'bounce-slow': 'bounce-slow 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

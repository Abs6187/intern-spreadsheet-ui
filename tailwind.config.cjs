
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        priority: {
          low: '#10B981',
          medium: '#F59E0B',
          high: '#EF4444',
        },
        status: {
          todo: '#F97316',
          inProgress: '#3B82F6',
          completed: '#10B981',
        },
      },
    },
  },
  plugins: [],
};

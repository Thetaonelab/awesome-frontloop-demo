/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#0f1222',
        accent: {
          DEFAULT: '#6d3ed8',
          soft: '#efeaff',
          deep: '#5325b8',
        },
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(40, 24, 90, 0.45)',
        card: '0 10px 30px -18px rgba(40, 24, 90, 0.35)',
      },
    },
  },
  plugins: [],
};

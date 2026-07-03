/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: '#f4f3ee',
          surface: '#eeede6',
          inverse: '#191817',
          ink: '#191817',
          secondary: '#5a554e',
          muted: '#8a847a',
          accent: '#c96442',
          'accent-hover': '#b55738',
          'accent-soft': '#e89268',
          border: '#d8d3c8',
          success: '#6b7a3d',
          warning: '#c98a42',
          danger: '#a53e2a',
        },
      },
      fontFamily: {
        serif: ['Tiempos Headline', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

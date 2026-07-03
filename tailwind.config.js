/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#f5f0e6',
          card: '#fffaf0',
          hover: '#ede4d0',
          border: '#d4c5a0',
          green: '#6b8e4e',
          blue: '#5b7c99',
          purple: '#9b6b9e',
          red: '#c44536',
          yellow: '#d4a017',
          text: '#3d3528',
          muted: '#8a7a65',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

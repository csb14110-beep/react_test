/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 다크 모드 활성화
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['"IBM Plex Mono"', 'monospace'],
        'reem': ['"Reem Kufi"', 'sans-serif'],
      },
    },
    screens: {
      mobile: '501px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
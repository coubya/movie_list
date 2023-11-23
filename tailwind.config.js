/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'light': '#E6E9F0',
      'dark': '#1F2937',
      'searchBarColorDark': '#374151',
      'searchBarTextColor': '#9CA3AF',
      'stone': '#D6D3D1',
      'slate': '#1e293b'
    }
  },
  plugins: [],
}


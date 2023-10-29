/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'sm-black': '1px 1px 1px #000',
        'sm-white': '-1px 1px 2px #ccc',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


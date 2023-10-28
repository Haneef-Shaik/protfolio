/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl-blue': '1px 1px 4px rgb(59,130,246)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


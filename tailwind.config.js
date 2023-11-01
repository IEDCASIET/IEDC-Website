/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '84': '21rem',
        '120':'40rem',
        '121':'55rem',
        '122':'-35rem'
      }
    },
  },
  plugins: [],
}
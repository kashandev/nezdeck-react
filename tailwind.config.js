/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: '#112E26',
      }
    }
  },
  plugins: [],
}

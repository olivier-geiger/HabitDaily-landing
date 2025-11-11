/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // si tu utilises le dossier app/
    "./pages/**/*.{js,ts,jsx,tsx}", // si tu utilises le dossier pages/
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

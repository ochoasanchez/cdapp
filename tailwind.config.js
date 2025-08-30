/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,astro}", 
      "./index.html",
    ],
    safelist: [
      'border-pink-500',
      'border-emerald-500',
      'bg-pink-500',
      'bg-emerald-500',
      'text-pink-500',
      'text-emerald-500',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}
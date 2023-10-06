/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './dist/index.html',
        "./src/**/*.{html,js}"],
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'coffebg': "url('./src/images/bg-img.jpg')",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        'bgimg': "url('../images/bg-img.jpg')"
      },
      fontFamily:{
        hammersmith: ['"Hammersmith One"', 'sans-serif'],
      },


    },
  },
  plugins: [],
}



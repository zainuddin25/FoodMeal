/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fira' : 'Fira Code',
        'playfair' : 'Playfair Display'
      },
      colors: {
        'orange-primary' : '#ff5331',
        'green-primary' : '#70a70e',
        'text-secondary' : '#737373'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

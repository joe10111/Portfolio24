/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // default, adjust if necessary
        'md': '768px', // default, adjust if necessary
        'lg': '1024px', // default, adjust if necessary
        'xl': '1280px', // default, adjust if necessary
        '2xl': '1536px', // default, adjust if necessary
      },
      width: {
        'logo-sm': '5rem', // Example sizes
        'logo-md': '6rem',
        'logo-lg': '8rem',
      }
    },
  },
  plugins: [],
}


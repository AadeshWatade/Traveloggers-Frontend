/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display, ui-sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        logoColor: '#FAFF00',
        acccentColor: '#00bcca',
      },
    },
  },
  plugins: [],
};

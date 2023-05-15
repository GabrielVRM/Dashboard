/** @type {import('tailwindcss').Config} */
export default {
  content: [
'./src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      colors:{
        gray:{
          700: '#121214',
          900: '#09090a'
        }
      }
    },
  },
  plugins: [],
}


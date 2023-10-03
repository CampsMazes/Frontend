/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT:'15px'
      }
    },
    extend: {
      colors: {
      
        'primary': '#1F2F98',
        'secondary': '#2EAAFA',
        'textWhite': '#fff',
        'blue':'#EFF8FF',
        'dark':'#6B6B6B',
        
      },
      fontFamily:{
        primary:'Poppins'
      },
      backgroundImage:{
        logo:'url(../images/logo.png)',
        girl:'url(../images/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink-transformed 1.png)'
      },
      width: {
        'wi': '350px',
      },
      height: {
        'hi': '250px',
      },
    },
  },
  plugins: [],
}
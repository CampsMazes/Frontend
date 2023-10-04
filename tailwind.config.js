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
        'light':'#EFF8FF',
        'dd':'#101828',
        'ld':'#7F8490',
        'mdd':"#171E2C",
        "fdd":"#98A2B3",
        'lightdark':'#D9D9D9',
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
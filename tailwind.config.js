/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm:'576px',
    //   md:'768px',
    //   lg:'992px',
    //   xl:'1200px'
    // },
    // container: {
    //   center: true,
    //   padding: '1rem'
    // },
    extend: {
      fontFamily: {
        poppins:"'Poppins' sans-serif",
        roboto: "'Roboto' sans-serif"
      },
      colors:{
        "primary":"#FD3D57",
        
        // brightRed:'hsl(12, 80%, 59%)',
        // brightRedLight:'hsl(12, 88%, 69%)',
        // brightRedSupLight:'hsl(12, 88%, 95%)',
        // darkBlue:'hsl(228, 39%, 23%)',
        // darkGrayishBlue:'hsl(227, 12%, 61%)',
        // veryDarkBlue:'hsl(233, 12%, 13%)',
        // veryPaleRed:'hsl(13, 100%, 96%)',
        // veryLightGray:'hsl(0, 0%, 98%)',
      }
    },
  },
  variants:{
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
  plugins: [],
}


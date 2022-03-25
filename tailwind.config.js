module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        theme : '#2A2A2A',
        primary : '#5F9EA0' ,
        
      },
      fontFamily : {
        mont : ['Montserrat' , 'sans-serif']
      }
    },
    screens: {
      '2xl': {'max': '1835px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  
  plugins: [],
}
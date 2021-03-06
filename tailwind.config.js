module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      pp: '320px',

      sm: '360px',
      // => @media (min-width: 576px) { ... }

      md: '390px',
      // => @media (min-width: 960px) { ... }

      ip: '768px',

      lg: '1000px',

      xl: '1920px'

      // => @media (min-width: 1440px) { ... }

      // CELULAR NA HORIZONTAL

      //MOTO G

      //PIXEL

      //PIXEL 2
    },

    extend: {
      margin: {
        ot: '350px',
        at: '440px',
        al: '590px',
        es: '800px',
        qu: '30px',
        ma: '338px',
        gd: '900px'
      },

      width: {
        tm: '17.5rem',
        mp: '500px',
        bt: '54px',
        tg: '505px',
        bt: '440px',
        gd: '700px'
      },

      height: {
        bt: '52px',
        an: '560px'
      },

      colors: {
        'verde-lodo': '#0a686c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

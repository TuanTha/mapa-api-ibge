module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '300px',
      // => @media (min-width: 576px) { ... }

      md: '390px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px'
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      margin: {
        ot: '350px',
        at: '415px',
        es: '800px',
        qu: '30px',
        ma: '338px'
      },

      width: {
        tm: '17.5rem',
        mp: '500px',
        bt: '54px',
        tg: '505'
      },

      height: {
        bt: '52px',
        an: '560px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

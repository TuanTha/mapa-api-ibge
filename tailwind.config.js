module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        ot: '350px',
        at: '415px',
        es: '800px',
        qu: '30px'
      },

      width: {
        tm: '17.5rem',
        mp: '500px',
        bt: '54px'
      },

      height: {
        bt: '52px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

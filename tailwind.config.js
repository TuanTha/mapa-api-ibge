module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        ot: '350px'
      },

      width: {
        tm: '17.5rem',
        mp: '500px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

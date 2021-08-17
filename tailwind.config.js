module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Used in Google's Premier League page
        'premier-league-purple': '#3F1052',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

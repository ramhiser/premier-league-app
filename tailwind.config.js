module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Used in Google's Premier League page
        'premier-league-purple': '#3F1052',
        'standings-header-gray': '#70757A',
        'standings-border-gray': '#F5F5F5',
        "standings-season-dropdown": "#F1F3F4"
      },
      minWidth: {
        '32': '32px',
        '321': '321px',
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'teal': {
          50: '#f0fdfd',
          600: '#008080',
        },
        'coral': {
          500: '#FF6F61',
          600: '#FF5A4B',
        }
      },
    },
  },
  plugins: [],
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      spacing: {
        '900px': '56.25rem',
        '300px': '18.75rem',
        '110px': '6.875rem',
        '150px': '9.375rem',
        '240px': '15rem',
        '200px': '12.5rem',
      },
      minWidth: {
        '300px': '18.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

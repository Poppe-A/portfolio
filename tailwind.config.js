module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        testColor: {
          DEFAULT: '#C6D166',
          light: '#C6D166',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

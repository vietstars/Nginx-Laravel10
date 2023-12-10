const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [ 
    "./resources/js/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: { 
      sans: ['Satoshi','Roboto','sans-serif','ui-sans-serif'], 
      robo: ['Roboto','Satoshi','sans-serif','ui-sans-serif'] 
    },
  },
  plugins: [],
});
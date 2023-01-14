const { join } = require('path');

module.exports = {
  darkMode: "class", 
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
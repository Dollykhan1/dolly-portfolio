const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily:{
      nunito: '"Nunito", sans-serif',
      playwrite: '"Playwrite NG Modern", cursive'
    }},
  },
  plugins: [],
  darkMode: "class"
});


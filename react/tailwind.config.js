/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants:{
    extends:{}
  },
  theme: {
    flex: {
      myFlex: '1 1 53%',
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extends: {},
  },
  theme: {
    flex: {
      myFlex: "1 1 53%",
    },
    keyframes: {
      rolling: {
        "0%": {
          transform: "translateX(0px)",
        },
        "100%": {
          transform: "translateX(-1400px)",
        },
      },
    },
    animation: {
      slider: "slider 5s linear infinite",
    },
  },
  plugins: [],
};

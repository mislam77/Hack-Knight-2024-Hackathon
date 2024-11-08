/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        popthin: ["Poppins-Thin", "sans-serif"],
        popextralight: ["Poppins-ExtraLight", "sans-serif"],
        poplight: ["Poppins-Light", "sans-serif"],
        popregular: ["Poppins-Regular", "sans-serif"],
        popmedium: ["Poppins-Medium", "sans-serif"],
        popsemibold: ["Poppins-SemiBold", "sans-serif"],
        popbold: ["Poppins-Bold", "sans-serif"],
        popextrabold: ["Poppins-ExtraBold", "sans-serif"],
        popblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

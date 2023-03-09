/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lucky: ["Luckiest Guy", "cursive"],
        leckton: ["Lekton", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        singleDay: ["Single Day", "cursive"]
      },
    },
  },
  plugins: [],
}

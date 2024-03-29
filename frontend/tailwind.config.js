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
        raleway: ["Raleway", "sans-serif"],
        singleDay: ["Single Day", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        lekton: ["Lekton", "sans-serif"],
      },
      colors: {
        'nav-link': 'white',
        'main-bg': '#C9E5EB',
        'bg-blue': '#27B6E5',
        'bg-dg': '#F8F9FA',
        'mobile-clicked': '#BFDBFE',
      },
      fontSize: {
        'termsheading': '1.5rem',
        'termsbody': '1rem',
      },
    },
  },
  plugins: [],
}

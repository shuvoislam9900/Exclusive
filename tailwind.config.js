/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primaryWhite: "#FAFAFA",
        komola: "#DB4444",
        cardBg: "#F5F5F5",
        holud: "#FFAD33",
        dhusor:"#808080"
      },
    },
  },
  plugins: [],
};


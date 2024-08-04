/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#64748b",
        dark: "#164e63",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

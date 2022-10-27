/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1D2130",
        },
        "light-violet": "#E0E4FC",
        "light-pink": "#f9f0fb",
        "light-green": "#a2f0c6",
        "light-blue": "#3868fd",
        main: "#F0F2FE",
      },
    },
  },
  plugins: [],
};

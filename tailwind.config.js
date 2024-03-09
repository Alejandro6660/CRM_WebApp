/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFFAFF",
        blackColor: "#050401",
        textColor: "#303036",
        blueColor: "#004E98",
        blueColorLigth: "#3A6EA5",
        blueColorDark: "#003459",
        orangeColor: "#FF6700",
      },
    },
  },
  plugins: [],
};

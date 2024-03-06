/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFFAFF",
        blackColor: "#050401",
        blueColor: "#30BCED",
        orangeColor: "#FC5130",
        textColor: "#303036",
      },
    },
  },
  plugins: [],
};

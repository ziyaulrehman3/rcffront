/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Ensure this is correct
  theme: {
    extend: {
      fontFamily: {
        shippori: ['"Shippori Mincho B1"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        purpleblack: "#282536",
        brickorange: "#E3501F",
        forest: "#419039",
        overorange: "#D45910",
        readmoregreen: "#034C5B",
        strokeyellow: "#F0CF10",
        graytext: "#787878",
      },
      
    },
  },
  plugins: [],
};
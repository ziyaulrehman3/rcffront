/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Ensure this is correct
  theme: {
    extend: {
      fontFamily: {
        shippori: ['"Shippori Mincho B1"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
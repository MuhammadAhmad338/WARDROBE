/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"]
      },
      screens: {
        'custom-lg': '1132px',
      },
      colors: {
        'peach': '#FFDAB9', // Adjust the hex code to match your desired peach shade,
        'peach-lightest': '#FFF4E5', // Adjusted to a lighter shade of peach
      },
    },
  },
  plugins: [
     // ...
     require('tailwind-scrollbar'),
  ],
}
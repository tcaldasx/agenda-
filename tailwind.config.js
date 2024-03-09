/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: '#3e5e63',
        Secundario: '#588184',
      },
    },
  },

  plugins: [require("daisyui")],
}
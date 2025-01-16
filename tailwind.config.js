/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        tile: "inset -1px -1px 6px #0b0b0b, inset 6px 6px 6px #2d2d2d",
      },
    },
  },
  plugins: [],
}


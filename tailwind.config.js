/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        tile: "inset -2px -2px 6px #0b0b0b, inset 6px 6px 6px #2d2d2d",
        line: "0 0 6px 1px rgba(255,193,0,0.8)",
        circle: "0 0 6px 2px rgba(255, 193, 0, 0.8)"
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


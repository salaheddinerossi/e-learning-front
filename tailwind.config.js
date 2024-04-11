/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
}

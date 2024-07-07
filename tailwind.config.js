/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-sm": { max: "650px" },
      },
    },
  },
  plugins: [],
};

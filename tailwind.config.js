/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "user-card": "0px 4px 64px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};

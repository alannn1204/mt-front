/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // semua file Next.js di folder app
    "./components/**/*.{js,ts,jsx,tsx}", // semua component kita
  ],
  theme: {
    extend: {
      keyframes: {
        "text-gradient": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        "text-gradient": "text-gradient 5s ease infinite",
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};

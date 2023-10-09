/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071952",
        "nav-back": "#000035",
        "dark-teal": "#0B666A",
        teal: "#35A29F",
        mint: "#97FEED",
        "dark-mint": "#8ad6cc",
        primary:"#4f34eb"
      },
    },
  },
  plugins: [],
};

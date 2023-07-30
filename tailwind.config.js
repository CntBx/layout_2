/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer: "#CED2D4 ",
        posts: "#808A8F",
        personal_card: "#6B7280",
        button: "#6B7280",
      },
      fontFamily: {
        Commissioner: "Commissioner",
      },
    },
  },
  plugins: [],
};

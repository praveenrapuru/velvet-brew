/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        velvet: {
          50: "#faf7f5",
          100: "#f5efe9",
          200: "#e8ddd3",
          300: "#d4c4b5",
          400: "#b39d88",
          500: "#8b7355",
          600: "#6b5344",
          700: "#4a3728",
          800: "#2d1f14",
          900: "#1a110a",
        },
        gold: "#d4a574",
        espresso: "#2c1810",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

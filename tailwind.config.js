/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0a0e27",
          card: "#1a1f3a",
          text: "#ffffff",
          border: "#2a3050",
          accent: "#00a86b",
        },
        light: {
          bg: "#f5f7fa",
          card: "#ffffff",
          text: "#1a1a1a",
          border: "#e0e0e0",
          accent: "#007a5e",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideInUp: "slideInUp 0.7s ease-out",
        slideInDown: "slideInDown 0.7s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
        "gradient-light": "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
      },
    },
  },
  plugins: [],
};

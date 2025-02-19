/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#4f46e5", // Darker indigo
        tertiary: "#fafafa", // Light background
        accent: "#818cf8", // Light indigo
        success: "#22c55e", // Green
        warning: "#eab308", // Yellow
        error: "#ef4444", // Red
        textPrimary: "#18181b", // Almost black
        textSecondary: "#71717a", // Gray
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        slideUp: "slideUp 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'glass': '0 0 15px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}

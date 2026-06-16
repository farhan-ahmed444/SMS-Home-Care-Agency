/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D28D9",
          light: "#8B5CF6",
          lighter: "#A78BFA",
          pale: "#EDE9FE",
          washed: "#F5F3FF",
          dark: "#5B21B6",
        },
        secondary: {
          DEFAULT: "#111827",
          light: "#1F2937",
          lighter: "#374151",
        },
        neutral: {
          DEFAULT: "#F8F7FC",
          light: "#FCFCFF",
          dark: "#E5E4ED",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F9FAFB",
        }
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-sm": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.06), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 20px -2px rgba(109, 40, 217, 0.08)",
        "card-hover": "0 20px 40px -8px rgba(109, 40, 217, 0.15)",
        "elevated": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bce3ff",
          300: "#8fd1ff",
          400: "#59b8ff",
          500: "#2a99f6",
          600: "#137ad6",
          700: "#1262ad",
          800: "#144c83",
          900: "#163f6c",
        },
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },
        base: {
          950: "#07111f",
          900: "#0b1526",
          800: "#13213a",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(10, 24, 49, 0.35)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at top, rgba(42, 153, 246, 0.16), transparent 35%), radial-gradient(circle at 80% 10%, rgba(249, 115, 22, 0.12), transparent 25%), linear-gradient(180deg, rgba(7,17,31,1) 0%, rgba(11,21,38,1) 40%, rgba(7,17,31,1) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

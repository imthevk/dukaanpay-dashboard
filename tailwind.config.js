/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        galano: ["Galano Grotesque", "sans-serif"],
      },
      fontSize: {
        xsm: "13px",
        "3xl": "32px",
      },

      colors: {
        primary: {
          100: "#146EB4",
          200: "#0E4F82",
        },
        secondary: {
          100: "#1E2640",
          200: "#353C53",
          300: "#17B31B",
          400: "#ffffff1a",
        },
        black: {
          12: "#1A181E",
          30: "#4D4D4D",
          50: "#808080",
          60: "#999999",
          85: "#D9D9D9",
          90: "#E6E6E6",
          95: "#F2F2F2",
          98: "#FAFAFA",
          100: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

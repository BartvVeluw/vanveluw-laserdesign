/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // optionele dark mode via .dark op <html>
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        coal: {
          900: "#0f1112",
          800: "#141618",
          700: "#1b1e21",
          600: "#2a2f33",
          500: "#3b4248",
        },
        wood: {
          50: "#faf7f2",
          100: "#f3ede2",
          200: "#e6d7be",
          300: "#d8bf96",
          400: "#caa873",
          500: "#b88d49",
          600: "#9f7332",
          700: "#7d5927",
        },
        brass: {
          50: "#fff9e8",
          100: "#fef0c2",
          200: "#fde28d",
          300: "#f8cf4c",
          400: "#e8b92f",
          500: "#c79a1e", // primary
          600: "#9f7a19",
        },
        steel: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dcdfe3",
          300: "#c7ccd2",
          400: "#a9b0b8",
          500: "#8a939e",
        },
        ocean: {
          50: "#ecfbf7",
          100: "#ccf5ea",
          200: "#9ce6d4",
          300: "#69d5be",
          400: "#36bfa3",
          500: "#1aa28a",
          600: "#10806d",
        },
      },
      fontFamily: {
        display: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Open Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 16px -6px rgba(0,0,0,0.12)",
        soft: "0 2px 8px -4px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      backgroundImage: {
        "site-gradient":
          "conic-gradient(at 100% 0%, #fafafa, white 30%, #f6f6f6 60%, white)",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f5f7f8",
          100: "#e7ecef",
          200: "#cfd9de",
          300: "#aec0c9",
          400: "#78909d",
          500: "#5e7480",
          600: "#445762",
          700: "#25313a",
          800: "#172129",
          900: "#0a1015",
          950: "#05080b",
        },
        cyanbrand: {
          300: "#6be7ff",
          400: "#27c8ee",
          500: "#11a8d6",
          600: "#087fa8",
        },
        amberline: {
          300: "#ffd88a",
          400: "#f5b84b",
          500: "#d9901f",
        },
        porcelain: {
          50: "#fbfcfc",
          100: "#f1f5f6",
          200: "#dde7eb",
        },
        frost: "#eff8fb",
        steel: "#8da3af",
      },
      boxShadow: {
        soft: "0 18px 54px rgba(10, 16, 21, 0.10)",
        glow: "0 0 40px rgba(39, 200, 238, 0.20)",
        panel: "0 1px 0 rgba(255,255,255,0.74) inset, 0 24px 80px rgba(10,16,21,0.14)",
      },
      borderRadius: {
        card: "8px",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at top left, rgba(39,200,238,0.16), transparent 34%), radial-gradient(circle at 80% 0%, rgba(147,197,253,0.13), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;

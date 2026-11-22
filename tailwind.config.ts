import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0f2540", dark: "#0a1a2f", light: "#1e3a5f" },
        amber: { DEFAULT: "#f5a623", dark: "#d4880e" },
      },
      fontFamily: { sans: ["system-ui", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

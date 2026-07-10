import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F8FA",
        ink: {
          DEFAULT: "#0B1524",
          soft: "#334155",
          muted: "#64748B",
        },
        rule: "#CBD5E1",
        // Azul industrial — primária mais densa que o Tailwind blue-600 padrão.
        tensao: {
          DEFAULT: "#1B3B8F",
          hi: "#2563EB",
          lo: "#0C1B3B",
        },
        alerta: "#F59E0B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tag: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;

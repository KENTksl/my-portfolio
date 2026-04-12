import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-press-start)", "ui-monospace", "monospace"],
        mono: ["var(--font-vt323)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;


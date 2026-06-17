import type { Config } from "tailwindcss";

// Brand tokens — authoritative values from HANDOFF.md §3.
// See the contrast rule: `green.DEFAULT` (#00B75B) fails WCAG AA for text on
// white. Use it only for CTA fills, large display accents, and decoration.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // The prototype is desktop-first with breakpoints at 900px (stack
      // hero/grids) and 560px (collapse stat band). Re-expressed mobile-first:
      // `mid` ≥560px, `wide` ≥900px is where the desktop layouts kick in.
      screens: {
        mid: "560px",
        wide: "900px",
      },
      colors: {
        green: {
          DEFAULT: "#00B75B", // primary CTA fill / accent only
          600: "#009A4C", // hover, green text on light
          800: "#004931", // dark sections, green text on light
          900: "#003726", // deepest surface, footer
        },
        lemon: "#8FC14E",
        yellow: "#FDC00D",
        cream: "#FFF5CC",
        ink: "#16241D", // default body text
        muted: "#5B6B62", // secondary text
        line: "#E4EBE6", // hairline borders
      },
      fontFamily: {
        // Bound to next/font CSS variables set in app/layout.tsx.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "14px",
        DEFAULT: "18px",
        lg: "24px",
      },
      maxWidth: {
        content: "1180px", // --max
        read: "660px", // --read
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;

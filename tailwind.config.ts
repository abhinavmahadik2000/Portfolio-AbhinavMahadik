import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "hsl(var(--bg))",
          raised: "hsl(var(--bg-raised))",
          inset: "hsl(var(--bg-inset))",
        },
        raised: "hsl(var(--bg-raised))",
        inset: "hsl(var(--bg-inset))",
        line: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },
        fg: {
          DEFAULT: "hsl(var(--fg))",
          muted: "hsl(var(--fg-muted))",
          subtle: "hsl(var(--fg-subtle))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-fg))",
        },
        accent2: "hsl(var(--accent-2))",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Dashes travelling along a diagram edge.
        flow: {
          to: { strokeDashoffset: "-24" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Three offset drifts so the aurora never visibly repeats.
        "drift-a": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(6%, 8%, 0) scale(1.12)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-8%, 10%, 0) scale(0.92)" },
        },
        "drift-c": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(0.95)" },
          "50%": { transform: "translate3d(10%, -6%, 0) scale(1.15)" },
        },
        "sheen": {
          "0%": { transform: "translateX(-250%) skewX(12deg)" },
          "100%": { transform: "translateX(400%) skewX(12deg)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flow: "flow 1s linear infinite",
        marquee: "marquee 46s linear infinite",
        "drift-a": "drift-a 26s ease-in-out infinite",
        "drift-b": "drift-b 32s ease-in-out infinite",
        "drift-c": "drift-c 38s ease-in-out infinite",
        sheen: "sheen 1.1s ease-out",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import { useRef, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A surface that lights up under the cursor. The gradient position is written
 * straight to CSS custom properties, not React state, so it stays at 60fps.
 */
export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group/spot relative overflow-hidden rounded-xl border border-line bg-raised transition-colors duration-300 hover:border-line-strong ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--accent) / var(--glow-alpha)), transparent 70%)",
        }}
      />
      <span className="relative z-10 block h-full">{children}</span>
    </div>
  );
}

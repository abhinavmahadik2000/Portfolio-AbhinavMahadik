import { useMemo } from "react";

/**
 * Topographic contour lines as a section backdrop.
 *
 * Each line is a sum of three sines at different frequencies, so the ridges
 * read as terrain rather than as a repeating wave. Spacing tightens toward the
 * ridge the way a real contour map bunches on a steep face. Generated once and
 * memoized; it is static geometry, so the only motion is the aurora behind it.
 */

const W = 1200;
const H = 780;
const LINES = 26;

function contour(yBase: number, amp: number, phase: number): string {
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 24) {
    const t = x / W;
    const y =
      yBase +
      Math.sin(t * Math.PI * 2 * 1.1 + phase) * amp +
      Math.sin(t * Math.PI * 2 * 2.7 + phase * 1.6) * amp * 0.34 +
      Math.sin(t * Math.PI * 2 * 0.6 + phase * 0.4) * amp * 0.55;
    pts.push(`${x} ${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export function Topography({ className = "" }: { className?: string }) {
  const lines = useMemo(
    () =>
      Array.from({ length: LINES }, (_, i) => {
        const n = i / (LINES - 1); // 0 → 1 down the canvas
        // Ease the spacing so lines crowd together across the middle band.
        const eased = n + Math.sin(n * Math.PI) * 0.12;
        return {
          d: contour(eased * H * 1.05 - H * 0.04, 26 + Math.sin(n * Math.PI) * 44, i * 0.42),
          // Every fifth line reads as an index contour, slightly stronger.
          index: i % 5 === 0,
          accent: i === 10 || i === 15,
        };
      }),
    [],
  );

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        role="presentation"
      >
        <g fill="none" strokeLinecap="round">
          {lines.map((l, i) => (
            <path
              key={i}
              d={l.d}
              stroke={l.accent ? "hsl(var(--accent))" : "hsl(var(--line-strong))"}
              strokeWidth={l.index ? 1.15 : 0.75}
              opacity={l.accent ? 0.22 : l.index ? 0.5 : 0.28}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

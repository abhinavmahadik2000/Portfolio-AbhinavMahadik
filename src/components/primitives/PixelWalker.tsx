/**
 * An 8x14 pixel sprite, drawn as SVG rects so it inherits the theme.
 * Two frames differing only in the leg rows, which is enough to read as a
 * walk cycle at this size.
 */

const BODY = [
  "..hhhh..",
  ".hhhhhh.",
  ".hssssh.",
  ".sdssds.",
  ".ssssss.",
  "..ssss..",
  ".bbbbbb.",
  "bbbbbbbb",
  "bbbbbbbb",
  ".bbbbbb.",
  "..bbbb..",
];

const LEGS_A = ["..l..l..", "..l..l..", ".ll..ll."];
const LEGS_B = ["..l..l..", ".l....l.", "ll....ll"];

const PALETTE: Record<string, string> = {
  h: "hsl(var(--fg))",
  s: "#e0a97c",
  d: "hsl(var(--bg))",
  b: "hsl(var(--accent))",
  l: "hsl(var(--accent-2))",
};

export function PixelWalker({ frame = 0, className = "" }: { frame?: 0 | 1; className?: string }) {
  const rows = [...BODY, ...(frame === 0 ? LEGS_A : LEGS_B)];

  return (
    <svg
      viewBox="0 0 8 14"
      className={className}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel character"
    >
      {rows.map((row, y) =>
        row.split("").map((ch, x) =>
          ch === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PALETTE[ch]} />,
        ),
      )}
    </svg>
  );
}

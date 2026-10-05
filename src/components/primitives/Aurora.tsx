import { useReducedMotion } from "framer-motion";

/**
 * A slow drifting colour wash behind the hero. Three blurred radials on long,
 * offset cycles so the loop never reads as a loop. Pure CSS, so no paint cost
 * beyond the compositor.
 */
export function Aurora() {
  const reduced = useReducedMotion();

  const blobs = [
    { className: "left-[-10%] top-[-18%] h-[46rem] w-[46rem]", color: "var(--accent)", alpha: 0.2, anim: "animate-drift-a" },
    { className: "right-[-14%] top-[2%] h-[38rem] w-[38rem]", color: "var(--accent-2)", alpha: 0.14, anim: "animate-drift-b" },
    { className: "left-[28%] top-[34%] h-[34rem] w-[34rem]", color: "var(--accent)", alpha: 0.1, anim: "animate-drift-c" },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[120px] ${b.className} ${reduced ? "" : b.anim}`}
          style={{ background: `radial-gradient(circle, hsl(${b.color} / ${b.alpha}), transparent 68%)` }}
        />
      ))}
    </div>
  );
}

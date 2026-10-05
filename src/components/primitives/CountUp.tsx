import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Split "6.4s" into prefix "", number 6.4, suffix "s". Null when there is no leading number. */
function parse(value: string) {
  const m = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!m) return null;
  return {
    prefix: m[1],
    target: parseFloat(m[2]),
    suffix: m[3],
    decimals: m[2].includes(".") ? m[2].split(".")[1].length : 0,
  };
}

/**
 * Counts the leading number up on first scroll into view, keeping any prefix
 * or suffix intact. The literal string is always what renders once settled.
 * An animation must never be able to leave a wrong figure on screen.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  // `null` means "show the literal value". That is the resting state.
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const parsed = parse(value);
    if (!parsed || reduced || !inView) return;

    let raf = 0;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      if (t >= 1) {
        setShown(null); // settle on the exact literal
        return;
      }
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(parsed.target * eased);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // Depends only on primitives. An object here restarts the loop every frame.
  }, [inView, value, reduced]);

  const parsed = parse(value);

  return (
    <span ref={ref} className={className}>
      {parsed && shown !== null
        ? `${parsed.prefix}${shown.toFixed(parsed.decimals)}${parsed.suffix}`
        : value}
    </span>
  );
}

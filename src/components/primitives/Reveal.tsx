import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger index. Each step adds 60ms. */
  i?: number;
  y?: number;
  className?: string;
}

/**
 * The single scroll-entrance used everywhere. One curve, one distance,
 * so the whole page moves with the same hand.
 */
export function Reveal({ children, i = 0, y = 16, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(i, 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

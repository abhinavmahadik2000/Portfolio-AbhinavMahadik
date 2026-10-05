import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { patterns } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SystemDiagram } from "@/components/primitives/SystemDiagram";

/**
 * Problem classes I've solved more than once, told as constraint → decision →
 * trade-off. Patterns rather than a tour of any one employer's systems.
 */
export function Patterns() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const p = patterns[active];

  return (
    <Section
      id="patterns"
      index="02"
      title="Patterns"
      lede="Three problems that show up wherever there's real traffic and real data. The constraint first, then the decision, then what it costs to get wrong."
    >
      <Reveal>
        <div role="tablist" aria-label="Engineering patterns" className="flex flex-wrap gap-1.5 border-b border-line pb-4">
          {patterns.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`relative rounded-lg px-3.5 py-2 font-mono text-xs transition-colors duration-200 ${
                i === active ? "text-accent-fg" : "text-fg-subtle hover:bg-inset hover:text-fg"
              }`}
            >
              {/* Pill first in DOM, label above it, so no negative z-index. */}
              {i === active && (
                <motion.span
                  layoutId="pattern-tab"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{s.tab}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={p.id}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12"
        >
          <div>
            <h3 className="text-balance font-display text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">{p.context}</p>

            <dl className="mt-8 space-y-6">
              {p.decisions.map((d, i) => (
                <motion.div
                  key={d.head}
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group border-l border-line pl-5 transition-colors duration-300 hover:border-accent"
                >
                  <dt className="flex items-baseline gap-2.5">
                    <span className="font-mono text-2xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[15px] font-semibold tracking-tight">{d.head}</span>
                  </dt>
                  <dd className="mt-1.5 text-pretty text-[13.5px] leading-relaxed text-fg-muted">{d.body}</dd>
                </motion.div>
              ))}
            </dl>

            <ul className="mt-8 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s} className="rounded border border-line bg-inset px-2 py-[3px] font-mono text-2xs text-fg-subtle">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-line bg-raised p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="label">{p.tab}</span>
                <span className="font-mono text-2xs text-fg-subtle">schematic</span>
              </div>
              <SystemDiagram kind={p.diagram} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

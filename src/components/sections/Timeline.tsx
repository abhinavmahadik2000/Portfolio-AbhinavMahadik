import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Lock } from "lucide-react";
import { timeline } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { PixelWalker } from "@/components/primitives/PixelWalker";

/**
 * Career as a side-scrolling level.
 *
 * Geometry is fixed rather than measured: every node is NODE_W wide, so the
 * walker's x is just `index * NODE_W + half`. Nothing here needs a layout read,
 * which keeps the walk animation off the main thread's critical path.
 */

const NODE_W = 196;
const GROUND_Y = 236; // distance from the top of the track to the ground line
const SPRITE_H = 46;
const SPRITE_W = 26;
const POST_H = 46; // card bottom to ground line

const nodes = timeline.nodes;
const currentIndex = nodes.findIndex((n) => n.state === "current");

export function Timeline() {
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(currentIndex);
  const [frame, setFrame] = useState<0 | 1>(0);
  const [walking, setWalking] = useState(false);

  // Open on the present, not on 2018.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = Math.max(0, currentIndex * NODE_W + NODE_W / 2 - el.clientWidth / 2);
  }, []);

  // Legs only move while travelling.
  useEffect(() => {
    if (!walking || reduced) return;
    const t = setInterval(() => setFrame((f) => (f === 0 ? 1 : 0)), 130);
    return () => clearInterval(t);
  }, [walking, reduced]);

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setWalking(true);
    scroller.current?.scrollTo({
      left: Math.max(0, i * NODE_W + NODE_W / 2 - scroller.current.clientWidth / 2),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const detail = nodes[active];
  const facingBack = active < currentIndex;

  return (
    <Section
      id="timeline"
      index="06"
      title="Level select"
      lede="Everything to the left actually happened. Everything to the right is speculative, and gets less plausible the further you go. Pick a marker to walk there."
    >
      <Reveal>
        <div className="overflow-hidden rounded-xl border border-line bg-raised">
          {/* ── The track ── */}
          <div ref={scroller} className="overflow-x-auto overflow-y-hidden">
            <div className="relative" style={{ width: nodes.length * NODE_W, height: 320 }}>
              {/* Ground. Solid where it has been walked, dashed where it has not. */}
              <div
                aria-hidden
                className="absolute left-0 h-px bg-line-strong"
                style={{ top: GROUND_Y, width: (currentIndex + 1) * NODE_W }}
              />
              <div
                aria-hidden
                className="absolute h-px"
                style={{
                  top: GROUND_Y,
                  left: (currentIndex + 1) * NODE_W,
                  right: 0,
                  backgroundImage:
                    "repeating-linear-gradient(to right, hsl(var(--line-strong)) 0 6px, transparent 6px 12px)",
                }}
              />

              {/* The boundary between what happened and what might. */}
              <div
                aria-hidden
                className="absolute w-px"
                style={{
                  left: (currentIndex + 1) * NODE_W,
                  top: 56,
                  height: GROUND_Y - 56 + 28,
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, hsl(var(--accent) / 0.5) 0 4px, transparent 4px 9px)",
                }}
              />
              <span
                className="absolute font-mono text-2xs uppercase tracking-[0.2em] text-accent"
                style={{ left: (currentIndex + 1) * NODE_W + 10, top: 40 }}
              >
                now
              </span>

              {/* ── Markers ──
                  Positioned absolutely rather than with flex: the dot has to
                  land exactly on GROUND_Y, and flex sizing would push it off. */}
              {nodes.map((n, i) => {
                const isFuture = n.state === "future";
                const isActive = i === active;
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${n.stamp}: ${n.title}`}
                    aria-pressed={isActive}
                    className="group absolute top-0 block text-center"
                    style={{ left: i * NODE_W, width: NODE_W, height: 320 }}
                  >
                    {/* Card, bottom aligned just above the post. */}
                    <span
                      className={`absolute inset-x-2 top-0 flex flex-col items-center justify-end pb-3 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-95"
                      }`}
                      style={{ height: GROUND_Y - POST_H }}
                    >
                      <span aria-hidden className="mb-2 text-xl leading-none">
                        {n.icon}
                      </span>
                      <span
                        className={`font-mono text-2xs uppercase tracking-wider ${
                          isFuture ? "text-fg-subtle" : "text-accent"
                        }`}
                      >
                        {n.stamp}
                      </span>
                      <span
                        className={`mt-1.5 text-balance font-display text-[13.5px] font-semibold leading-tight tracking-tight ${
                          isFuture ? "text-fg-muted" : "text-fg"
                        }`}
                      >
                        {n.title}
                      </span>
                      <span className="mt-1 font-mono text-[10px] text-fg-subtle">{n.place}</span>
                    </span>

                    {/* Post down to the ground. */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 w-px -translate-x-1/2"
                      style={{
                        top: GROUND_Y - POST_H,
                        height: POST_H,
                        backgroundImage: isFuture
                          ? "repeating-linear-gradient(to bottom, hsl(var(--line-strong)) 0 3px, transparent 3px 7px)"
                          : "linear-gradient(hsl(var(--line-strong)), hsl(var(--line-strong)))",
                      }}
                    />

                    {/* Fixed 16px box centred on the ground line, so the dot
                        stays centred whatever size it animates to. */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center"
                      style={{ top: GROUND_Y - 8 }}
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${
                          isFuture
                            ? "h-2.5 w-2.5 border border-dashed border-line-strong bg-bg"
                            : isActive
                              ? "h-3.5 w-3.5 bg-accent ring-4 ring-accent/25"
                              : "h-2.5 w-2.5 bg-line-strong group-hover:bg-accent"
                        }`}
                      />
                    </span>

                    {/* Status badge below the line. */}
                    <span
                      className="absolute inset-x-0 flex justify-center"
                      style={{ top: GROUND_Y + 18 }}
                    >
                      {isFuture ? (
                        <span className="inline-flex items-center gap-1 rounded border border-line bg-inset px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-fg-subtle">
                          <Lock className="h-2.5 w-2.5" />
                          locked
                        </span>
                      ) : (
                        <span
                          className={`font-mono text-[9px] uppercase tracking-wider ${
                            n.state === "current" ? "text-accent" : "text-fg-subtle"
                          }`}
                        >
                          {n.state === "current" ? "you are here" : "cleared"}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}

              {/* ── The walker ── */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute z-20"
                style={{ top: GROUND_Y - SPRITE_H, width: SPRITE_W, height: SPRITE_H }}
                initial={false}
                animate={{ x: active * NODE_W + NODE_W / 2 - SPRITE_W / 2 }}
                transition={
                  reduced ? { duration: 0 } : { type: "spring", stiffness: 42, damping: 16, mass: 0.9 }
                }
                onAnimationComplete={() => {
                  setWalking(false);
                  setFrame(0);
                }}
              >
                <PixelWalker
                  frame={frame}
                  className={`h-full w-full ${facingBack ? "-scale-x-100" : ""}`}
                />
              </motion.div>
            </div>
          </div>

          {/* ── Detail for the selected marker ── */}
          <div className="border-t border-line bg-inset/50 px-5 py-5 sm:px-7">
            <motion.div
              key={detail.id}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="font-mono text-xs text-accent">{detail.stamp}</span>
              <span className="font-display text-base font-semibold tracking-tight">{detail.title}</span>
              <span className="font-mono text-2xs text-fg-subtle">{detail.place}</span>
              <p className="w-full text-pretty text-[13.5px] leading-relaxed text-fg-muted">{detail.note}</p>
            </motion.div>
          </div>
        </div>
      </Reveal>

      <p className="mt-4 text-center font-mono text-2xs text-fg-subtle sm:text-left">
        scroll the track sideways · humour me for the last one
      </p>
    </Section>
  );
}

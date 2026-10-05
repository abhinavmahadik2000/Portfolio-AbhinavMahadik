import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { agentRuntime as rt } from "@/data/profile";

/**
 * The hero's signature visual. A reference multi-agent runtime at the
 * complexity a real one reaches: a guarded entry, a routing supervisor,
 * three workers in parallel, synthesis, and a critic that can push the whole
 * thing back round. Hovering a stage explains what it is for.
 *
 * Deliberately a general architecture, not a map of anything deployed.
 */

const NODE_H = 38;

export function AgentRuntime({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    if (reduced || hover) return;
    const t = setInterval(() => setStep((s) => (s + 1) % rt.cycle.length), 950);
    return () => clearInterval(t);
  }, [reduced, hover]);

  const active = hover ?? rt.cycle[step];
  const prev = rt.cycle[(step - 1 + rt.cycle.length) % rt.cycle.length];
  const isReflecting = !hover && prev === "critic" && rt.cycle[step] === "router";

  const edgeLive = (from: string, to: string) =>
    !reduced && !hover && from === prev && to === rt.cycle[step];

  const note = rt.nodes.find((n) => n.id === active)?.note ?? rt.idle;

  return (
    <div className={className}>
      <svg
        viewBox="0 0 420 404"
        className="w-full"
        role="img"
        aria-label="Reference architecture for a multi-agent runtime"
      >
        <defs>
          <marker id="rt-tip" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="hsl(var(--line-strong))" />
          </marker>
          <marker id="rt-tip-acc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="hsl(var(--accent))" />
          </marker>
        </defs>

        {/* Reflection loop, drawn first so nodes sit above it. */}
        <path
          d={rt.retry.d}
          fill="none"
          stroke={isReflecting ? "hsl(var(--accent))" : "hsl(var(--line))"}
          strokeWidth={isReflecting ? 1.6 : 1.1}
          strokeDasharray="4 5"
          markerEnd={isReflecting ? "url(#rt-tip-acc)" : "url(#rt-tip)"}
          className={isReflecting ? "motion-safe:animate-flow" : undefined}
          style={{ transition: "stroke 300ms ease" }}
        />
        <text x="120" y="248" textAnchor="end" className="font-mono text-[8px]" fill="hsl(var(--fg-subtle))">
          reflect
        </text>

        {/* Static edges. */}
        {rt.edges.map((e) => (
          <path key={e.id} d={e.d} fill="none" stroke="hsl(var(--line-strong))" strokeWidth="1.15" markerEnd="url(#rt-tip)" />
        ))}

        {/* Live overlay on the hop currently carrying the pulse. */}
        {rt.edges.map((e) => (
          <path
            key={`${e.id}-live`}
            d={e.d}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.7"
            strokeDasharray="5 7"
            markerEnd="url(#rt-tip-acc)"
            className={edgeLive(e.from, e.to) ? "motion-safe:animate-flow opacity-100" : "opacity-0"}
            style={{ transition: "opacity 300ms ease" }}
          />
        ))}

        {/* Entry and exit. */}
        <circle cx="210" cy="12" r="5" fill="hsl(var(--accent))" />
        {!reduced && (
          <motion.circle
            cx="210"
            cy="12"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.1"
            animate={{ r: [5, 14], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <text x="196" y="16" textAnchor="end" className="font-mono text-[9px]" fill="hsl(var(--fg-subtle))">
          ask
        </text>

        <circle cx="210" cy="392" r="5" fill="hsl(var(--accent-2))" />
        <text x="196" y="396" textAnchor="end" className="font-mono text-[9px]" fill="hsl(var(--fg-subtle))">
          answer
        </text>

        {/* Stages. */}
        {rt.nodes.map((n) => {
          const live = n.id === active;
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHover(n.id)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
            >
              <motion.rect
                x={n.x - n.w / 2}
                y={n.y - NODE_H / 2}
                width={n.w}
                height={NODE_H}
                rx="8"
                fill={live ? "hsl(var(--accent) / 0.1)" : "hsl(var(--bg-inset))"}
                stroke={live ? "hsl(var(--accent))" : "hsl(var(--line-strong))"}
                strokeWidth={live ? 1.6 : 1.1}
                animate={{ opacity: live ? 1 : 0.9 }}
                transition={{ duration: 0.25 }}
              />
              <text
                x={n.x}
                y={n.y + 3.5}
                textAnchor="middle"
                className="pointer-events-none select-none font-mono text-[10.5px]"
                fill={live ? "hsl(var(--accent))" : "hsl(var(--fg-muted))"}
                style={{ transition: "fill 250ms ease" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* The fan-out is the point. Say so once. */}
        <text x="210" y="160" textAnchor="middle" className="font-mono text-[8px]" fill="hsl(var(--fg-subtle))">
          parallel · bounded iterations
        </text>
      </svg>

      {/* Caption. Fixed height so hovering never shifts the layout. */}
      <div className="mt-4 min-h-[62px] border-t border-line pt-3">
        <motion.p
          key={active}
          initial={reduced ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-pretty text-[12.5px] leading-relaxed text-fg-muted"
        >
          {hover ? <span className="font-mono text-accent">{active}: </span> : null}
          {note}
        </motion.p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {rt.crossCutting.map((c) => (
          <li key={c} className="rounded border border-line bg-inset px-2 py-[3px] font-mono text-2xs text-fg-subtle">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

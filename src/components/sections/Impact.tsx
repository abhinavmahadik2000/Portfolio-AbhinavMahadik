import { impact } from "@/data/profile";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";
import { CountUp } from "@/components/primitives/CountUp";

/**
 * Numbers with the mechanism that produced them. A figure on its own is a
 * claim; the paragraph under it is the part that makes it checkable.
 */
export function Impact() {
  return (
    <section id="impact" className="scroll-mt-28 border-y border-line bg-inset/40 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-lg text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              What changed, and what made it change
            </h2>
            <p className="label">six figures · each with its mechanism</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((m, i) => (
            <Reveal key={m.label} i={i} className="bg-bg">
              <SpotlightCard className="h-full rounded-none border-0 bg-transparent">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-baseline gap-2">
                    <CountUp
                      value={m.value}
                      className={`figure font-display text-[2.6rem] font-semibold leading-none ${
                        m.tone === "accent" ? "text-accent" : "text-accent2"
                      }`}
                    />
                    <span className="font-mono text-xs text-fg-subtle">{m.delta}</span>
                  </div>

                  <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight">{m.label}</h3>
                  <p className="mt-2.5 text-pretty text-[13.5px] leading-relaxed text-fg-muted">{m.how}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

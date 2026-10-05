import { stack } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Five groups in a two-column grid leaves a hole. The AI group runs full width
 * as the lead row, so the remaining four fill two clean rows and nothing is
 * left showing the gap colour.
 */
export function Stack() {
  return (
    <Section
      id="stack"
      index="05"
      title="Stack"
      lede="Grouped by where it sits, not by how well I know it. Everything listed is something I've shipped with."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
        {stack.map((group, i) => (
          <Reveal key={group.group} i={i} className={`bg-bg ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display text-base font-semibold tracking-tight">{group.group}</h3>
                <span className="font-mono text-2xs text-fg-subtle">{group.note}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-inset px-2.5 py-1 font-mono text-[11.5px] text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

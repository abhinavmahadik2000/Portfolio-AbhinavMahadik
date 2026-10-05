import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      title="Education"
      lede="A master's in the US and an engineering degree in India. The theory I still reach for, mostly around data structures, distributed systems and deep learning."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <li key={e.school}>
            <Reveal i={i} className="h-full">
              <SpotlightCard className="h-full">
                <article className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-line bg-inset">
                      <GraduationCap className="h-[18px] w-[18px] text-accent" />
                    </span>
                    <span className="font-mono text-2xs text-accent">{e.period}</span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {e.credential}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-fg-muted">{e.school}</p>

                  <p className="mt-4 flex items-center gap-1.5 font-mono text-2xs text-fg-subtle">
                    <MapPin className="h-3 w-3 flex-none" />
                    {e.location}
                  </p>

                  <p className="mt-auto pt-5 text-[13px] leading-relaxed text-fg-muted">{e.detail}</p>
                </article>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

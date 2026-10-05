import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { SpotlightCard } from "@/components/primitives/SpotlightCard";

/**
 * Two featured projects run full width; the rest pair up. With 2 featured and
 * 4 others that fills every row of a two-column grid exactly.
 */
export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lede="Mostly agents, mostly built to answer a question I actually had. Links go to the source."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.name} className={p.featured ? "sm:col-span-2" : ""}>
            <Reveal i={i} className="h-full">
              <SpotlightCard className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`flex h-full flex-col p-6 ${
                    p.featured ? "sm:flex-row sm:items-start sm:gap-8 sm:p-8" : ""
                  }`}
                >
                  <div
                    className={`mb-5 grid flex-none place-items-center rounded-lg border border-line bg-inset ${
                      p.featured ? "h-16 w-16 sm:mb-0" : "h-11 w-11"
                    }`}
                  >
                    <span aria-hidden className={`text-accent ${p.featured ? "text-2xl" : "text-lg"}`}>
                      {p.glyph}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className={`font-display font-semibold tracking-tight ${
                          p.featured ? "text-xl sm:text-2xl" : "text-base"
                        }`}
                      >
                        {p.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 flex-none text-fg-subtle transition-all duration-200 group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5 group-hover/spot:text-accent" />
                    </div>

                    <p
                      className={`mt-2 text-pretty font-display tracking-tight text-fg ${
                        p.featured ? "text-base sm:text-lg" : "text-sm"
                      }`}
                    >
                      {p.tagline}
                    </p>

                    <p className="mt-2.5 flex-1 text-pretty text-[13.5px] leading-relaxed text-fg-muted">
                      {p.body}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded border border-line bg-inset px-2 py-[3px] font-mono text-2xs text-fg-subtle"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

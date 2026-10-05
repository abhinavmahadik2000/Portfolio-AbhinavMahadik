import { experience } from "@/data/profile";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";

export function Experience() {
  return (
    <Section
      id="work"
      index="01"
      title="Work"
      lede="Three roles, one through-line. Take something people do by hand and make a system do it, then make the system hold up under production load."
    >
      <ol className="relative space-y-14 sm:space-y-16">
        {/* Timeline rail. */}
        <span
          aria-hidden
          className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
        />

        {experience.map((role, i) => (
          <li key={role.company} className="relative sm:pl-10">
            {/* Node. */}
            <span
              aria-hidden
              className={`absolute left-0 top-[7px] hidden h-[11px] w-[11px] rounded-full border-2 sm:block ${
                role.current ? "border-accent bg-accent" : "border-line-strong bg-bg"
              }`}
            />

            <Reveal i={i}>
              <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[14rem_1fr]">
                {/* Meta rail. */}
                <div className="lg:pt-0.5">
                  <p className="font-mono text-xs text-accent">{role.period}</p>
                  <p className="mt-2 font-display text-base font-semibold tracking-tight">
                    {role.company}
                  </p>
                  <p className="mt-1 font-mono text-2xs uppercase tracking-wider text-fg-subtle">
                    {role.location}
                  </p>
                </div>

                {/* Content. */}
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-[1.4rem]">
                    {role.role}
                  </h3>
                  <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-fg-muted">
                    {role.summary}
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-3.5">
                        <span
                          aria-hidden
                          className="mt-[9px] h-px w-4 flex-none bg-line-strong"
                        />
                        <span className="text-pretty text-[14.5px] leading-relaxed text-fg-muted">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-line bg-inset px-2 py-[3px] font-mono text-2xs text-fg-subtle"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

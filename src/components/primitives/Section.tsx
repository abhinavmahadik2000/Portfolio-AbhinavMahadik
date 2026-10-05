import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
}

/** Section chrome: numbered rule, title, optional lede. */
export function Section({ id, index, title, lede, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4 border-b border-line pb-5">
            <span className="label tabular-nums">{index}</span>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {lede ? (
          <Reveal i={1}>
            <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-fg-muted">{lede}</p>
          </Reveal>
        ) : null}

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

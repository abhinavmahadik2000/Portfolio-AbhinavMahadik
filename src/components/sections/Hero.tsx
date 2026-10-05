import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { profile, vitals, agentRuntime } from "@/data/profile";
import { AgentRuntime } from "@/components/primitives/AgentRuntime";
import { Aurora } from "@/components/primitives/Aurora";
import { CountUp } from "@/components/primitives/CountUp";
import { Marquee } from "@/components/primitives/Marquee";
import { Topography } from "@/components/primitives/Topography";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-28 sm:pt-32">
      <Aurora />
      <Topography className="mask-fade-y -z-10" />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* ── The statement ── */}
          <div>
            <motion.div {...rise(0)} className="flex items-center gap-5">
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 via-transparent to-accent2/40 blur-[2px]"
                />
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  width={240}
                  height={240}
                  loading="eager"
                  decoding="sync"
                  className="relative h-40 w-40 rounded-full object-cover ring-1 ring-line [object-position:50%_28%] sm:h-48 sm:w-48"
                />
                <span className="absolute bottom-2 right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-bg bg-accent2">
                  <span className="h-1.5 w-1.5 rounded-full bg-bg" />
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="label text-fg-muted">{profile.role}</span>
                <span className="font-mono text-2xs text-fg-subtle">{profile.discipline}</span>
                <span className="font-mono text-2xs text-fg-subtle">{profile.location}</span>
              </div>
            </motion.div>

            <motion.h1
              {...rise(1)}
              className="mt-8 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              {...rise(2)}
              className="mt-5 max-w-xl text-balance font-display text-xl font-normal leading-snug tracking-tight text-fg-muted sm:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p {...rise(3)} className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-fg-muted">
              {profile.intro}
            </motion.p>

            <motion.div {...rise(4)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Sheen sweep on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1/3 -translate-x-[250%] skew-x-12 bg-white/30 group-hover:motion-safe:animate-sheen"
                />
                <Mail className="relative h-4 w-4" />
                <span className="relative">Get in touch</span>
              </a>
              <a
                href="/Abhinav-Mahadik-Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-lg border border-line bg-raised px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:bg-inset"
              >
                <FileText className="h-4 w-4 text-fg-subtle" />
                Résumé
                <ArrowUpRight className="h-3.5 w-3.5 text-fg-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* ── Reference architecture ── */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-line bg-raised/70 p-5 backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="label">{agentRuntime.caption}</span>
                <span className="hidden font-mono text-2xs text-fg-subtle sm:block">hover a stage</span>
              </div>
              <AgentRuntime />
            </div>
          </motion.div>
        </div>

        {/* ── Vitals ── */}
        <motion.dl
          {...rise(5)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4"
        >
          {vitals.map((v) => (
            <div key={v.caption} className="group bg-bg px-5 py-6 transition-colors duration-300 hover:bg-inset">
              <dt className="flex flex-wrap items-baseline gap-x-1.5">
                <CountUp
                  value={v.value}
                  className="figure font-display text-3xl font-semibold text-fg transition-colors duration-300 group-hover:text-accent sm:text-4xl"
                />
                <span className="font-mono text-xs text-accent">{v.unit}</span>
              </dt>
              <dd className="mt-2 text-[13px] leading-snug text-fg-muted">{v.caption}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ── Breadth strip ── */}
      <motion.div {...rise(6)} className="mt-10 border-y border-line py-4">
        <Marquee />
      </motion.div>
    </section>
  );
}

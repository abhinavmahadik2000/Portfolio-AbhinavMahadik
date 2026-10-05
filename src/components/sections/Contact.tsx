import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/primitives/Reveal";
import { Topography } from "@/components/primitives/Topography";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/abhinavmahadik", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "abhinavmahadik2000", href: profile.github, Icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-28 overflow-hidden border-t border-line pt-20 sm:pt-28">
      <Topography className="mask-fade-y -z-10 opacity-70" />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="label">07 / Contact</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            So, what&rsquo;s timing out?
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-fg-muted">
            That is usually how these conversations start. An agent that needs guardrails, a queue that
            backs up at 2am, a query that was fine right up until it wasn&rsquo;t. Bring me the thing that
            keeps breaking. I&rsquo;ll bring the coffee.
          </p>
        </Reveal>

        <Reveal i={1}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight transition-colors hover:text-accent sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 text-fg-subtle transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:h-7 sm:w-7" />
          </a>
        </Reveal>

        <Reveal i={2}>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label} className="bg-bg">
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="flex items-center gap-3.5 p-5 transition-colors hover:bg-inset"
                >
                  <Icon className="h-4 w-4 flex-none text-fg-subtle" />
                  <span className="min-w-0">
                    <span className="block font-mono text-2xs uppercase tracking-wider text-fg-subtle">{label}</span>
                    <span className="block truncate text-sm text-fg-muted">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-3 border-t border-line py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-mono text-2xs text-fg-subtle">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="font-mono text-2xs text-fg-subtle">
            Built with <span aria-hidden>❤️</span>, an unreasonable volume of{" "}
            <span aria-hidden>☕</span>, and zero stock photos <span aria-hidden>🙂</span>
            <span className="sr-only">
              Built with love, an unreasonable volume of coffee, and zero stock photos.
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
}

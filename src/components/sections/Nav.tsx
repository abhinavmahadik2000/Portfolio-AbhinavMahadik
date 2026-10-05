import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { sections, profile } from "@/data/profile";
import { useTheme } from "@/hooks/use-theme";

export function Nav() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section: the last one whose top has passed the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ease-out ${
          scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-inset font-display text-[13px] font-semibold tracking-tight text-accent">
              A
            </span>
            <span className="hidden font-display text-sm font-medium tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors ${
                  active === s.id ? "text-fg" : "text-fg-subtle hover:text-fg-muted"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-inset"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-8 w-8 place-items-center rounded-md text-fg-subtle transition-colors hover:bg-inset hover:text-fg"
            >
              <Github className="h-[15px] w-[15px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-md text-fg-subtle transition-colors hover:bg-inset hover:text-fg"
            >
              <Linkedin className="h-[15px] w-[15px]" />
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="grid h-8 w-8 place-items-center rounded-md text-fg-subtle transition-colors hover:bg-inset hover:text-fg"
            >
              {isDark ? <Sun className="h-[15px] w-[15px]" /> : <Moon className="h-[15px] w-[15px]" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Read-progress hairline. */}
      <motion.div
        className="h-px origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />
    </header>
  );
}

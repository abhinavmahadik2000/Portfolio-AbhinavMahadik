import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Experience } from "@/components/sections/Experience";
import { Patterns } from "@/components/sections/Patterns";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Stack } from "@/components/sections/Stack";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

const Index = () => (
  <div className="min-h-screen bg-bg">
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-fg"
    >
      Skip to content
    </a>

    <Nav />
    <main>
      <Hero />
      <Impact />
      <Experience />
      <Patterns />
      <Projects />
      <Education />
      <Stack />
      <Timeline />
      <Contact />
    </main>
  </div>
);

export default Index;

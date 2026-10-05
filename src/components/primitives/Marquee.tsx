import { marquee } from "@/data/profile";

/** Breadth at a glance. Two identical tracks so the loop is seamless. */
export function Marquee() {
  const track = (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
      {marquee.map((m) => (
        <li
          key={m}
          className="whitespace-nowrap rounded-md border border-line bg-raised/60 px-3 py-1.5 font-mono text-xs text-fg-subtle"
        >
          {m}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mask-fade-x relative flex overflow-hidden">
      <div className="flex motion-safe:animate-marquee motion-reduce:animate-none">
        {track}
        {track}
      </div>
      <span className="sr-only">{marquee.join(", ")}</span>
    </div>
  );
}

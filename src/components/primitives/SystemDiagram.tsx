/**
 * Three hand-built diagrams. Each shows the mechanism that the prose beside it
 * argues for. Drawn, not screenshotted, so they theme and scale cleanly.
 */

const LINE = "hsl(var(--line-strong))";
const FILL = "hsl(var(--bg-inset))";
const ACC = "hsl(var(--accent))";
const ACC2 = "hsl(var(--accent-2))";

function Defs() {
  return (
    <defs>
      <marker id="sd-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 8 4 L 0 8 z" fill={LINE} />
      </marker>
      <marker id="sd-arrow-acc" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 8 4 L 0 8 z" fill={ACC} />
      </marker>
    </defs>
  );
}

interface BoxProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  tone?: "default" | "accent" | "accent2" | "muted";
}

function Box({ x, y, w = 108, h = 44, label, sub, tone = "default" }: BoxProps) {
  const stroke = tone === "accent" ? ACC : tone === "accent2" ? ACC2 : LINE;
  const text =
    tone === "accent" ? ACC : tone === "accent2" ? ACC2 : tone === "muted" ? "hsl(var(--fg-subtle))" : "hsl(var(--fg))";
  return (
    <g opacity={tone === "muted" ? 0.6 : 1}>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={FILL} stroke={stroke} strokeWidth="1.1" />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 2 : y + h / 2 + 4}
        textAnchor="middle"
        className="font-mono text-[11px]"
        fill={text}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="font-mono text-[8.5px]"
          fill="hsl(var(--fg-subtle))"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Edge({ d, accent, dashed }: { d: string; accent?: boolean; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={accent ? ACC : LINE}
      strokeWidth={accent ? 1.5 : 1.15}
      strokeDasharray={accent ? "5 7" : dashed ? "4 4" : undefined}
      markerEnd={accent ? "url(#sd-arrow-acc)" : "url(#sd-arrow)"}
      className={accent ? "motion-safe:animate-flow" : undefined}
    />
  );
}

function Note({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="font-mono text-[8.5px]" fill="hsl(var(--fg-subtle))">
      {children}
    </text>
  );
}

/** Where authorization sits relative to the model. Generic, not a deployment. */
function BoundaryDiagram() {
  return (
    <svg viewBox="0 0 520 210" className="w-full" role="img" aria-label="Authorization resolved before the model runs">
      <Defs />

      <circle cx="30" cy="96" r="6" fill={ACC2} />
      <Note x={30} y={118} anchor="middle">caller</Note>

      <Edge d="M 42 96 L 74 96" />
      <Box x={80} y={74} label="authz" sub="verify · pin scope" tone="accent2" />

      {/* Everything right of this line is untrusted input. */}
      <line x1="208" y1="26" x2="208" y2="170" stroke={ACC} strokeWidth="1" strokeDasharray="3 5" opacity="0.65" />
      <Note x={212} y={34}>trust boundary / scope fixed before the model runs</Note>

      <Edge d="M 190 96 L 232 96" accent />
      <Box x={238} y={74} label="agent" sub="plans · calls tools" tone="accent" />

      <Edge d="M 348 96 L 386 96" />
      <Box x={392} y={74} w={112} label="typed tools" sub="schema is the contract" />

      <path d="M 294 118 L 294 148" stroke={LINE} strokeWidth="1" strokeDasharray="3 4" />
      <Note x={294} y={162} anchor="middle">scope is injected, never a parameter</Note>
      <Note x={294} y={176} anchor="middle">so there is no field for an injected instruction to land in</Note>
    </svg>
  );
}

/** Before / after on the webhook path. */
function QueueDiagram() {
  return (
    <svg viewBox="0 0 520 230" className="w-full" role="img" aria-label="Marketplace webhook path before and after the durable queue">
      <Defs />

      {/* Before: Grab holds the connection for the whole order build. */}
      <Note x={0} y={16}>BEFORE</Note>
      <Box x={0} y={28} w={76} h={36} label="grab" tone="muted" />
      <Edge d="M 80 46 L 110 46" />
      <Box x={116} y={28} w={84} h={36} label="api" tone="muted" />
      <Edge d="M 204 46 L 236 46" />
      <Box x={242} y={28} w={154} h={36} label="order build" sub="cart→bill→settle→confirm" tone="muted" />
      <Note x={414} y={42}>6.4s, caller waiting</Note>
      <Note x={414} y={56}>timeout → duplicate</Note>

      <line x1="0" y1="92" x2="520" y2="92" stroke={LINE} strokeDasharray="3 5" opacity="0.5" />

      {/* After: persist, enqueue, answer. */}
      <Note x={0} y={114}>AFTER</Note>
      <Box x={0} y={152} w={76} h={36} label="grab" tone="accent" />
      <Edge d="M 80 170 L 110 170" accent />
      <Box x={116} y={152} w={84} h={36} label="api" tone="accent" />

      {/* The ack returns before any of the slow work starts. */}
      <path d="M 158 152 C 158 118, 38 118, 38 150" fill="none" stroke={ACC} strokeWidth="1.4" markerEnd="url(#sd-arrow-acc)" />
      <text x={98} y={144} textAnchor="middle" className="font-mono text-[9px]" fill={ACC}>
        200 OK · sub-second
      </text>

      <Edge d="M 204 170 L 234 170" />
      <Box x={240} y={152} w={92} h={36} label="queue" sub="durable · prefetch 5" />
      <Edge d="M 336 170 L 362 170" />
      <Box x={368} y={152} w={72} h={36} label="worker" />
      <Edge d="M 444 170 L 466 170" />
      <Box x={472} y={152} w={48} h={36} label="build" />

      <Note x={286} y={214} anchor="middle">nobody is waiting on this half</Note>
    </svg>
  );
}

/** Range split at the today boundary, merged back into one file. */
function SplitDiagram() {
  return (
    <svg viewBox="0 0 520 230" className="w-full" role="img" aria-label="Report date range split between cold archive and live database">
      <Defs />

      {/* The requested range, cut at today. */}
      <Note x={40} y={14}>requested range</Note>
      <rect x="40" y="22" width="440" height="34" rx="7" fill={FILL} stroke={LINE} strokeWidth="1.1" />
      <rect x="378" y="22" width="102" height="34" rx="7" fill="hsl(var(--accent) / 0.12)" stroke={ACC} strokeWidth="1.1" />
      <text x="209" y="44" textAnchor="middle" className="font-mono text-[10px]" fill="hsl(var(--fg-muted))">
        start … yesterday
      </text>
      <text x="429" y="44" textAnchor="middle" className="font-mono text-[10px]" fill={ACC}>
        today
      </text>

      <Edge d="M 209 60 L 209 88" />
      <Edge d="M 429 60 L 429 88" accent />

      <Box x={145} y={94} w={128} label="archive tier" sub="71M docs · settled" tone="accent2" />
      <Box x={371} y={94} w={116} label="live tier" sub="today only" tone="accent" />

      {/* Both halves meet and become one file. */}
      <path d="M 209 138 L 209 162 L 319 162" fill="none" stroke={LINE} strokeWidth="1.15" />
      <path d="M 429 138 L 429 162 L 319 162" fill="none" stroke={LINE} strokeWidth="1.15" />
      <Edge d="M 319 162 L 319 178" />
      <Box x={265} y={184} w={108} h={36} label="merge → xlsx" />

      <Note x={0} y={154}>archive half stops at</Note>
      <Note x={0} y={166}>yesterday, or the</Note>
      <Note x={0} y={178}>merge double-counts</Note>
    </svg>
  );
}

export function SystemDiagram({ kind }: { kind: string }) {
  if (kind === "queue") return <QueueDiagram />;
  if (kind === "split") return <SplitDiagram />;
  return <BoundaryDiagram />;
}

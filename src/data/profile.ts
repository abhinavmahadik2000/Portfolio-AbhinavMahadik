/**
 * All site copy lives here.
 *
 * Rule for this file: describe problem classes, technologies and outcomes.
 * No employer-internal service names, entity names, schemas, topologies or
 * raw internal metrics. If a detail would only make sense to someone with
 * repo access, it does not belong on a public page.
 */

export const profile = {
  name: "Abhinav Mahadik",
  role: "Software Engineer",
  discipline: "AI Systems & Platform Engineering",
  location: "Mumbai, India",
  email: "abhinavdmahadik@gmail.com",
  github: "https://github.com/abhinavmahadik2000",
  linkedin: "https://www.linkedin.com/in/abhinavmahadik",
  avatar: "/lovable-uploads/321fcf46-d500-4263-a9e3-76fa32a99f84.png",

  headline: "I build LLM agents and the production backends they run on.",

  intro:
    "Backend and AI engineer on a multi-tenant commerce platform serving merchants across three Southeast Asian markets: event-driven integrations, analytics pipelines, and the agent layer on top. Before that, LangGraph text-to-SQL tooling at UT Arlington. MS Computer Science.",
} as const;

/** Hero strip. Four figures that frame everything below. */
export const vitals = [
  { value: "5", unit: "countries", caption: "US · IN · MY · ID · TH" },
  { value: "60%", unit: "latency cut", caption: "8 sequential DB hops → 3 parallel phases" },
  { value: "71M", unit: "documents", caption: "hot/cold tiered, kept queryable" },
  { value: "6.4s", unit: "→ sub-second", caption: "webhook ack, sync → event-driven" },
] as const;

/**
 * Numbers with the mechanism that produced them. A figure with no mechanism
 * is a claim; the paragraph under it is what makes it checkable.
 */
export const impact = [
  {
    value: "60%",
    delta: "worst-case latency",
    label: "Order detail endpoint, timing out",
    how: "A hot read path made eight database round-trips, each waiting on the one before, and intermittently blew its timeout. Restructured into three parallel phases. Same eight calls, a third of the wall clock, and the timeouts stopped.",
    tone: "accent",
  },
  {
    value: "6.4s",
    delta: "→ sub-second",
    label: "Marketplace webhook acknowledgement",
    how: "GrabFood allows a few seconds before it marks a delivery failed, penalises the merchant and re-sends the order, which then arrives twice. Rewriting the path as persist → publish → acknowledge moved the 6.4s order build behind a durable RabbitMQ consumer.",
    tone: "accent",
  },
  {
    value: "3",
    delta: "services retired",
    label: "Infrastructure taken off the bill",
    how: "Two scheduled production Lambdas and the Kinesis stream between them folded into the existing NestJS services and RabbitMQ fan-out; Elasticsearch dropped from the order-report read path. Three fewer failure domains, three fewer line items, no new infrastructure to pay for.",
    tone: "accent2",
  },
  {
    value: "71M",
    delta: "documents",
    label: "Aggregations kept inside the ceiling",
    how: "An order collection that size blows past MongoDB Atlas' 60-second execution ceiling and simply fails at export. Splitting the read by recency (archive cluster for settled history, live cluster for today, merged per request) brought exports back inside budget.",
    tone: "accent2",
  },
  {
    value: "4h",
    delta: "→ under 30 min",
    label: "Catalog reporting turnaround",
    how: "A hand-assembled export across 8+ relational tables rebuilt on Hasura GraphQL filters with a Vue front end generating localized Excel. The manual assembly step is gone entirely.",
    tone: "accent",
  },
  {
    value: "18",
    delta: "worker pipelines",
    label: "Report generation off Lambda",
    how: "One NestJS consumer per job type behind a single durable download queue, sharing date-window and merge utilities rather than eighteen copies of the same boundary logic. One place for the off-by-one to live, and one place to fix it.",
    tone: "accent2",
  },
] as const;

export const experience = [
  {
    company: "The Feast",
    role: "Software Engineer",
    location: "Mumbai, IN",
    period: "Nov 2025 – Present",
    current: true,
    summary:
      "Multi-tenant commerce and point-of-sale platform operating across three Southeast Asian markets. I work across the TypeScript backend services, the operator-facing Angular client, the data and queue infrastructure, and the Python agent layer.",
    points: [
      "Migrated scheduled production Lambdas and the Kinesis stream between them into the main NestJS services with RabbitMQ fan-out. One codebase, one failure domain, and a standing AWS line item removed rather than re-platformed.",
      "Took a hot order-detail endpoint from eight sequential database round-trips to three parallel phases: same eight calls, roughly 60–70% off worst-case latency, and the intermittent timeouts stopped.",
      "Own the analytics and export path: 18 asynchronous worker pipelines behind a single durable RabbitMQ queue, plus the hot/cold read tiering that keeps 71M-document aggregations inside MongoDB Atlas' 60-second execution ceiling. Dropped Elasticsearch from the order-report read path on the way.",
      "Built the GrabFood marketplace integration end to end: bidirectional OAuth, inbound webhooks, order create / edit / cancel, store status and catalog sync, then moved ingestion onto an event-driven path, cutting webhook acknowledgement from 6.4s to sub-second and eliminating a class of duplicate-order failures.",
      "Rebuilt catalog reporting across 8+ relational tables on Hasura GraphQL filters with a Vue front end generating localized Excel, taking turnaround from ~4 hours to under 30 minutes.",
      "Shipped a steady line of Angular features in the operator app: role-aware HTTP interceptors and route guards closing an access-control gap, refund and margin breakdowns, menu-sync polling, phone-number order search, maintenance and lock-screen flows, and localization across three markets.",
      "Shipped regional tax e-invoicing and compliance export tooling: reference-data modelling, statutory export formats, and the finance module behind them.",
      "Building the platform's LLM agent layer in Python (FastAPI + LangGraph): a provider-agnostic model factory, typed tool schemas, authorization resolved outside the model, and an offline eval suite that scores tool selection rather than vibes.",
      "Underneath all of it: multi-region Docker images, env-per-market deploy scripts, PM2 supervision, New Relic traces, Nginx, and the Mongo aggregation pipelines and indexes the reports actually run on.",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "Angular",
      "MongoDB",
      "RabbitMQ",
      "Redis",
      "Python",
      "FastAPI",
      "LangGraph",
      "Docker",
      "AWS Lambda",
      "Kinesis",
      "AWS",
      "Azure",
    ],
  },
  {
    company: "University of Texas at Arlington",
    role: "AI Engineer",
    location: "Arlington, TX",
    period: "Jul 2024 – Jun 2025",
    current: false,
    summary:
      "Research tooling for internal data lookups, replacing hand-written SQL with an agent that could be trusted to write it.",
    points: [
      "Built a ReAct agent in LangGraph that turns natural-language questions into executable SQL across a foreign-key joined schema. No query templates, and it self-corrects on SQL errors by retrying with fixed joins.",
      "Designed the tool-calling loop with schema-aware prompting and structured output parsing, keeping each turn bounded and auditable rather than open-ended.",
      "Built the Next.js chat interface with serialized LangChain message history and type-safe human / AI / system rendering, holding full conversation context per query turn.",
      "Integrated the agent into an existing research-management app (React · Flask · MySQL) serving 50 concurrent users.",
    ],
    stack: ["LangGraph", "LangChain", "Python", "Next.js", "Flask", "MySQL"],
  },
  {
    company: "Exposys Data Labs",
    role: "ML Intern",
    location: "Bengaluru, IN",
    period: "Jun 2021 – Sep 2021",
    current: false,
    summary: "Classical ML and the data plumbing underneath it.",
    points: [
      "Raised classification accuracy 24% over baseline through systematic model comparison (K-means, decision trees) and automated feature selection.",
      "Cut ETL runtime 30% on 50K+ record datasets by replacing row-wise processing with vectorized Pandas operations and memory-efficient joins.",
      "Replaced static spreadsheet reporting with Plotly regression and clustering dashboards the analytics team could actually interrogate.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Plotly"],
  },
] as const;

/**
 * Engineering patterns, not system tours. Each is a problem class I've solved
 * more than once, told as constraint → decision → trade-off.
 */
export const patterns = [
  {
    id: "ingest",
    tab: "Async ingestion",
    title: "When the caller won't wait, stop making it wait",
    context:
      "A delivery marketplace posts an order to your webhook and holds the connection open. Your budget is a few seconds; the downstream order build takes 6.4.",
    diagram: "queue",
    decisions: [
      {
        head: "A timeout is not a retry, it's a double-write",
        body: "Past the budget GrabFood declares the delivery failed, drops the merchant's score and re-sends, while your side finishes the original anyway. Two records, two systems, both correct. The cost is reconciliation and a penalty, not latency.",
      },
      {
        head: "Persist, enqueue, acknowledge",
        body: "Write the raw payload to Mongo, publish to a durable RabbitMQ queue, return 200. Grab's own spec defines 2xx as received, not processed, so answering early is correct behaviour rather than a loophole.",
      },
      {
        head: "Tune prefetch to the slowest tenant",
        body: "Prefetch 1 lets a single slow tenant block every other tenant behind it. Prefetch 50 floods the legacy service you were protecting. Five, on its own channel, so the limit applies to this queue and nothing else.",
      },
      {
        head: "Watch for the TTL you inherited",
        body: "Sibling queues on shared infrastructure often carry a 5-second message TTL from some other feature's requirements. On an ingestion queue that silently bins exactly the backlog you built it to absorb, and nothing errors.",
      },
    ],
    stack: ["RabbitMQ", "NestJS", "MongoDB", "Webhooks", "OAuth2", "Idempotency", "DLQ"],
  },
  {
    id: "tiering",
    tab: "Data tiering",
    title: "Split the read before the database splits it for you",
    context:
      "Export jobs span arbitrary date ranges over a 71M-document order collection, large enough that a single aggregation passes MongoDB Atlas' 60-second ceiling and fails outright.",
    diagram: "split",
    decisions: [
      {
        head: "Recency is the natural seam",
        body: "Settled history never changes, so it belongs in a cold archive cluster, or a warehouse via CDC. Only today needs the live cluster. Fetch both halves in parallel, merge in the worker, emit one file.",
      },
      {
        head: "The boundary has to be exclusive",
        body: "If both tiers can hold today, merging double-counts it. The archive half must stop at yesterday even when it happens to contain partial current-day data, and the boundary is in the tenant's timezone, not the server's. This is where the bug lives.",
      },
      {
        head: "Generalize the resolver, don't fork it",
        body: "Eighteen pipelines need the same date arithmetic and the same flag precedence; only the label on the history tier differs: warehouse here, cold cluster there. One shared resolver means one copy of the off-by-one, not eighteen.",
      },
      {
        head: "Ship it behind verification flags",
        body: "Let each job be forced to a single tier so the same range runs three ways and the totals get compared before the split becomes the default. A migration you can diff is a migration you can defend in review.",
      },
    ],
    stack: ["MongoDB Atlas", "Snowflake", "CDC", "Parallel I/O", "Worker queues", "Time zones"],
  },
  {
    id: "agents",
    tab: "Agent safety",
    title: "Agents that are safe to point at real data",
    context:
      "The moment an agent reads production data on behalf of a user, the interesting questions stop being about prompting and start being about authorization, provenance and cost.",
    diagram: "boundary",
    decisions: [
      {
        head: "Authorization is resolved before the model runs",
        body: "Derive what the caller may read from their verified credentials, server-side, and inject it into tool calls. Keep it out of every schema the model sees. Security that depends on the system prompt being obeyed is not security.",
      },
      {
        head: "Figures come from tools, never from tokens",
        body: "Every number should trace to a tool result carrying its range, units and freshness. When the sources behind a tool differ in lag, confidently wrong is the failure mode worth engineering against, not refusal.",
      },
      {
        head: "Evaluate tool choice, don't assume it",
        body: "Score the first tool call against the expected tool and arguments on a fixed set of questions with time pinned. It turns 'the agent feels worse since Tuesday' into a number you can bisect.",
      },
      {
        head: "Keep the provider swappable",
        body: "One factory behind an interface, model selected by configuration. Capability and pricing move quarterly; that should be a config change, not a refactor.",
      },
    ],
    stack: ["LangGraph", "FastAPI", "Tool schemas", "Evals", "Tracing", "MCP"],
  },
] as const;

/**
 * The hero visual: a reference multi-agent runtime, drawn at the complexity
 * a real production system reaches. This is a teaching diagram of a general
 * architecture, deliberately not a map of any deployed system.
 */
export const agentRuntime = {
  caption: "Reference architecture · multi-agent runtime",
  idle:
    "Guarded entry, a routing supervisor, workers in parallel, synthesis, and a critic that can send the whole thing back. Hover any stage.",
  crossCutting: ["traced end to end", "semantic cache", "offline evals", "bounded iterations"],
  nodes: [
    {
      id: "guard",
      label: "guard",
      x: 210,
      y: 44,
      w: 112,
      note: "Policy and authorization resolved before the model runs. Scope is pinned from verified credentials, input is screened, and secrets never reach the context window.",
    },
    {
      id: "router",
      label: "router",
      x: 210,
      y: 116,
      w: 112,
      note: "Classifies intent, decomposes the task, and decides which workers to wake. A cheap model making the highest-leverage decision in the graph.",
    },
    {
      id: "retrieve",
      label: "retrieve",
      x: 66,
      y: 196,
      w: 92,
      note: "Hybrid search over a vector index, then rerank. Returns cited passages rather than prose, so provenance survives the hop.",
    },
    {
      id: "tools",
      label: "tools",
      x: 210,
      y: 196,
      w: 92,
      note: "Typed function calls against external APIs. The schema is the contract. The model cannot widen it, and tenancy is not a field it can set.",
    },
    {
      id: "sandbox",
      label: "sandbox",
      x: 354,
      y: 196,
      w: 92,
      note: "Generated code runs isolated: no network, no credentials, hard timeout. Its output is treated as data, never as instructions.",
    },
    {
      id: "synth",
      label: "synthesize",
      x: 210,
      y: 272,
      w: 124,
      note: "Merges worker output into one grounded draft, carrying every source forward so the critic has something to check against.",
    },
    {
      id: "critic",
      label: "critic",
      x: 210,
      y: 340,
      w: 112,
      note: "Grades the draft against its sources. On failure it returns a diagnosis to the router. A blind retry just burns tokens and arrives at the same answer.",
    },
    {
      id: "memory",
      label: "memory",
      x: 352,
      y: 340,
      w: 84,
      note: "Episodic and semantic state. The hard problem is not storing turns, it is deciding what is worth carrying into the next one.",
    },
  ],
  edges: [
    { id: "e0", from: "ask", to: "guard", d: "M 210 18 L 210 25" },
    { id: "e1", from: "guard", to: "router", d: "M 210 63 L 210 97" },
    { id: "e2", from: "router", to: "retrieve", d: "M 170 133 C 110 150, 74 158, 66 177" },
    { id: "e3", from: "router", to: "tools", d: "M 210 135 L 210 177" },
    { id: "e4", from: "router", to: "sandbox", d: "M 250 133 C 310 150, 346 158, 354 177" },
    { id: "e5", from: "retrieve", to: "synth", d: "M 66 215 C 74 238, 112 249, 158 255" },
    { id: "e6", from: "tools", to: "synth", d: "M 210 215 L 210 253" },
    { id: "e7", from: "sandbox", to: "synth", d: "M 354 215 C 346 238, 308 249, 262 255" },
    { id: "e8", from: "synth", to: "critic", d: "M 210 291 L 210 321" },
    { id: "e9", from: "critic", to: "memory", d: "M 266 340 L 304 340" },
    { id: "e10", from: "critic", to: "answer", d: "M 210 359 L 210 386" },
  ],
  /** The reflection edge, routed left of the spine, clear of every node. */
  retry: { id: "retry", from: "critic", to: "router", d: "M 154 334 C 126 330, 126 300, 126 258 L 126 162 C 126 134, 134 124, 154 120" },
  /** Pulse order. The second pass through router is the reflection loop. */
  cycle: ["guard", "router", "retrieve", "tools", "sandbox", "synth", "critic", "router", "synth", "critic", "memory"],
} as const;

/** Technology strip under the hero. Breadth at a glance. */
export const marquee = [
  "LangGraph", "FastAPI", "NestJS", "RabbitMQ", "MongoDB", "Snowflake", "Redis", "Angular",
  "Anthropic API", "Docker", "Hasura", "PostgreSQL", "React", "Next.js", "Python", "TypeScript",
  "AWS", "Azure", "DuckDB", "FAISS", "Pinecone", "MCP", "Elasticsearch", "GitHub Actions",
] as const;

export const projects = [
  {
    name: "Instacart BI Agent",
    tagline: "Plain-English questions over 3M+ orders, answered in validated SQL.",
    body: "A LangGraph agent with separate planner, SQL-validator, executor and chart-selector nodes. A malformed or unsafe query is caught before it reaches the warehouse, and the result shape picks its own visualization.",
    stack: ["LangGraph", "Claude", "DuckDB", "Streamlit", "Python"],
    href: "https://github.com/abhinavmahadik2000/Bi-agent",
    featured: true,
    glyph: "◈",
  },
  {
    name: "Multi-PDF Conversational RAG",
    tagline: "Sub-second retrieval across 200MB+ document sets.",
    body: "Recursive splitting chosen over fixed-size windows after it tested ~15% better on long-form research papers. FAISS index, Gemini embeddings, grounded answers that cite the source chunk.",
    stack: ["LangChain", "FAISS", "Gemini Pro", "Streamlit"],
    href: "https://github.com/abhinavmahadik2000?tab=repositories",
    featured: true,
    glyph: "⌬",
  },
  {
    name: "nLSQL Web App",
    tagline: "Text-to-SQL as a service.",
    body: "FastAPI backend and a Next.js front end over a relational schema. The research agent packaged as something other people can point at a database.",
    stack: ["FastAPI", "Next.js", "Python"],
    href: "https://github.com/abhinavmahadik2000/nLSql-webApp",
    featured: false,
    glyph: "⟐",
  },
  {
    name: "CineAI-Agent",
    tagline: "AI backend for cinematic metadata.",
    body: "Recommendation, complex search and analysis over movie databases, built to be extended with additional models and data sources rather than wired to one.",
    stack: ["Node.js", "JavaScript", "LLM APIs"],
    href: "https://github.com/abhinavmahadik2000/CineAI-Agent",
    featured: false,
    glyph: "◐",
  },
  {
    name: "Outreach Agent",
    tagline: "An n8n workflow that drafts cold email and DMs.",
    body: "Reads unprocessed contacts from a sheet, merges a bio and résumé summary with each one, generates a tailored email and a LinkedIn DM, and leaves them as drafts for a human to send.",
    stack: ["n8n", "GPT-4", "Google Sheets", "Gmail API"],
    href: "https://github.com/abhinavmahadik2000/n8n-Agent---Cold-Email-and-DM",
    featured: false,
    glyph: "✉",
  },
  {
    name: "FocuZzz",
    tagline: "Pomodoro timer, shipped and live.",
    body: "React + TypeScript study timer with customizable modes and session tracking. Deployed, used, and small enough to stay finished.",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    href: "https://focuzzz.netlify.app/",
    featured: false,
    glyph: "◷",
  },
] as const;

export const stack = [
  {
    group: "AI & agents",
    note: "Production and research",
    items: [
      "LangGraph",
      "LangChain",
      "Anthropic API",
      "OpenAI",
      "Gemini",
      "MCP",
      "RAG",
      "FAISS",
      "Pinecone",
      "Evals",
      "PEFT / LoRA",
      "Ollama",
    ],
  },
  {
    group: "Backend",
    note: "Where most of the week goes",
    items: ["NestJS", "FastAPI", "Node.js", "Flask", "TypeScript", "Python", "GraphQL", "REST", "JWT / OAuth2"],
  },
  {
    group: "Data",
    note: "Modelling, aggregation, scale",
    items: ["MongoDB", "PostgreSQL", "Snowflake", "Redis", "DuckDB", "MySQL", "Elasticsearch", "Pandas", "SQL"],
  },
  {
    group: "Infrastructure",
    note: "Ship it and keep it up",
    items: ["Docker", "RabbitMQ", "AWS", "Azure", "GitHub Actions", "Nginx", "PM2", "New Relic"],
  },
  {
    group: "Frontend",
    note: "When the backend needs a face",
    items: ["Angular", "React", "Next.js", "Vue", "Tailwind", "RxJS", "Framer Motion"],
  },
] as const;

export const education = [
  {
    school: "University of Texas at Arlington",
    credential: "M.S. Computer Science",
    detail: "GPA 3.62 · Graduate Certificate in Deep Learning",
    period: "2022 – 2024",
    location: "Texas, USA",
  },
  {
    school: "University of Mumbai",
    credential: "B.Tech Computer Engineering",
    detail: "First Class Honours",
    period: "2018 – 2022",
    location: "Mumbai, India",
  },
] as const;


/**
 * The career as a side-scroller. Everything up to and including `current`
 * actually happened; everything after it is speculative and gets less
 * plausible on purpose. The last one is a joke, and should stay one.
 */
export const timeline = {
  nodes: [
    {
      id: "btech",
      stamp: "2018",
      title: "B.Tech begins",
      place: "University of Mumbai",
      note: "Computer Engineering. Four years of fundamentals and a great deal of C.",
      icon: "🎓",
      state: "past",
    },
    {
      id: "intern",
      stamp: "2021",
      title: "First ML internship",
      place: "Exposys Data Labs",
      note: "24% accuracy over baseline, 30% off ETL runtime. Learned that most of ML is the data.",
      icon: "🧪",
      state: "past",
    },
    {
      id: "move",
      stamp: "2022",
      title: "Graduated, then left",
      place: "Mumbai to Texas",
      note: "First Class Honours, then a one way flight and a very long layover.",
      icon: "✈️",
      state: "past",
    },
    {
      id: "aieng",
      stamp: "2024",
      title: "AI Engineer",
      place: "UT Arlington",
      note: "A LangGraph agent that writes its own SQL and repairs its own joins.",
      icon: "🤖",
      state: "past",
    },
    {
      id: "masters",
      stamp: "2024",
      title: "M.S. Computer Science",
      place: "UT Arlington",
      note: "GPA 3.62, plus a Graduate Certificate in Deep Learning.",
      icon: "📜",
      state: "past",
    },
    {
      id: "feast",
      stamp: "2025",
      title: "Software Engineer",
      place: "The Feast",
      note: "Queues, tiered data, marketplace integrations, and the agent layer sitting on top of all of it.",
      icon: "⚡",
      state: "current",
    },
    {
      id: "senior",
      stamp: "next",
      title: "Senior Engineer",
      place: "somewhere interesting",
      note: "Same job, more pager.",
      icon: "📟",
      state: "future",
    },
    {
      id: "staff",
      stamp: "then",
      title: "Staff / Principal AI Engineer",
      place: "to be confirmed",
      note: "Where the diagram gets drawn before the code does, allegedly.",
      icon: "🏗️",
      state: "future",
    },
    {
      id: "head",
      stamp: "later",
      title: "Head of AI",
      place: "still to be confirmed",
      note: "Fewer merge conflicts, considerably more calendar.",
      icon: "🧭",
      state: "future",
    },
    {
      id: "founder",
      stamp: "someday",
      title: "Founder",
      place: "a room with a whiteboard",
      note: "The part where I find out whether any of this actually scales.",
      icon: "🚀",
      state: "future",
    },
    {
      id: "goose",
      stamp: "eventually",
      title: "Goose farmer",
      place: "a field, finally",
      note: "Six geese, no on call rotation, and nobody asking why the dashboard is slow.",
      icon: "🪿",
      state: "future",
    },
  ],
} as const;

export const sections = [
  { id: "work", label: "Work" },
  { id: "patterns", label: "Patterns" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
] as const;

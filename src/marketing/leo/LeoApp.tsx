'use client';

import { useEffect, useRef } from 'react';
import './marketing-base.css';
import './leo.css';

/**
 * LeoApp — Bar Moshe's application page for Leo AI's Full Stack Engineer
 * role (Ramat Gan, hybrid; backend-oriented, on a GenAI product for
 * mechanical engineering).
 *
 * Leo AI's REAL visual language, read live off getleo.ai (2026-07-07):
 *
 *   - A purple-tinted near-black #0E0B12 canvas with #F8F7F3 text and
 *     SERIF display type: PT Serif Caption for the h1, PT Serif for h2,
 *     over a DM Sans body.
 *   - Drafting-table decorations: diagonal hatch bands at the viewport
 *     edges, long dashed construction lines, thin compass arcs.
 *   - A flat #3B60E2 CTA blue (8px radius), periwinkle #A2B6FF text
 *     links ("Explore ›"), deep navy hovers.
 *   - A monochrome trusted-by marquee under a small serif label,
 *     alternating two-panel feature cards, a 4-card benefit row with
 *     thin-line icons, and serif testimonial blocks with a dot pager.
 *
 * The centerpiece reframes Leo's spec-to-assembly story as Bar's own:
 * a brief in, an AI-agent build loop in the middle, a shipped product
 * out. Every shape is drawn fresh as original SVG/CSS; no Leo asset or
 * product copy is used. Copy is Bar's plain first-person register,
 * addressing Leo AI. All motion is gated on prefers-reduced-motion;
 * the page is fully legible with no JS.
 */

const EMAIL = 'mailto:1barmoshe1@gmail.com?subject=bar-for-leo-ai';
const CV = '/Bar_Moshe_CV_LeoAI.pdf';
const LINKEDIN = 'https://www.linkedin.com/in/barmoshe/';
const GITHUB = 'https://github.com/barmoshe';
const WHATSAPP = 'https://wa.me/972546561465';

/* ── The stack marquee: static, build-time strings only. ────────────────── */
const STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Temporal',
  'Claude Code',
  'Python',
  'Go',
];

/* ── Benefit row: four cards mapped honestly to the JD. ─────────────────── */
type BenefitIcon = 'react' | 'server' | 'container' | 'pipeline';
const BENEFITS: { icon: BenefitIcon; h: string; p: string }[] = [
  {
    icon: 'react',
    h: 'React on the Front',
    p: 'Production React and Next.js with TypeScript, shipped across ten live projects below. Component structure other people can read, built fast and kept fast.',
  },
  {
    icon: 'server',
    h: 'Node on the Back',
    p: 'Israelify is a full Node service I built: auth, middleware, streaming, and logging under a React front end, with MongoDB behind it and REST APIs designed on purpose.',
  },
  {
    icon: 'container',
    h: 'Cloud and Containers',
    p: 'Docker and Kubernetes hands-on from a Wix DevOps workshop (Amazon EKS, Terraform, microservices), plus real DevOps ownership at Joomsy, an early-stage startup.',
  },
  {
    icon: 'pipeline',
    h: 'Pipelines That Outlive a Request',
    p: 'I have not run Kafka in production. I have shipped the same shape: one Temporal workflow orchestrating Go, Python, and TypeScript workers, featured on Temporal’s Code Exchange.',
  },
];

/* ── Experience + education, from the canonical CV digest. ─────────────── */
const EXPERIENCE: { role: string; period: string; note: string }[] = [
  {
    role: 'Software Developer, Joomsy',
    period: '2025 – present',
    note: 'Primary developer at an early-stage startup, team of five. Full-stack and DevOps, with real ownership across engineering and product.',
  },
  {
    role: 'Freelance AI Builder',
    period: '2026 – present',
    note: 'Independent practice run through an AI-agent harness: scope a brief, ship an MVP from intake to deploy, including a production video-rendering pipeline.',
  },
  {
    role: 'Customer Support Engineer, Wochit',
    period: '2021 – present',
    note: 'Technical support for a cloud video editor at scale: troubleshoot, resolve, and feed fixes back to the development teams.',
  },
];

const EDUCATION: { name: string; note: string }[] = [
  {
    name: 'B.Sc. Computer Science, Afeka College of Engineering',
    note: 'Breadth from low-level assembly to .NET, plus operating systems, data structures, and algorithms.',
  },
  {
    name: 'DevOps workshop, Wix (Tel Aviv)',
    note: 'Hands-on Amazon EKS, Kubernetes, Terraform, and microservices.',
  },
  {
    name: 'Full-Stack Bootcamp, Coding Academy',
    note: 'Intensive Node.js, React, and MongoDB.',
  },
];

/* ── The work grid: the standard roster, reused verbatim. ───────────────── */
type Glyph =
  | 'deck'
  | 'flow'
  | 'logic'
  | 'harness'
  | 'home'
  | 'plane'
  | 'flower'
  | 'wave'
  | 'silk'
  | 'film';

const REPORTS: { name: string; tag: string; href: string; glyph: Glyph }[] = [
  {
    name: 'MDP',
    tag: 'Compiler · AI tooling',
    href: 'https://barmoshe.github.io/mdp/',
    glyph: 'deck',
  },
  {
    name: 'Temporal Data Service',
    tag: 'Durable workflows',
    href: 'https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal',
    glyph: 'flow',
  },
  {
    name: 'Entailer',
    tag: 'AI + formal logic',
    href: 'https://barmoshe.github.io/entailer/',
    glyph: 'logic',
  },
  {
    name: 'Creative Harness',
    tag: 'AI agents · Systems',
    href: 'https://github.com/barmoshe/claude-creative-stack',
    glyph: 'harness',
  },
  {
    name: 'Catalogue Orchestrator',
    tag: 'AI video · Orchestration',
    href: 'https://barmoshe.github.io/catalogue-orchestrator/',
    glyph: 'film',
  },
  {
    name: 'Apartment Hunter',
    tag: 'Product · Web app',
    href: 'https://apartment-hunter-one.vercel.app',
    glyph: 'home',
  },
  {
    name: 'Trip Planner',
    tag: 'Product · Web app',
    href: 'https://trip-planner-six-iota.vercel.app',
    glyph: 'plane',
  },
  {
    name: 'Bloom Garden',
    tag: 'Computer vision · Game',
    href: 'https://bloom-garden-five.vercel.app',
    glyph: 'flower',
  },
  {
    name: 'Biome Synth',
    tag: 'Generative · Audio',
    href: 'https://biome-synth.lovable.app',
    glyph: 'wave',
  },
  {
    name: 'Aurora',
    tag: 'WebGL · Graphics',
    href: 'https://aurora-eight-iota.vercel.app',
    glyph: 'silk',
  },
];

/* ── Scroll reveal: adds .is-in when a [data-reveal] enters the viewport. */
function useReveal(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);
}

/* ── The nav mark: an original compass-drawn B inside the white tile. ───── */
function MarkGlyph() {
  const s = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {/* a drafted capital B: straight spine, two compass arcs */}
      <path d="M8 4.5v15" {...s} />
      <path d="M8 4.5h5a3.5 3.5 0 0 1 0 7H8" {...s} />
      <path d="M8 11.5h5.6a4 4 0 0 1 0 8H8" {...s} />
    </svg>
  );
}

/* ── Thin compass arcs sweeping the hero, like construction curves. ────── */
function HeroArcs() {
  return (
    <div className="le-arcs" aria-hidden="true">
      <svg viewBox="0 0 1440 640" fill="none" preserveAspectRatio="xMidYMid slice">
        <circle cx="1180" cy="-160" r="520" stroke="#f8f7f3" strokeOpacity="0.09" />
        <circle cx="120" cy="760" r="460" stroke="#f8f7f3" strokeOpacity="0.08" />
        <circle cx="1310" cy="700" r="300" stroke="#a2b6ff" strokeOpacity="0.07" />
        <path d="M1005 640V404" stroke="#f8f7f3" strokeOpacity="0.14" />
      </svg>
    </div>
  );
}

/* ── The hero card: an original build-session vignette with a serif
      caption, replicating the shape of Leo's captioned video card. ─────── */
function HeroCardArt() {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label="A stylized build session: a browser window taking shape over a drafting grid, with dimension lines marking it like an engineering drawing.">
      <rect width="640" height="400" fill="#2d2735" />
      {/* drafting grid */}
      <g stroke="#f8f7f3" strokeOpacity="0.05">
        <path d="M80 0v400M160 0v400M240 0v400M320 0v400M400 0v400M480 0v400M560 0v400" />
        <path d="M0 80h640M0 160h640M0 240h640M0 320h640" />
      </g>
      {/* dashed construction lines through the composition */}
      <path d="M0 58h640" stroke="#a2b6ff" strokeOpacity="0.25" strokeDasharray="6 8" />
      <path d="M92 0v400" stroke="#a2b6ff" strokeOpacity="0.2" strokeDasharray="6 8" />
      {/* the product window, drafted */}
      <rect x="128" y="86" width="384" height="238" rx="10" fill="#0e0b12" stroke="#f8f7f3" strokeOpacity="0.35" />
      <path d="M128 122h384" stroke="#f8f7f3" strokeOpacity="0.25" />
      <circle cx="150" cy="104" r="4.5" fill="#ff492c" fillOpacity="0.75" />
      <circle cx="166" cy="104" r="4.5" fill="#f8f7f3" fillOpacity="0.3" />
      <circle cx="182" cy="104" r="4.5" fill="#3b60e2" />
      {/* content blocks inside the window */}
      <rect x="150" y="142" width="150" height="14" rx="4" fill="#f8f7f3" fillOpacity="0.5" />
      <rect x="150" y="168" width="216" height="9" rx="3" fill="#f8f7f3" fillOpacity="0.22" />
      <rect x="150" y="185" width="184" height="9" rx="3" fill="#f8f7f3" fillOpacity="0.22" />
      <rect x="150" y="212" width="96" height="30" rx="6" fill="#3b60e2" />
      <rect x="150" y="260" width="340" height="44" rx="6" fill="#f8f7f3" fillOpacity="0.06" stroke="#a2b6ff" strokeOpacity="0.3" />
      <circle cx="172" cy="282" r="8" fill="none" stroke="#a2b6ff" strokeOpacity="0.7" strokeWidth="2" />
      <path d="M168.5 282l2.5 2.5 4.5-5" stroke="#a2b6ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="190" y="276" width="150" height="11" rx="3" fill="#a2b6ff" fillOpacity="0.4" />
      {/* right rail: agent panel sketch */}
      <rect x="392" y="142" width="98" height="100" rx="6" fill="#1e1a24" stroke="#a2b6ff" strokeOpacity="0.35" />
      <rect x="402" y="154" width="60" height="8" rx="3" fill="#a2b6ff" fillOpacity="0.55" />
      <rect x="402" y="170" width="78" height="7" rx="3" fill="#f8f7f3" fillOpacity="0.2" />
      <rect x="402" y="184" width="70" height="7" rx="3" fill="#f8f7f3" fillOpacity="0.2" />
      <rect x="402" y="198" width="74" height="7" rx="3" fill="#f8f7f3" fillOpacity="0.2" />
      <rect x="402" y="216" width="46" height="14" rx="4" fill="#3b60e2" fillOpacity="0.85" />
      {/* dimension lines, like an engineering drawing */}
      <g stroke="#a2b6ff" strokeOpacity="0.65">
        <path d="M128 348v14M512 348v14M128 355h384" />
        <path d="M128 355l10-4v8l-10-4ZM512 355l-10-4v8l10-4Z" fill="#a2b6ff" fillOpacity="0.65" stroke="none" />
        <path d="M548 86h14M548 324h14M555 86v238" />
        <path d="M555 86l-4 10h8l-4-10ZM555 324l-4-10h8l4 10" fill="#a2b6ff" fillOpacity="0.65" stroke="none" />
      </g>
      <text x="618" y="380" fontSize="13" fill="#a2b6ff" fillOpacity="0.8" textAnchor="end" style={{ fontFamily: 'var(--le-serif)' }}>
        fig. 1, a product, drafted and shipped
      </text>
    </svg>
  );
}

/* ── The centerpiece: a brief in -> the build loop -> shipped out. ──────── */
function AssemblyFlow() {
  const sources = [
    { label: 'A brief', y: 104 },
    { label: 'A spec', y: 204 },
    { label: 'Constraints', y: 304 },
  ];
  const layers = [
    { label: 'Plan', y: 168 },
    { label: 'Generate', y: 222 },
    { label: 'Verify', y: 276 },
  ];
  const outputs = [
    { label: 'Web app', sub: 'deployed', y: 104 },
    { label: 'REST API', sub: 'documented', y: 204 },
    { label: 'Pipeline', sub: 'orchestrated', y: 304 },
  ];
  return (
    <svg
      viewBox="0 0 1040 420"
      role="img"
      aria-label="Bar's build loop, drawn like an engineering diagram: a brief, a spec, and constraints flow into a plan, generate, verify loop, which ships a deployed web app, a documented REST API, and an orchestrated pipeline."
    >
      <defs>
        <pattern id="le-hatchfill" width="7" height="7" patternTransform="rotate(115)" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="none" />
          <path d="M0 0v7" stroke="#a2b6ff" strokeOpacity="0.22" />
        </pattern>
      </defs>

      {/* left connectors: sources -> loop */}
      {sources.map((sc, i) => (
        <path
          key={`lc-${i}`}
          className="le-conn"
          d={`M200 ${sc.y} C300 ${sc.y} 340 ${168 + i * 54} 428 ${168 + i * 54}`}
          fill="none"
          stroke="#a2b6ff"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      ))}

      {/* right connectors: loop -> outputs */}
      {outputs.map((o, i) => (
        <path
          key={`rc-${i}`}
          className="le-conn le-conn-r"
          d={`M622 ${168 + i * 54} C720 ${168 + i * 54} 760 ${o.y} 846 ${o.y}`}
          fill="none"
          stroke="#a2b6ff"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      ))}

      {/* source tiles */}
      {sources.map((sc, i) => (
        <g key={`s-${i}`}>
          <rect x="30" y={sc.y - 27} width="170" height="54" rx="8" fill="#2d2735" stroke="rgba(248,247,243,0.16)" />
          <circle cx="56" cy={sc.y} r="5" fill="none" stroke="#a2b6ff" strokeWidth="1.8" />
          <text x="74" y={sc.y + 5} fontSize="15" fontWeight="500" fill="#f8f7f3">
            {sc.label}
          </text>
        </g>
      ))}
      <text x="115" y="374" fontSize="13" fill="rgba(248,247,243,0.6)" textAnchor="middle" letterSpacing="2.5" style={{ fontFamily: 'var(--le-serif)' }}>
        SPEC IN
      </text>

      {/* the build-loop slab: hatched drop shadow, blue panel, spaced title */}
      <rect x="440" y="108" width="170" height="206" rx="10" fill="url(#le-hatchfill)" transform="translate(10 10)" />
      <rect x="430" y="98" width="170" height="216" rx="10" fill="#3b60e2" />
      <text x="515" y="130" fontSize="14" fontWeight="700" fill="#ffffff" textAnchor="middle">
        My build loop
      </text>
      {layers.map((l, i) => (
        <g key={`ly-${i}`}>
          <rect x="448" y={l.y - 18} width="134" height="38" rx="6" fill="rgba(14,11,18,0.32)" stroke="rgba(255,255,255,0.35)" />
          <text x="515" y={l.y + 5} fontSize="14" fontWeight="500" fill="#ffffff" textAnchor="middle">
            {l.label}
          </text>
        </g>
      ))}
      <text x="515" y="374" fontSize="13" fill="#a2b6ff" textAnchor="middle" letterSpacing="2.5" style={{ fontFamily: 'var(--le-serif)' }}>
        AGENT-OPERATED · HAND-FINISHED
      </text>

      {/* output tiles */}
      {outputs.map((o, i) => (
        <g key={`o-${i}`}>
          <rect x="846" y={o.y - 27} width="164" height="54" rx="8" fill="#2d2735" stroke="rgba(248,247,243,0.16)" />
          <rect x="846" y={o.y - 27} width="4" height="54" rx="2" fill="#3b60e2" />
          <text x="866" y={o.y + 1} fontSize="15" fontWeight="500" fill="#f8f7f3">
            {o.label}
          </text>
          <text x="866" y={o.y + 18} fontSize="11" fill="rgba(248,247,243,0.55)">
            {o.sub}
          </text>
        </g>
      ))}
      <text x="928" y="374" fontSize="13" fill="rgba(248,247,243,0.6)" textAnchor="middle" letterSpacing="2.5" style={{ fontFamily: 'var(--le-serif)' }}>
        SHIPPED OUT
      </text>

      {/* a dimension line across the whole flow, drawing-style */}
      <g stroke="#a2b6ff" strokeOpacity="0.5">
        <path d="M30 396v10M1010 396v10M30 401h980" />
      </g>
      <path d="M30 401l12-4.5v9L30 401Z" fill="#a2b6ff" fillOpacity="0.5" />
      <path d="M1010 401l-12-4.5v9l12-4.5Z" fill="#a2b6ff" fillOpacity="0.5" />
      <rect x="455" y="388" width="130" height="26" rx="4" fill="#1e1a24" />
      <text x="520" y="405" fontSize="12" fill="#a2b6ff" textAnchor="middle" style={{ fontFamily: 'var(--le-serif)' }}>
        hours to days
      </text>
    </svg>
  );
}

/* ── Feature media vignettes (original, drafting register). ─────────────── */
function AgentSessionArt() {
  return (
    <svg viewBox="0 0 440 300" role="img" aria-label="A stylized agent session: prompt and tool-call blocks resolving into a checked result.">
      <rect width="440" height="300" rx="8" fill="#2d2735" />
      <g stroke="#f8f7f3" strokeOpacity="0.05">
        <path d="M110 0v300M220 0v300M330 0v300M0 75h440M0 150h440M0 225h440" />
      </g>
      <path d="M0 40h440" stroke="#a2b6ff" strokeOpacity="0.22" strokeDasharray="6 8" />
      {/* prompt block */}
      <rect x="36" y="58" width="240" height="52" rx="8" fill="#1e1a24" stroke="rgba(248,247,243,0.16)" />
      <rect x="52" y="74" width="120" height="9" rx="3" fill="#f8f7f3" fillOpacity="0.5" />
      <rect x="52" y="90" width="180" height="8" rx="3" fill="#f8f7f3" fillOpacity="0.2" />
      {/* tool-call block */}
      <rect x="122" y="126" width="282" height="58" rx="8" fill="#15295a" stroke="rgba(162,182,255,0.4)" />
      <rect x="138" y="141" width="76" height="9" rx="3" fill="#a2b6ff" fillOpacity="0.8" />
      <rect x="138" y="158" width="180" height="8" rx="3" fill="#a2b6ff" fillOpacity="0.35" />
      <rect x="138" y="171" width="150" height="7" rx="3" fill="#a2b6ff" fillOpacity="0.25" />
      {/* result block with check */}
      <rect x="36" y="200" width="330" height="56" rx="8" fill="#1e1a24" stroke="rgba(59,96,226,0.55)" />
      <circle cx="64" cy="228" r="11" fill="none" stroke="#3b60e2" strokeWidth="2.4" />
      <path d="M58.5 228l4 4 7-8" stroke="#3b60e2" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="216" width="150" height="9" rx="3" fill="#f8f7f3" fillOpacity="0.5" />
      <rect x="88" y="233" width="220" height="8" rx="3" fill="#f8f7f3" fillOpacity="0.22" />
      {/* connectors */}
      <path d="M156 110v16M263 184v16" stroke="#a2b6ff" strokeOpacity="0.55" strokeDasharray="4 6" />
    </svg>
  );
}

function ShippedStackArt() {
  return (
    <svg viewBox="0 0 440 300" role="img" aria-label="A stylized stack of shipped product windows, each marked live.">
      <rect width="440" height="300" rx="8" fill="#2d2735" />
      <g stroke="#f8f7f3" strokeOpacity="0.05">
        <path d="M110 0v300M220 0v300M330 0v300M0 75h440M0 150h440M0 225h440" />
      </g>
      <path d="M64 0v300" stroke="#a2b6ff" strokeOpacity="0.2" strokeDasharray="6 8" />
      {/* back window */}
      <rect x="118" y="46" width="250" height="150" rx="8" fill="#1e1a24" stroke="rgba(248,247,243,0.14)" />
      <path d="M118 72h250" stroke="#f8f7f3" strokeOpacity="0.16" />
      {/* mid window */}
      <rect x="88" y="84" width="250" height="150" rx="8" fill="#1e1a24" stroke="rgba(248,247,243,0.2)" />
      <path d="M88 110h250" stroke="#f8f7f3" strokeOpacity="0.2" />
      {/* front window */}
      <rect x="58" y="122" width="250" height="150" rx="8" fill="#0e0b12" stroke="rgba(162,182,255,0.45)" />
      <path d="M58 148h250" stroke="#f8f7f3" strokeOpacity="0.25" />
      <circle cx="76" cy="135" r="4" fill="#ff492c" fillOpacity="0.75" />
      <circle cx="90" cy="135" r="4" fill="#f8f7f3" fillOpacity="0.3" />
      <circle cx="104" cy="135" r="4" fill="#3b60e2" />
      <rect x="76" y="164" width="110" height="11" rx="4" fill="#f8f7f3" fillOpacity="0.5" />
      <rect x="76" y="186" width="170" height="8" rx="3" fill="#f8f7f3" fillOpacity="0.22" />
      <rect x="76" y="201" width="140" height="8" rx="3" fill="#f8f7f3" fillOpacity="0.22" />
      <rect x="76" y="224" width="82" height="26" rx="6" fill="#3b60e2" />
      {/* live badges */}
      <g>
        <rect x="330" y="238" width="72" height="26" rx="13" fill="#15295a" stroke="rgba(162,182,255,0.5)" />
        <circle cx="346" cy="251" r="4" fill="#a2b6ff" />
        <text x="358" y="256" fontSize="13" fontWeight="500" fill="#f8f7f3">
          live
        </text>
      </g>
      {/* dimension marks */}
      <g stroke="#a2b6ff" strokeOpacity="0.6">
        <path d="M380 122h14M380 272h14M387 122v150" />
      </g>
      <path d="M387 122l-4 10h8l-4-10Z" fill="#a2b6ff" fillOpacity="0.6" />
      <path d="M387 272l-4-10h8l4 10" fill="#a2b6ff" fillOpacity="0.6" />
    </svg>
  );
}

/* ── Icons for the benefit row (thin-line, like Leo's). ─────────────────── */
function BenefitGlyph({ g }: { g: BenefitIcon }) {
  const s = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const;
  switch (g) {
    case 'react':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <ellipse cx="16" cy="16" rx="12" ry="5.2" {...s} />
          <ellipse cx="16" cy="16" rx="12" ry="5.2" transform="rotate(60 16 16)" {...s} />
          <ellipse cx="16" cy="16" rx="12" ry="5.2" transform="rotate(120 16 16)" {...s} />
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <rect x="5" y="6" width="22" height="8" rx="2" {...s} />
          <rect x="5" y="18" width="22" height="8" rx="2" {...s} />
          <path d="M9 10h.02M9 22h.02M14 10h.02M14 22h.02" {...s} />
        </svg>
      );
    case 'container':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16 4 27 9.5v13L16 28 5 22.5v-13L16 4Z" {...s} />
          <path d="M5 9.5 16 15l11-5.5M16 15v13" {...s} />
        </svg>
      );
    case 'pipeline':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <circle cx="7" cy="16" r="3.2" {...s} />
          <circle cx="25" cy="8" r="3.2" {...s} />
          <circle cx="25" cy="24" r="3.2" {...s} />
          <path d="M10 14.6 22 9.2M10 17.4l12 5.4" {...s} />
        </svg>
      );
  }
}

/* ── Line glyphs for the work grid links. ───────────────────────────────── */
function ReportGlyph({ g }: { g: Glyph }) {
  const s = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const;
  switch (g) {
    case 'deck':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="5" y="7" width="22" height="15" rx="2.5" {...s} />
          <path d="M11 27h10M13 13h10M13 17h6" {...s} />
        </svg>
      );
    case 'flow':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="8" cy="8" r="4" {...s} />
          <circle cx="24" cy="16" r="4" {...s} />
          <circle cx="8" cy="24" r="4" {...s} />
          <path d="M12 9.5 20 14M12 22.5 20 18" {...s} />
        </svg>
      );
    case 'logic':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 10h8l4 6-4 6H6M18 16h8" {...s} />
          <path d="M23 12l4 4-4 4" {...s} />
        </svg>
      );
    case 'harness':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="10" y="10" width="12" height="12" rx="3" {...s} />
          <path d="M16 4v6M16 22v6M4 16h6M22 16h6" {...s} />
        </svg>
      );
    case 'film':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="5" y="8" width="22" height="16" rx="3" {...s} />
          <path d="M5 13h22M10 8v16M22 8v16" {...s} />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 15 16 6l10 9M9 13v12h14V13" {...s} />
          <path d="M13 25v-7h6v7" {...s} />
        </svg>
      );
    case 'plane':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 18 28 8l-7 18-5-7-8 4 5-6Z" {...s} />
        </svg>
      );
    case 'flower':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="13" r="3.5" {...s} />
          <path d="M16 5v4M16 17v10M9 10l4 2M23 10l-4 2M10 26c2-4 4-5 6-5s4 1 6 5" {...s} />
        </svg>
      );
    case 'wave':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 16c3-7 6-7 8 0s5 7 8 0 5-7 8 0" {...s} />
        </svg>
      );
    case 'silk':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M5 22c6-3 8-9 6-14 7 1 11 6 11 12M9 27c8-1 14-6 16-13" {...s} />
        </svg>
      );
  }
}

/* ── Line icons for the contact tiles. ──────────────────────────────────── */
function MailIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="5" y="8" width="22" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="m6 10 10 8 10-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M16 6c7 0 12 4.6 12 10.3S23 26.6 16 26.6c-1.4 0-2.7-.15-3.9-.45L6 28l1.6-5.4C6 20.7 4 18.7 4 16.3 4 10.6 9 6 16 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M9 4h10l5 5v19H9V4Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M19 4v5h5M13 16h8M13 20h8M13 24h5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M12 10 5 16l7 6M20 10l7 6-7 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */

export default function LeoApp() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div className="mp-root le-root" ref={rootRef}>
      <a className="skip-link" href="#le-main">
        Skip to content
      </a>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="le-nav">
        <div className="le-nav-inner">
          <a className="le-mark" href="#le-main" aria-label="bar for leo ai, back to top">
            <span className="le-mark-glyph" aria-hidden="true">
              <MarkGlyph />
            </span>
            <span className="le-wordmark">bar for leo ai</span>
          </a>
          <nav className="le-nav-links" aria-label="Page sections">
            <a href="#le-flow">The loop</a>
            <a href="#le-why">Why me</a>
            <a href="#le-work">The work</a>
            <a href="#le-contact">Contact</a>
          </nav>
          <div className="le-nav-cta">
            <a className="le-nav-signin" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="le-nav-pill" href={EMAIL}>
              Say hi <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </header>

      <main id="le-main">
        {/* ── Hero: serif headline left, captioned card right. ──────────── */}
        <section className="le-hero" aria-labelledby="le-hero-h">
          <HeroArcs />
          <span className="le-hatch le-hatch-l" aria-hidden="true" />
          <span className="le-hatch le-hatch-r" aria-hidden="true" />
          <span className="le-dashline" aria-hidden="true" />
          <div className="le-hero-inner">
            <div className="le-hero-copy">
              <p className="le-hero-pill">
                <span className="le-pill-dot" aria-hidden="true" />
                Applying · Full Stack Engineer · Ramat Gan
              </p>
              <h1 id="le-hero-h">
                An engineer already built for{' '}
                <span className="le-hero-em">an AI-forward team.</span>
              </h1>
              <p className="le-hero-sub">
                I&apos;m Bar Moshe. Leo AI describes a culture that lives AI
                rather than just building it. That is my daily practice too:
                I ship production work through Claude Code, an AI-agent
                harness, with the React and Node systems around it built by
                hand. This page is the application.
              </p>
              <div className="le-hero-cta">
                <a className="le-btn le-btn-lg" href="#le-work">
                  See the work <span aria-hidden="true">›</span>
                </a>
                <a className="le-btn-ghost le-btn-lg" href={CV} target="_blank" rel="noreferrer">
                  Download CV <span aria-hidden="true">›</span>
                </a>
              </div>
            </div>
            <div className="le-hero-card" data-reveal>
              <HeroCardArt />
              <div className="le-hero-card-caption">
                <b>Bar Moshe</b>
                <span>Applying · Full Stack Engineer, Leo AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stack marquee (their trusted-by ticker). ──────────────────── */}
        <section className="le-ticker" aria-label="The stack in production">
          <span className="le-kicker">The stack I ship with</span>
          <div className="le-ticker-viewport">
            <div className="le-ticker-track">
              {STACK.map((t) => (
                <span className="le-ticker-item" key={t}>
                  {t}
                </span>
              ))}
              {STACK.map((t) => (
                <span className="le-ticker-item" key={`dup-${t}`} aria-hidden="true">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── The build-loop centerpiece. ───────────────────────────────── */}
        <section className="le-flow-section" id="le-flow" aria-labelledby="le-flow-h">
          <div className="le-flow-panel" data-reveal>
            <div className="le-flow-caption">
              <span className="le-kicker">How I build</span>
              <h2 id="le-flow-h">A brief in, a complete product out.</h2>
              <p>
                Leo turns a spec into a complete assembly. My loop has the
                same shape: a brief goes in, an AI-agent harness plans,
                generates, and verifies, and a working product comes out
                deployed. Israelify is the Node backend proof, the Temporal
                pipeline is the orchestration proof, and ten live projects
                below are the output.
              </p>
            </div>
            <div className="le-flow-svg-wrap">
              <AssemblyFlow />
            </div>
          </div>
        </section>

        {/* ── Two-panel feature cards (their alternating grammar). ──────── */}
        <div className="le-features">
          <section className="le-feature" aria-labelledby="le-feat-ai-h" data-reveal>
            <div className="le-feature-media" aria-hidden="true">
              <AgentSessionArt />
            </div>
            <div className="le-feature-body">
              <h2 id="le-feat-ai-h">Build with AI, not just on it</h2>
              <p>
                The posting asks for proficiency with AI-assisted coding
                tools. Claude Code is how I work every day, and I also build
                the other side: LLM apps, MCP servers, Claude Code and Codex
                plugins, agents and evals. MIDI GPT is a REST API over
                OpenAI; Entailer pairs an LLM with formal logic checking.
              </p>
              <a className="le-link-chevron" href={GITHUB} target="_blank" rel="noreferrer">
                Explore the AI work <span aria-hidden="true">›</span>
              </a>
            </div>
          </section>

          <section className="le-feature" aria-labelledby="le-feat-ship-h" data-reveal>
            <div className="le-feature-body">
              <h2 id="le-feat-ship-h">Ship complete products, not fragments</h2>
              <p>
                Ten public projects, each one live and clickable below:
                React and Next.js front ends, Node backends, real deploys
                that stay up. I take a brief from intake to production and
                keep it running, which is what a growing product team
                actually needs from a full stack seat.
              </p>
              <a className="le-link-chevron" href="#le-work">
                Explore the work <span aria-hidden="true">›</span>
              </a>
            </div>
            <div className="le-feature-media" aria-hidden="true">
              <ShippedStackArt />
            </div>
          </section>
        </div>

        {/* ── Benefit row: four cards mapped to the JD. ─────────────────── */}
        <section className="le-benefits" id="le-why" aria-labelledby="le-why-h">
          <div className="le-section-head" data-reveal>
            <h2 id="le-why-h">What the role asks for, matched with proof</h2>
            <p>
              Not adjectives: shipped projects, named below, each one
              checkable in a click.
            </p>
          </div>
          <div className="le-benefit-grid">
            {BENEFITS.map((b, i) => (
              <article className="le-benefit-card" key={b.h} data-reveal style={{ transitionDelay: `${(i % 4) * 0.05}s` }}>
                <span className="le-benefit-icon">
                  <BenefitGlyph g={b.icon} />
                </span>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── The honest story beat, in their serif quote styling. ──────── */}
        <section className="le-quote-section" aria-label="A note on domain background">
          <figure className="le-quote" data-reveal>
            <blockquote>
              &ldquo;Mechanical engineering is new to me. Learning a domain
              fast is not: ten live projects across video, logic tooling,
              generative audio, and workflow orchestration, each one a
              different problem shape.&rdquo;
            </blockquote>
            <figcaption>
              <b>Bar Moshe</b>
              <span>On joining a domain-deep team</span>
            </figcaption>
            <div className="le-quote-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </figure>
        </section>

        {/* ── Experience + education. ───────────────────────────────────── */}
        <section className="le-cv" aria-labelledby="le-cv-h">
          <div className="le-section-head" data-reveal>
            <h2 id="le-cv-h">Shipping now, the rest is on the CV</h2>
          </div>
          <div className="le-cv-grid">
            <div className="le-cv-col" data-reveal>
              <h3 className="le-cv-title">Experience</h3>
              <div className="le-cv-list">
                {EXPERIENCE.map((e) => (
                  <div className="le-cv-item" key={e.role}>
                    <div className="le-cv-role">
                      <b>{e.role}</b>
                      <span className="le-cv-period">{e.period}</span>
                    </div>
                    <p>{e.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="le-cv-col" data-reveal style={{ transitionDelay: '0.08s' }}>
              <h3 className="le-cv-title">Education &amp; training</h3>
              <div className="le-cv-list">
                {EDUCATION.map((e) => (
                  <div className="le-cv-item" key={e.name}>
                    <span className="le-cv-edu">{e.name}</span>
                    <p>{e.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Work grid: ten shipped builds. ────────────────────────────── */}
        <section className="le-work" id="le-work" aria-labelledby="le-work-h">
          <div className="le-section-head" data-reveal>
            <h2 id="le-work-h">Ten builds, all live. Open one; it runs.</h2>
          </div>
          <div className="le-work-grid">
            {REPORTS.map((r, i) => (
              <a
                className="le-work-card"
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 0.06}s` }}
              >
                <span className="le-work-tag">
                  <span className="le-work-glyph">
                    <ReportGlyph g={r.glyph} />
                  </span>
                  {r.tag}
                </span>
                <h3>{r.name}</h3>
                <span className="le-link-chevron" style={{ paddingTop: 8 }}>
                  See it live <span aria-hidden="true">›</span>
                </span>
              </a>
            ))}
          </div>
          <p className="le-work-note" data-reveal>
            Day job: Joomsy, where I am the primary full-stack and DevOps
            engineer on a team of five. Their code stays theirs, so it is
            named here, not linked.
          </p>
        </section>

        {/* ── Close: centered serif line over hatched edges. ────────────── */}
        <section className="le-close" id="le-contact" aria-labelledby="le-close-h">
          <span className="le-hatch le-hatch-l" aria-hidden="true" />
          <span className="le-hatch le-hatch-r" aria-hidden="true" />
          <div className="le-close-head" data-reveal>
            <h2 id="le-close-h">
              Unlock a full stack engineer who already lives AI.
            </h2>
            <p>
              I&apos;d like to build Leo AI&apos;s product with you. Four
              ways to start that conversation, no forms.
            </p>
          </div>
          <div className="le-tiles">
            <a className="le-tile" href={EMAIL} data-reveal>
              <span className="le-tile-icon">
                <MailIcon />
              </span>
              <span className="le-tile-label">
                Email <span aria-hidden="true">›</span>
              </span>
            </a>
            <a className="le-tile" href={WHATSAPP} target="_blank" rel="noreferrer" data-reveal style={{ transitionDelay: '0.06s' }}>
              <span className="le-tile-icon">
                <ChatIcon />
              </span>
              <span className="le-tile-label">
                WhatsApp <span aria-hidden="true">›</span>
              </span>
            </a>
            <a className="le-tile" href={CV} target="_blank" rel="noreferrer" data-reveal style={{ transitionDelay: '0.12s' }}>
              <span className="le-tile-icon">
                <DocIcon />
              </span>
              <span className="le-tile-label">
                CV download <span aria-hidden="true">›</span>
              </span>
            </a>
            <a className="le-tile" href={GITHUB} target="_blank" rel="noreferrer" data-reveal style={{ transitionDelay: '0.18s' }}>
              <span className="le-tile-icon">
                <CodeIcon />
              </span>
              <span className="le-tile-label">
                GitHub <span aria-hidden="true">›</span>
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer. ────────────────────────────────────────────────────── */}
      <footer className="le-footer">
        <div className="le-footer-top">
          <span className="le-footer-mark">
            <span className="le-mark-glyph" aria-hidden="true">
              <MarkGlyph />
            </span>
            bar for leo ai
          </span>
          <div className="le-footer-cols">
            <nav aria-label="Work links">
              <span className="le-footer-col-title">Work</span>
              <a href="#le-work">The work</a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
            <nav aria-label="Contact links">
              <span className="le-footer-col-title">Contact</span>
              <a href={EMAIL}>Email</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={CV} target="_blank" rel="noreferrer">
                CV
              </a>
            </nav>
            <nav aria-label="Page sections">
              <span className="le-footer-col-title">Page</span>
              <a href="#le-main">Top</a>
              <a href="#le-why">Why me</a>
              <a href="#le-contact">Contact</a>
            </nav>
          </div>
        </div>
        <p>
          Bar Moshe © 2026. A personal application page, not an official Leo
          AI page; Leo AI and its brand belong to Leo AI, Inc. Every drawing
          here is original.
        </p>
      </footer>
    </div>
  );
}

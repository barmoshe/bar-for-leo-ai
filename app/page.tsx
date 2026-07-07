import type { Metadata } from "next";
import { PT_Serif, PT_Serif_Caption, DM_Sans } from "next/font/google";
import LeoApp from "@/src/marketing/leo/LeoApp";

// Leo AI's real marketing face (read live off getleo.ai, 2026-07-07)
// sets its display type in PT Serif Caption (h1) and PT Serif (h2) over
// a DM Sans body. All three are free Google Fonts, so the type here is
// an authentic match, not a substitute.
const serifCaption = PT_Serif_Caption({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-le-serifcap",
  display: "swap",
});

const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-le-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-le-sans",
  display: "swap",
});

// Personalized application page for Bar Moshe's application to Leo AI
// for the Full Stack Engineer role (Ramat Gan, hybrid; backend-oriented,
// on a GenAI product for mechanical engineering). Built as a faithful
// replica of Leo AI's own visual language, read live off getleo.ai
// (2026-07-07): a dark #0E0B12 canvas, serif display type, #3B60E2 CTA
// blue with periwinkle #A2B6FF links, and drafting-table motifs (hatch
// bands, dashed construction lines, thin arcs). Every shape is drawn
// fresh as original SVG/CSS; no Leo asset is used. Noindex, a shareable
// link sent with the application.
const ogTitle = "Bar Moshe — for Leo AI";
const ogDescription =
  "Leo AI doesn't just build AI, it lives it. Same here: I ship production web apps through Claude Code daily, with the React and Node systems around it built by hand.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@barmoshe1",
    creator: "@barmoshe1",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function LeoPage() {
  return (
    <div className={`${serifCaption.variable} ${serif.variable} ${sans.variable}`}>
      <LeoApp />
    </div>
  );
}

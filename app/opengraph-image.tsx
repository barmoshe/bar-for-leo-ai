import { ImageResponse } from 'next/og';

// Dynamic share card for the bar-for-leo-ai application page, matching
// the page's look — Leo AI's real brand, read live off getleo.ai
// (2026-07-07): a dark #0E0B12 canvas, #F8F7F3 text, the flat #3B60E2
// CTA blue, periwinkle #A2B6FF accents, and drafting-table hatch bands.
// Rendered by next/og (Satori): flexbox-only CSS, plain hex colours,
// Latin text. Satori's default face is sans, so the serif register is
// carried by the layout and palette rather than the font itself.

export const alt =
  'Bar Moshe for Leo AI — Leo AI lives AI; so do I. Production web apps shipped through Claude Code daily, with the React and Node systems around it built by hand.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// A build-time hatch band: thin repeated diagonal strokes, like the
// section-lines on an engineering drawing.
function HatchBand({ top, side }: { top: number; side: 'left' | 'right' }) {
  const strokes = Array.from({ length: 22 }, (_, i) => i);
  const anchor = side === 'left' ? { left: -40 } : { right: -40 };
  return (
    <div
      style={{
        position: 'absolute',
        top,
        ...anchor,
        display: 'flex',
        gap: 6,
        overflow: 'hidden',
        width: 240,
        height: 26,
      }}
    >
      {strokes.map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            width: 2,
            height: 44,
            backgroundColor: 'rgba(248,247,243,0.28)',
            transform: 'rotate(25deg)',
            marginTop: -9,
          }}
        />
      ))}
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px 48px',
          backgroundColor: '#0e0b12',
          color: '#f8f7f3',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* drafting decorations: hatch bands + a dashed construction line */}
        <HatchBand top={150} side="right" />
        <HatchBand top={470} side="left" />
        <div
          style={{
            position: 'absolute',
            top: 208,
            left: 0,
            width: 1200,
            height: 26,
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 60 }, (_, i) => i).map((i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                width: 12,
                height: 1,
                backgroundColor: 'rgba(162,182,255,0.35)',
              }}
            />
          ))}
        </div>
        {/* a thin compass arc, top right */}
        <div
          style={{
            position: 'absolute',
            top: -320,
            right: -220,
            width: 640,
            height: 640,
            borderRadius: 320,
            border: '1px solid rgba(248,247,243,0.14)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* the white rounded logo tile with a drafted B */}
          <div
            style={{
              display: 'flex',
              width: 44,
              height: 44,
              borderRadius: 10,
              backgroundColor: '#f8f7f3',
              color: '#0e0b12',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 500 }}>bar for leo ai</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 500,
              lineHeight: 1.14,
              letterSpacing: -1.5,
              maxWidth: 920,
            }}
          >
            An engineer already built for an AI-forward team
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: 'rgba(248,247,243,0.68)', maxWidth: 860 }}>
            Production work through Claude Code, daily. React and Node systems
            around it, built by hand.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              backgroundColor: '#3b60e2',
              color: '#ffffff',
              borderRadius: 8,
              padding: '16px 34px',
              fontSize: 27,
              fontWeight: 500,
            }}
          >
            See the work ›
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#a2b6ff' }}>Bar Moshe</div>
        </div>
      </div>
    ),
    { ...size },
  );
}

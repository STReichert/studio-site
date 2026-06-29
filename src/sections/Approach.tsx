import type { StudioCopy } from '../content/studio';

export function Approach({ copy }: { copy: StudioCopy['approach'] }) {
  return (
    <section id="approach" className="container" style={{ padding: '32px 32px' }}>
      <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', marginBottom: 22 }}>
        {copy.heading}
      </h2>

      <div
        className="approach-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: 36,
          alignItems: 'start',
        }}
      >
        <div style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--studio-ink-soft)' }}>
          {copy.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <img
          src="/approach.jpg"
          alt={copy.imageAlt}
          style={{
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            borderRadius: 6,
            width: '100%',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .approach-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

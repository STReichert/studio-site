import type { StudioCopy } from '../content/studio';

export function Hero({ copy }: { copy: StudioCopy['hero'] }) {
  return (
    <section
      id="top"
      className="hero-section container-wide"
      style={{ padding: '88px 32px 32px' }}
    >
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.2vw, 56px)', margin: '14px 0 24px' }}>
            {copy.headline}
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 1.6vw, 19px)',
              lineHeight: 1.65,
              color: 'var(--studio-ink-soft)',
              maxWidth: 560,
            }}
          >
            {copy.lede}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={copy.primaryCta.href}>
              {copy.primaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-portrait" style={{ position: 'relative' }}>
          <img
            src="/portrait.jpg"
            alt={copy.portraitAlt}
            style={{
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              borderRadius: 6,
              width: '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
}

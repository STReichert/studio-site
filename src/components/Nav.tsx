import type { CSSProperties } from 'react';

const navStyles: CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  borderBottom: '1px solid var(--studio-dark-soft)',
};

const innerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 32px',
  maxWidth: 1240,
  margin: '0 auto',
};

const linkStyle: CSSProperties = {
  fontSize: 14,
  color: 'var(--studio-dark-dim)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};

const ctaStyle: CSSProperties = {
  fontSize: 14,
  color: 'var(--studio-dark-ink)',
  textDecoration: 'none',
  border: '1.5px solid var(--studio-accent)',
  borderRadius: 999,
  padding: '6px 14px',
  transition: 'background 0.15s ease, color 0.15s ease',
};

export function Nav({ brand, tagline }: { brand: string; tagline?: string }) {
  return (
    <nav className="chrome-dark" style={navStyles} aria-label="Primary">
      <div style={innerStyles} className="nav-row">
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
            color: 'var(--studio-dark-ink)',
          }}
        >
          <span
            aria-hidden
            style={{
              width: 12,
              height: 12,
              background: 'var(--studio-accent)',
              border: '1.5px solid var(--studio-dark-ink)',
              transform: 'rotate(45deg)',
              display: 'inline-block',
            }}
          />
          <span
            className="serif"
            style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.005em' }}
          >
            {brand}
          </span>
          {tagline && (
            <span
              className="nav-tagline"
              style={{
                fontSize: 13,
                color: 'var(--studio-dark-dim)',
                paddingLeft: 8,
                borderLeft: '1px solid var(--studio-dark-soft)',
                marginLeft: 4,
              }}
            >
              {tagline}
            </span>
          )}
        </a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <a href="#approach" style={linkStyle}>How I teach</a>
          <a href="#rates" style={linkStyle}>Rates</a>
          <a href="#inquire" className="cta" style={ctaStyle}>Get in touch</a>
        </div>
      </div>
    </nav>
  );
}

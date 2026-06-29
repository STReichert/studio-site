import type { StudioCopy } from '../content/studio';

export function Footer({ copy, brand }: { copy: StudioCopy['footer']; brand: string }) {
  return (
    <footer
      className="chrome-dark"
      style={{
        marginTop: 96,
        borderTop: '1px solid var(--studio-dark-soft)',
        fontSize: 14,
      }}
    >
      <div
        className="footer-row"
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '44px 32px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: 360 }}>
          <div
            className="serif"
            style={{
              color: 'var(--studio-dark-ink)',
              fontSize: 17,
              fontWeight: 500,
              marginBottom: 8,
            }}
          >
            {brand}
          </div>
          <address
            style={{
              fontStyle: 'normal',
              color: 'var(--studio-dark-dim)',
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            {copy.location}
          </address>
          <a
            href={`mailto:${copy.email}`}
            style={{ color: 'var(--studio-dark-ink)', textDecoration: 'none' }}
          >
            {copy.email}
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 10,
            color: 'var(--studio-dark-dim)',
          }}
        >
          {copy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: 'var(--studio-dark-dim)', textDecoration: 'none' }}
            >
              {link.label} ↗
            </a>
          ))}
          <div style={{ marginTop: 18, fontSize: 12, color: 'var(--studio-dark-dim)' }}>
            {copy.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

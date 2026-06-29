import type { StudioCopy } from '../content/studio';

export function Inquire({ copy }: { copy: StudioCopy['inquire'] }) {
  return (
    <section id="inquire" className="container" style={{ padding: '24px 32px 32px' }}>
      <h2 style={{ fontSize: 30, marginBottom: 16 }}>{copy.heading}</h2>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          color: 'var(--studio-ink-soft)',
          maxWidth: 640,
          marginBottom: 28,
        }}
      >
        {copy.body}
      </p>

      <a
        className="btn btn-primary"
        href={`mailto:${copy.mailto}?subject=Violin%20lesson%20inquiry`}
      >
        Email me — {copy.mailto}
      </a>
    </section>
  );
}

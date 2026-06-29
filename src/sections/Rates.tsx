import type { StudioCopy } from '../content/studio';

export function Rates({ copy }: { copy: StudioCopy['rates'] }) {
  return (
    <section id="rates" className="container-wide" style={{ padding: '32px 32px' }}>
      <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', marginBottom: 24 }}>
        {copy.heading}
      </h2>
      <div
        className="rates-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
        }}
      >
        {copy.cards.map((card) => (
          <RateCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

type CardData = StudioCopy['rates']['cards'][number];

function RateCard({ card }: { card: CardData }) {
  return (
    <article className={`card card-${card.accent}`}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>{card.title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {card.items.map((item, i) => (
          <li
            key={i}
            style={{
              marginTop: i === 0 ? 0 : 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <span
              className="serif"
              style={{ fontSize: 22, fontWeight: 500, color: 'var(--studio-ink)' }}
            >
              {item.primary}
            </span>
            <span style={{ fontSize: 14, color: 'var(--studio-ink-soft)' }}>
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
      <p
        style={{
          marginTop: 16,
          paddingTop: 14,
          borderTop: '1px dashed var(--studio-rule)',
          fontSize: 13,
          color: 'var(--studio-ink-soft)',
        }}
      >
        {card.note}
      </p>
    </article>
  );
}

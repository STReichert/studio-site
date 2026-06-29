/**
 * Studio site copy. Mirrors the STUDIO SITE section in /COPY.md.
 * Edit COPY.md first, then mirror the change here.
 *
 * Style notes:
 *  - Prose, not bullets. Reach for an array only when something is genuinely a list.
 *  - First-person, conversational. One person speaking to one person reading.
 *  - Square brackets «[…]» mark placeholders to replace later.
 *  - Mentions of Atlanta + neighborhood names and "violin and viola" are also
 *    doing SEO work — keep them natural, but don't strip them out.
 */

export const studioCopy = {
  brand: {
    name: 'Seth Reichert Violin & Viola Studio',
    tagline: 'Violin and viola lessons in East Atlanta and online.',
  },

  hero: {
    eyebrow: 'Now booking',
    headline: 'Violin and viola lessons in East Atlanta.',
    lede:
      "I offer violin and viola lessons for all ages 5 and up — in-person on the east side of Atlanta (East Atlanta Village, Grant Park, Reynoldstown, Edgewood, Kirkwood, and the surrounding East Atlanta neighborhoods) and virtually over Zoom anywhere. I specialize in working with beginners and young advancing musicians to develop technical skill and a lifelong love of music making. I play and teach all styles, including classical and fiddle repertoire, and support audition preparation for local youth and community orchestras.",
    primaryCta: { label: 'Get in touch', href: '#inquire' },
    portraitAlt:
      'Seth Reichert playing violin live — violin and viola teacher in Atlanta', // describes the photo for screen readers + SEO
  },

  approach: {
    heading: 'How I teach',
    paragraphs: [
      "For me, music is an exercise in joy, passion, growth mindset, community, and discipline. My approach to teaching centers on developing a joyful and consistent relationship with your instrument (including practicing!) while supporting communal music-making opportunities and consistent growth.",
      "My students work on technical fundamentals such as tone, intonation, and bow control while exploring a variety of progressive repertoire including classical, fiddle, rock, and jazz. As students are interested, I also support orchestra auditions and other opportunities to make music with peers.",
    ],
    imageAlt: 'Seth Reichert playing violin in performance',
  },

  // Three cards: Rates · Where · Logistics.
  // Each gets a thin colored stripe along the top — bronze, navy, dark.
  rates: {
    heading: 'Rates & logistics',
    cards: [
      {
        accent: 'bronze' as const,
        title: 'Rates',
        items: [
          { primary: '$25', detail: '/ 30 minutes' },
          { primary: '$45', detail: '/ 60 minutes' },
        ],
        note: 'Weekly lessons scheduled monthly. Trial lessons available. Inquire for alternative lesson structures.',
      },
      {
        accent: 'navy' as const,
        title: 'Where',
        items: [
          { primary: 'In-person', detail: 'East Atlanta · Grant Park · Reynoldstown · Edgewood' },
          { primary: 'Virtual', detail: 'Zoom — anywhere in the U.S.' },
        ],
        note: 'In-person studio address shared after first lesson is booked.',
      },
      {
        accent: 'dark' as const,
        title: 'The details',
        items: [
          { primary: 'Payment', detail: 'Venmo, Zelle, or cash/check' },
          { primary: 'Cancellations', detail: "24 hours' notice; first miss each semester is free" },
        ],
        note: 'Questions about anything else? Just ask when you email me below.',
      },
    ],
  },

  inquire: {
    heading: 'Get in touch',
    body:
      "If you'd like to ask questions or schedule a trial lesson, please reach out! I'd love to hear from you. Tell me a bit about who's learning and what you'd like to play, and I'll be in touch soon.",
    mailto: 'sethreichert.lftd@gmail.com',
  },

  footer: {
    email: 'sethreichert.lftd@gmail.com',
    location: 'Atlanta, GA · East Atlanta · Grant Park · Reynoldstown · Edgewood',
    links: [
      { label: 'sethreichert.com', href: 'https://sethreichert.com' },
    ],
    copyright: '© 2026 Seth Reichert',
  },
} as const;

export type StudioCopy = typeof studioCopy;

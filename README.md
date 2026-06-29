# Seth Reichert Violin & Viola Studio

The website for **studio.sethreichert.com** — a small static site built with Vite + React + TypeScript and hosted on GitHub Pages.

This README is written for **you, future Seth**, maintaining the site by hand. It tells you exactly which file to open for the most common edits (moving, changing prices, fixing your email, updating photos) and how to publish a change. You do **not** need to understand React to do any of this.

---

## How to publish a change

Every edit follows the same loop:

1. Open the file, make your edit, save.
2. Commit and push to the `main` branch (in your editor's Git panel, or on the command line):
   ```sh
   git add -A
   git commit -m "Update prices"
   git push
   ```
3. Wait ~1–2 minutes. A GitHub Action automatically builds the site and publishes it to **studio.sethreichert.com**. You can watch it run under the **Actions** tab on the GitHub repo.

That's it. There is no separate "deploy" button — pushing to `main` *is* the deploy.

> **Tip:** If you'd rather not use the command line, GitHub's web editor works too. Open the file on github.com, click the pencil icon, edit, and "Commit changes" straight to `main`. The same auto-deploy runs.

### Preview before you publish (optional)

If you want to see changes locally first:

```sh
npm install   # only needed the first time
npm run dev    # opens a live preview at http://localhost:5173
```

Leave it running; the page updates as you save. Press `Ctrl-C` to stop.

---

## Editing the words on the page

**Almost all visible text lives in one file:** [`src/content/studio.ts`](src/content/studio.ts)

Open it and you'll see plain-English labels. Edit the text **between the quote marks** and save. Don't touch the labels, brackets, or punctuation *outside* the quotes (the `name:`, `{`, `}`, commas, etc.) — those are structural.

Here's what's where in that file:

| You want to change… | Section in `studio.ts` | Field |
|---|---|---|
| Studio name | `brand` | `name` |
| Short one-line tagline | `brand` | `tagline` |
| The "Now booking" label at the top | `hero` | `eyebrow` |
| The big headline | `hero` | `headline` |
| The intro paragraph under the headline | `hero` | `lede` |
| "How I teach" heading + paragraphs | `approach` | `heading`, `paragraphs` |
| **Prices** | `rates` → first card (`title: 'Rates'`) | `items` and `note` |
| Where you teach (neighborhoods, in-person/virtual) | `rates` → second card (`title: 'Where'`) | `items` and `note` |
| Payment methods / cancellation policy | `rates` → third card (`title: 'The details'`) | `items` and `note` |
| The "Get in touch" blurb | `inquire` | `body` |
| **The email people contact you at** | `inquire` and `footer` | `mailto` / `email` |
| Footer location line | `footer` | `location` |
| Footer links | `footer` | `links` |
| Copyright year | `footer` | `copyright` |

### Common real-world edits

**Change your prices** — In `rates`, the first card:
```ts
items: [
  { primary: '$25', detail: '/ 30 minutes' },
  { primary: '$45', detail: '/ 60 minutes' },
],
```
Edit the `$25` / `$45`. **Then also update two SEO spots in `index.html`** (see the SEO section below) so Google shows the right prices — search for `priceRange` and the two `"price"` lines.

**Change your email** — It appears in **two** places in `studio.ts`: `inquire.mailto` and `footer.email`. Change both to match. The "Email me" button and footer link build themselves from these. Also update `index.html` if you ever add the email there (currently it's not in the SEO).

**You moved / changed neighborhoods** — The neighborhood names appear in several spots because they help people find you on Google:
- `studio.ts`: `hero.lede`, the `Where` card's `items`/`note`, and `footer.location`.
- `index.html`: the `<title>`, the `description` meta tag, the Open Graph/Twitter descriptions, and the `areaServed` list in the structured-data block.

Search the whole project for the old neighborhood name (e.g. "Grant Park") to find every place it appears, and replace as needed. Keep the mentions natural — they're doing double duty as SEO.

> **One placeholder convention:** Square brackets like `[…]` in the copy mark text meant to be filled in later. There shouldn't be any left, but if you see one, that's a to-do.

---

## Editing SEO (how the site shows up in Google & link previews)

SEO content lives in **[`index.html`](index.html)** (the `<head>` section at the top). The pieces:

| Element | What it controls |
|---|---|
| `<title>` | The clickable blue headline in Google results and the browser tab. Keep under ~60 characters. |
| `<meta name="description">` | The grey summary line under the title in Google results. ~150 characters. |
| `og:title`, `og:description`, `og:image` | What shows when someone pastes your link into iMessage, Facebook, etc. |
| `twitter:*` | Same idea, for Twitter/X. |
| `<script type="application/ld+json">` | **Structured data** — a machine-readable description of the studio (a `LocalBusiness`). This is what can give you the rich "music school" treatment in Google. It lists your prices, the areas you serve, and what you teach. |

**If you change prices**, update them in the structured-data block too: the `priceRange` line and the two `"price"` values (`"25"` and `"45"`).

**If you move**, update the `areaServed` list (add/remove the `{ "@type": "Place", "name": "…" }` entries) and the `addressLocality`/`addressRegion` if the city/state changes.

After editing the structured data, you can sanity-check it with Google's [Rich Results Test](https://search.google.com/test/rich-results) by pasting the published URL.

---

## Updating images

All images live in the **[`public/`](public/)** folder and are referenced by filename:

| File | Where it shows |
|---|---|
| `portrait.jpg` | The hero photo (you, top of the page). Best as a vertical **4:5** crop. |
| `approach.jpg` | The photo beside "How I teach". |
| `og.jpg` | The **social share image** (1200×630) shown when the link is pasted into messages/social. |
| `favicon.svg` | The little diamond icon in the browser tab. |
| `apple-touch-icon.png` | The icon when someone saves the site to a phone home screen. |

To swap a photo, **replace the file in `public/` keeping the same filename** (so you don't have to touch any code), commit, and push. If you change a filename, you'd also have to update the reference in the matching section file under `src/sections/`.

The descriptive alt text for photos (used by screen readers and SEO) lives back in `studio.ts`: `hero.portraitAlt` and `approach.imageAlt`.

---

## Learning React by maintaining this site

You don't *need* this section for content edits — but since you want to pick up React along the way, here's how this site actually works, using its own files as the textbook. Everything below points at real code you can open right now.

### The one big idea: components

A **component** is a function that returns a chunk of UI. That's it. Each one is a named function that returns something that looks like HTML (it's called **JSX**). The whole site is just components nesting inside other components.

Open [`src/App.tsx`](src/App.tsx) — this is the top of the tree. It returns the whole page:

```tsx
export function App() {
  return (
    <>
      <Nav brand={studioCopy.brand.name} tagline={studioCopy.brand.tagline} />
      <main>
        <Hero copy={studioCopy.hero} />
        <hr className="rule" />
        <Approach copy={studioCopy.approach} />
        <hr className="rule" />
        <Rates copy={studioCopy.rates} />
        <hr className="rule" />
        <Inquire copy={studioCopy.inquire} />
      </main>
      <Footer copy={studioCopy.footer} brand={studioCopy.brand.name} />
    </>
  );
}
```

Read it top to bottom and it *is* the page: nav, then hero, a divider, the approach, a divider, rates, a divider, the inquiry form, footer. Each capitalized tag (`<Hero>`, `<Rates>`) is a component defined in its own file under `src/sections/` or `src/components/`.

**Want to reorder the page?** Move the lines around in `App.tsx`. Want to drop a section temporarily? Delete (or comment out) its line and its `<hr />`. This file is the table of contents you edit to restructure the page.

> `<>...</>` is a "Fragment" — a way to return several elements without wrapping them in an extra `<div>`. You can mostly ignore it.

### Props: how data flows down

Notice `App.tsx` passes things *into* each component, like `copy={studioCopy.hero}`. Those are **props** — the inputs a component receives. Data flows **one direction**: from `studio.ts` → into `App` → down into each section. This is why editing `studio.ts` changes the page — the words flow downhill into the components.

Open [`src/sections/Hero.tsx`](src/sections/Hero.tsx) to see the receiving end:

```tsx
export function Hero({ copy }: { copy: StudioCopy['hero'] }) {
  return (
    <section id="top" ...>
      ...
      <h1 ...>{copy.headline}</h1>
      <p ...>{copy.lede}</p>
      ...
    </section>
  );
}
```

`{ copy }` in the parentheses means "this component expects a prop called `copy`." Then inside the JSX, `{copy.headline}` drops that value into the page. **The curly braces are the key JSX move:** anything in `{ }` is live JavaScript, not literal text. `{copy.headline}` means "run this and print the result"; plain text outside braces is just text.

The `: { copy: StudioCopy['hero'] }` part is **TypeScript** — it declares the shape of the prop. It's what makes your editor autocomplete `copy.headline` and warn you (red squiggle) if you typo `copy.headLine`. You rarely write these by hand; they're already set up.

### Rendering a list: `.map()`

The rate cards are the best thing to study, because they show how React turns *data* into *repeated UI*. You don't hand-write three cards — you write **one** card template and let the data decide how many appear.

Open [`src/sections/Rates.tsx`](src/sections/Rates.tsx):

```tsx
{copy.cards.map((card) => (
  <RateCard key={card.title} card={card} />
))}
```

`copy.cards` is the array of three cards from `studio.ts`. `.map(...)` walks that array and produces one `<RateCard>` per entry. **If you added a fourth card to the `cards` array in `studio.ts`, a fourth card would appear on the page automatically** — no change needed here. That's the payoff of data-driven UI.

- `key={card.title}` — React needs a unique `key` on each item in a list so it can tell them apart efficiently. Just give it something unique (here, the card's title).
- Look further down in the same file and you'll see a *second* `.map()` inside `RateCard` for the line-items (`$25 / 30 minutes`). Same pattern, nested: a list inside each card.

`RateCard` itself is a small helper component defined in the same file — proof that components don't all need their own file; you can define little ones right where they're used.

### Conditional rendering: show something only sometimes

Open [`src/components/Nav.tsx`](src/components/Nav.tsx) and find:

```tsx
{tagline && (
  <span className="nav-tagline" ...>{tagline}</span>
)}
```

`{condition && <stuff/>}` is the React idiom for "render this only if the condition is true." If `tagline` is empty, nothing shows. It reads like a logic puzzle but it's everywhere — worth memorizing.

### Styling: two systems, and when to use which

You'll see styles written two ways in this codebase:

1. **`className="..."`** → defined in [`src/styles/global.css`](src/styles/global.css) and [`src/styles/palette.css`](src/styles/palette.css). This is plain CSS. `palette.css` holds the **colors** as variables (e.g. `--studio-accent` is the bronze) — change a color there and it updates everywhere.
2. **`style={{ ... }}`** → inline styles written as a JavaScript object (note the *double* braces, and `marginBottom` instead of `margin-bottom` — camelCase). These are one-offs attached to a single element.

Rule of thumb: change a **color** in `palette.css`; tweak a **one-off spacing/size** in the element's inline `style`; change something **site-wide** (fonts, buttons, the `.card` look) in `global.css`.

### JSX gotchas that will trip you up early

- **`className`, not `class`** (because `class` is a reserved word in JavaScript).
- **Every tag must close**: `<img ... />`, `<hr />`, `<br />` — the trailing slash is required.
- **One root element per return** — wrap siblings in a `<div>` or a `<>...</>` Fragment.
- **camelCase style props**: `backgroundColor`, not `background-color`, inside `style={{}}`.
- If the dev server (`npm run dev`) shows a red error overlay, read the first line — it usually names the file and line. A missing `}` or a stray comma is the usual culprit.

### A good first exercise

Try this to feel the loop end-to-end, low-risk:

1. Run `npm run dev` and open the local preview.
2. In `studio.ts`, **add a third line-item to the Rates card** — e.g. `{ primary: '$80', detail: '/ 90 minutes' }`. Save. Watch a third price appear instantly (that's the `.map()` working — you never touched `Rates.tsx`).
3. Then open `Rates.tsx` and change the font size of the price (`fontSize: 22`) to something bigger. Save, watch it update. That's editing a component directly.
4. Undo whatever you don't want to keep. When you're happy, commit and push to publish.

From there, the natural next steps for learning are: try adding a brand-new section (copy `Approach.tsx` to a new file, add its copy to `studio.ts`, and drop a `<YourSection copy={...} />` line into `App.tsx`), and read a beginner React tutorial alongside this real code — [react.dev/learn](https://react.dev/learn) is the official one and pairs well with what's here.

---

## Hosting & domain (reference)

- **Host:** GitHub Pages, deployed automatically by `.github/workflows/deploy.yml` on every push to `main`.
- **Custom domain:** set in `public/CNAME` (currently `studio.sethreichert.com`). GitHub Pages reads this file. The matching DNS record is a `CNAME` for `studio` pointing to your `github.io` host, managed in **Squarespace** DNS.
- **HTTPS:** provisioned automatically by GitHub Pages.

You shouldn't need to touch any of this for normal content edits.

---

## Project layout (for the curious)

```
studio-site/
├─ index.html              ← SEO: title, meta, social tags, structured data
├─ public/                 ← images, favicon, CNAME, robots.txt, sitemap.xml
├─ src/
│  ├─ content/studio.ts    ← ALL the copy (edit here for text changes)
│  ├─ sections/            ← page sections (Hero, Approach, Rates, Inquire)
│  ├─ components/          ← Nav, Footer
│  ├─ styles/              ← palette.css (colors) + global.css (layout)
│  ├─ App.tsx              ← assembles the sections in order
│  └─ main.tsx             ← entry point
└─ .github/workflows/deploy.yml  ← auto-deploy to GitHub Pages
```

For day-to-day maintenance you'll only ever open **`src/content/studio.ts`** (words), **`index.html`** (SEO), and **`public/`** (images).

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Approach } from './sections/Approach';
import { Rates } from './sections/Rates';
import { Inquire } from './sections/Inquire';
import { studioCopy } from './content/studio';

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

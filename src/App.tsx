import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import HintChip from './components/HintChip';

/**
 * Orbit — a small, intentionally-imperfect marketing page.
 *
 * This app is a playground for Frontloop: point at any element, describe a change
 * in plain words, and watch it become a pull request. A few things here are
 * deliberately a little off (weak button copy, a placeholder stat, a secondary
 * action that arguably should be primary) — perfect first changes to try.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
      <HintChip />
    </div>
  );
}

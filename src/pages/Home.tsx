import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../components/About';
import RepairTools from '../components/RepairTools';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <RepairTools />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  );
}

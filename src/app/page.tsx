import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import CTA from '@/components/home/CTA';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </div>
  );
}

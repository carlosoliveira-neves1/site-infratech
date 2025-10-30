import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

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

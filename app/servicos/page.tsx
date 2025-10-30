import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import Process from "@/components/services/Process";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: 'Nossos Serviços | TechVarejo',
  description: 'Desenvolvimento de aplicativos, webapps, Android e integrações para o varejo.'
};

export default function ServicosPage() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesList />
      <Process />
      <FAQ />
      <CTA />
    </div>
  );
}

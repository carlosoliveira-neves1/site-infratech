import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import Process from "@/components/services/Process";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: 'Serviços | Infratech',
  description: 'Aplicativos, webapps, Android e integrações sob medida para o varejo.'
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

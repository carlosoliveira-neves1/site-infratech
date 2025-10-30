import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import Process from '@/components/services/Process';
import FAQ from '@/components/services/FAQ';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Nossos Serviços | TechVarejo - Soluções em Tecnologia para o Varejo',
  description: 'Conheça nossos serviços de desenvolvimento de aplicativos, webapps, aplicativos Android e integrações para o varejo. Soluções personalizadas para o seu negócio.',
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

import AboutHero from '@/components/about/AboutHero';
import OurMission from '@/components/about/OurMission';
import OurTeam from '@/components/about/OurTeam';
import OurValues from '@/components/about/OurValues';
import Stats from '@/components/about/Stats';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Sobre Nós | TechVarejo - Especialistas em Tecnologia para o Varejo',
  description: 'Conheça a TechVarejo, uma empresa especializada em desenvolvimento de aplicativos, webapps e soluções tecnológicas para o varejo. Nossa missão é transformar negócios através da inovação.',
};

export default function SobrePage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <OurMission />
      <OurValues />
      <Stats />
      <OurTeam />
      <CTA />
    </div>
  );
}

import AboutHero from '@/components/about/AboutHero';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Sobre Nós | Infratech',
  description:
    'Conheça a Infratech, especialista em desenvolvimento de aplicativos, webapps e integrações para o varejo brasileiro.',
};

export default function SobrePage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <CTA />
    </div>
  );
}

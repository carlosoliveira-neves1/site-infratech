import Link from 'next/link';
import { FaArrowRight, FaMobileAlt, FaLaptopCode, FaStore } from 'react-icons/fa';

const Hero = () => {
  const features = [
    { icon: <FaMobileAlt className="w-6 h-6 text-blue-600" />, text: 'Aplicativos Móveis' },
    { icon: <FaLaptopCode className="w-6 h-6 text-blue-600" />, text: 'Web Apps' },
    { icon: <FaStore className="w-6 h-6 text-blue-600" />, text: 'Soluções para Varejo' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/bg-hero.jpg')",
        }}
        aria-hidden
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/40" aria-hidden />
      {/* Top conceal bar to hide branding present in the source image */}
      <div className="absolute top-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-b from-black/90 to-transparent" aria-hidden />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Infratech — <span className="text-blue-300">Especialista em desenvolvimento de aplicativos para o varejo</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Desenvolvemos aplicativos, webapps e integrações sob medida para varejistas que querem vender mais com tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contato" className="btn btn-primary inline-flex items-center justify-center gap-2">
              Fale com nossos especialistas
              <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/servicos" className="btn btn-outline inline-flex items-center justify-center">
              Nossos Serviços
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                {feature.icon}
                <span className="font-medium text-gray-800">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

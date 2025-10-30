import Link from 'next/link';
import { FaArrowRight, FaMobileAlt, FaLaptopCode, FaStore } from 'react-icons/fa';

const Hero = () => {
  const features = [
    {
      icon: <FaMobileAlt className="w-6 h-6 text-primary" />,
      text: 'Aplicativos Móveis'
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-primary" />,
      text: 'Web Apps'
    },
    {
      icon: <FaStore className="w-6 h-6 text-primary" />,
      text: 'Soluções para Varejo'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Soluções em Tecnologia para o <span className="text-primary">Varejo Digital</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Desenvolvemos aplicativos, webapps e integrações personalizadas para impulsionar o seu negócio no mundo digital.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/contato" 
              className="btn btn-primary inline-flex items-center justify-center gap-2"
            >
              Fale com nossos especialistas
              <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/servicos" 
              className="btn btn-outline inline-flex items-center justify-center"
            >
              Nossos Serviços
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                {feature.icon}
                <span className="font-medium text-gray-800">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 relative">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="relative p-1 bg-white rounded-xl">
              <div className="h-6 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Tecnologia que Transforma</h3>
                  <p className="text-blue-100">Soluções personalizadas para o seu negócio</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

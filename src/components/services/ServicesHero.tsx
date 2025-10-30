import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-100 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções Tecnológicas para o <span className="text-primary">Varejo Digital</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvemos soluções personalizadas para impulsionar seu negócio no mundo digital, com foco em resultados e experiência do usuário.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#nossos-servicos" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Conheça Nossas Soluções
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

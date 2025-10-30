"use client";
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 relative z-10 text-center">
        <motion.span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Nossos Serviços
        </motion.span>
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Soluções Tecnológicas para o <span className="text-blue-600">Varejo Digital</span>
        </motion.h1>
        <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Desenvolvemos soluções sob medida para impulsionar seu negócio no mundo digital.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;

"use client";
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">Sobre Nós</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformando o varejo com <span className="text-blue-600">tecnologia</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unimos inovação e experiência para criar soluções digitais que impulsionam resultados reais para o seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#nossa-historia" className="btn btn-primary">Nossa História</a>
              <a href="#nossa-equipe" className="btn btn-outline">Conheça o Time</a>
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-72 md:h-80 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Desde 2018</h3>
                  <p className="text-blue-100">Negócios transformados pela inovação tecnológica</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">+100</h4>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">+50</h4>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

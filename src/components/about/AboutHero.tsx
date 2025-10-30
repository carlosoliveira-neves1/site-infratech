import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-100 rounded-full mb-4">
              Sobre Nós
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformando o varejo através da <span className="text-primary">tecnologia</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Na TechVarejo, acreditamos que a tecnologia é a chave para desbloquear o potencial ilimitado do varejo. Combinamos inovação, experiência e paixão para criar soluções que impulsionam resultados.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#nossa-historia" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Nossa História
              </a>
              <a 
                href="#nossa-equipe" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Conheça o Time
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Desde 2018</h3>
                  <p className="text-blue-100">Transformando negócios através da inovação tecnológica</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">+100</h4>
                <p className="text-gray-600">Projetos Entregues</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
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

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="w-6 h-6 text-primary" />,
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados e experientes em desenvolvimento de software para varejo.'
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-primary" />,
    title: 'Foco em Resultados',
    description: 'Entregamos soluções que realmente impactam positivamente o seu negócio.'
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-primary" />,
    title: 'Inovação Constante',
    description: 'Sempre atualizados com as melhores tecnologias e práticas do mercado.'
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">TechVarejo em Ação</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Especialistas em Tecnologia para o Varejo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Na TechVarejo, combinamos tecnologia de ponta com um profundo entendimento do varejo para criar soluções que impulsionam o crescimento do seu negócio.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Mais de 5 anos de experiência no mercado',
                'Projetos entregues em todo o Brasil',
                'Foco em resultados mensuráveis',
                'Atendimento personalizado'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

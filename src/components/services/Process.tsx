import { motion } from 'framer-motion';
import { FaSearch, FaPenFancy, FaCode, FaMobileAlt, FaRocket, FaHeadset } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaSearch className="w-6 h-6 text-white" />,
    title: 'Análise',
    description: 'Entendemos suas necessidades e objetivos para propor a melhor solução.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaPenFancy className="w-6 h-6 text-white" />,
    title: 'Projeto',
    description: 'Criamos protótipos e fluxos de navegação para validação.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaCode className="w-6 h-6 text-white" />,
    title: 'Desenvolvimento',
    description: 'Implementamos a solução com as melhores práticas de desenvolvimento.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaMobileAlt className="w-6 h-6 text-white" />,
    title: 'Testes',
    description: 'Realizamos testes rigorosos para garantir qualidade e desempenho.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: <FaRocket className="w-6 h-6 text-white" />,
    title: 'Lançamento',
    description: 'Preparamos tudo para o lançamento da sua solução.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <FaHeadset className="w-6 h-6 text-white" />,
    title: 'Suporte',
    description: 'Oferecemos suporte contínuo para garantir o sucesso do seu projeto.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
            Nosso Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um processo transparente e bem definido para garantir a excelência em cada projeto.
          </p>
        </div>

        <div className="relative">
          {/* Linha de conexão */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2"></div>
          
          <div className="relative space-y-12 md:space-y-24">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto md:mx-0 shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-purple-500'} relative`}>
                    <div className="absolute -top-3 left-6 w-6 h-6 transform rotate-45 bg-white border-t-2 border-l-2 border-gray-200"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 hidden md:block"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Quer saber mais sobre nosso processo de desenvolvimento?
          </p>
          <a 
            href="/contato" 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            Fale com nossos especialistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

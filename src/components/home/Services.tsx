import { FaMobileAlt, FaLaptopCode, FaMobile, FaSync, FaChartLine, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
    title: 'Aplicativos Móveis',
    description: 'Desenvolvimento de aplicativos iOS e Android nativos ou cross-platform para atender às necessidades do seu negócio.',
    features: ['Aplicativos personalizados', 'Integração com sistemas', 'Publicação nas lojas']
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
    title: 'Web Apps',
    description: 'Criação de aplicações web responsivas e de alto desempenho para melhorar a experiência dos seus clientes.',
    features: ['Design responsivo', 'Otimização SEO', 'Alta performance']
  },
  {
    icon: <FaMobile className="w-8 h-8 text-primary" />,
    title: 'Apps Android',
    description: 'Soluções móveis otimizadas para a plataforma Android, garantindo melhor desempenho e experiência do usuário.',
    features: ['Desenvolvimento nativo', 'Integração com APIs', 'Atualizações constantes']
  },
  {
    icon: <FaSync className="w-8 h-8 text-primary" />,
    title: 'Integrações',
    description: 'Conectamos seus sistemas e plataformas para otimizar processos e melhorar a eficiência operacional.',
    features: ['APIs personalizadas', 'Sistemas ERP/CRM', 'Marketplaces']
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: 'Soluções para Varejo',
    description: 'Tecnologias específicas para o varejo, como PDV, gestão de estoque e análise de dados.',
    features: ['PDV Digital', 'Gestão de estoque', 'Análise de dados']
  },
  {
    icon: <FaShoppingCart className="w-8 h-8 text-primary" />,
    title: 'E-commerce',
    description: 'Plataformas de comércio eletrônico completas para vender mais e melhor na internet.',
    features: ['Lojas virtuais', 'Pagamentos online', 'Gestão de pedidos']
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções Tecnológicas para o seu Negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços de tecnologia para impulsionar sua presença digital.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Não encontrou o que procura? Temos soluções personalizadas para o seu negócio.</p>
          <a 
            href="/contato" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            Fale com nossos especialistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

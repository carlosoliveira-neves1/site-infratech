import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaMobile, FaSync, FaChartLine, FaShoppingCart, FaCode, FaServer, FaDatabase, FaShieldAlt, FaRocket } from 'react-icons/fa';

const services = [
  {
    id: 'mobile-apps',
    icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
    title: 'Aplicativos Móveis',
    description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, com foco em performance e experiência do usuário.',
    features: [
      'Aplicativos iOS e Android nativos',
      'Desenvolvimento cross-platform com React Native',
      'Integração com APIs e sistemas legados',
      'Publicação nas lojas de aplicativos',
      'Manutenção e atualizações contínuas'
    ],
    benefits: [
      'Aumento do engajamento dos clientes',
      'Experiência personalizada',
      'Acesso offline aos recursos',
      'Notificações push'
    ]
  },
  {
    id: 'web-apps',
    icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
    title: 'Web Apps',
    description: 'Desenvolvimento de aplicações web responsivas e de alto desempenho, com foco em usabilidade e conversão.',
    features: [
      'Sistemas web personalizados',
      'Lojas virtuais e e-commerces',
      'Aplicações corporativas',
      'Dashboards e painéis administrativos',
      'Otimização de desempenho'
    ],
    benefits: [
      'Acesso de qualquer dispositivo',
      'Atualizações em tempo real',
      'Integração com múltiplos canais',
      'Escalabilidade garantida'
    ]
  },
  {
    id: 'android-apps',
    icon: <FaMobile className="w-8 h-8 text-primary" />,
    title: 'Aplicativos Android',
    description: 'Soluções móveis otimizadas para a plataforma Android, aproveitando ao máximo os recursos do sistema operacional.',
    features: [
      'Desenvolvimento nativo Android',
      'Integração com serviços Google',
      'Otimização para diferentes dispositivos',
      'Publicação na Google Play Store',
      'Atualizações e manutenção'
    ],
    benefits: [
      'Melhor desempenho',
      'Experiência nativa',
      'Acesso a recursos do dispositivo',
      'Maior alcance de público'
    ]
  },
  {
    id: 'integrations',
    icon: <FaSync className="w-8 h-8 text-primary" />,
    title: 'Integrações',
    description: 'Conectamos seus sistemas e plataformas para otimizar processos e melhorar a eficiência operacional.',
    features: [
      'Integração de sistemas legados',
      'APIs personalizadas',
      'Automação de processos',
      'Migração de dados',
      'Sincronização em tempo real'
    ],
    benefits: [
      'Redução de retrabalho',
      'Dados centralizados',
      'Processos otimizados',
      'Tomada de decisão mais ágil'
    ]
  },
  {
    id: 'retail',
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: 'Soluções para Varejo',
    description: 'Tecnologias específicas para o varejo, como PDV, gestão de estoque e análise de dados.',
    features: [
      'Sistema PDV (Ponto de Venda)',
      'Gestão de estoque',
      'Análise de dados e BI',
      'Programa de fidelidade',
      'Integração com marketplaces'
    ],
    benefits: [
      'Aumento das vendas',
      'Controle de estoque em tempo real',
      'Melhor experiência do cliente',
      'Dados para tomada de decisão'
    ]
  },
  {
    id: 'ecommerce',
    icon: <FaShoppingCart className="w-8 h-8 text-primary" />,
    title: 'E-commerce',
    description: 'Plataformas de comércio eletrônico completas para vender mais e melhor na internet.',
    features: [
      'Lojas virtuais personalizadas',
      'Integração com meios de pagamento',
      'Gestão de pedidos e fretes',
      'SEO otimizado',
      'Relatórios de desempenho'
    ],
    benefits: [
      'Vendas 24/7',
      'Ampliação do alcance',
      'Redução de custos operacionais',
      'Experiência de compra otimizada'
    ]
  }
];

const ServicesList = () => {
  return (
    <section id="nossos-servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serviços Sob Medida para o Seu Negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de tecnologia para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-gray-50 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FaCode className="mr-2 text-primary" />
                        Principais Recursos
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FaRocket className="mr-2 text-primary" />
                        Benefícios
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <FaShieldAlt className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">Garantia de qualidade</span>
                      </div>
                      <div className="flex items-center">
                        <FaServer className="text-blue-500 mr-2" />
                        <span className="text-sm text-gray-600">Hospedagem inclusa</span>
                      </div>
                      <div className="flex items-center">
                        <FaDatabase className="text-purple-500 mr-2" />
                        <span className="text-sm text-gray-600">Backup diário</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href="/contato" 
                        className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                      >
                        Solicitar orçamento
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

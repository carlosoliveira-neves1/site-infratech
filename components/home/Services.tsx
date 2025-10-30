"use client";
import { FaMobileAlt, FaLaptopCode, FaMobile, FaSync, FaChartLine, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaMobileAlt className="w-8 h-8 text-blue-600" />, title: 'Aplicativos Móveis', description: 'iOS/Android nativos ou cross-platform.', features: ['Apps personalizados', 'Integração com sistemas', 'Publicação nas lojas'] },
  { icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />, title: 'Web Apps', description: 'Aplicações web responsivas e rápidas.', features: ['Design responsivo', 'SEO', 'Alta performance'] },
  { icon: <FaMobile className="w-8 h-8 text-blue-600" />, title: 'Apps Android', description: 'Soluções otimizadas para Android.', features: ['Nativo', 'APIs', 'Atualizações'] },
  { icon: <FaSync className="w-8 h-8 text-blue-600" />, title: 'Integrações', description: 'Conexão entre sistemas e plataformas.', features: ['APIs', 'ERP/CRM', 'Marketplaces'] },
  { icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: 'Varejo', description: 'PDV, estoque e dados.', features: ['PDV', 'Estoque', 'Analytics'] },
  { icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />, title: 'E-commerce', description: 'Lojas virtuais completas.', features: ['Pagamentos', 'Pedidos', 'SEO'] },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const Services = () => (
  <section id="servicos" className="py-20 bg-white">
    <div className="container px-4">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">Nossos Serviços</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Tecnológicas</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Portfólio completo para impulsionar sua presença digital.</p>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        {services.map((service, index) => (
          <motion.div key={index} className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition" variants={fadeInUp}>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center"><svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{f}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;

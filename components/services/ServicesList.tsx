import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaMobile, FaSync, FaChartLine, FaShoppingCart } from 'react-icons/fa';

const items = [
  { id: 'mobile-apps', icon: <FaMobileAlt className="w-8 h-8 text-blue-600" />, title: 'Aplicativos Móveis', desc: 'Apps nativos e híbridos para iOS e Android.' },
  { id: 'web-apps', icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />, title: 'Web Apps', desc: 'Aplicações web responsivas e de alto desempenho.' },
  { id: 'android-apps', icon: <FaMobile className="w-8 h-8 text-blue-600" />, title: 'Aplicativos Android', desc: 'Apps otimizados para o ecossistema Android.' },
  { id: 'integrations', icon: <FaSync className="w-8 h-8 text-blue-600" />, title: 'Integrações', desc: 'Conecte seus sistemas e automatize processos.' },
  { id: 'retail', icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: 'Soluções para Varejo', desc: 'PDV, estoque e analytics para escalar.' },
  { id: 'ecommerce', icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />, title: 'E-commerce', desc: 'Lojas virtuais completas e otimizadas.' },
];

const ServicesList = () => (
  <section id="nossos-servicos" className="py-16 bg-white">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <motion.a key={s.id} href={`#${s.id}`} className="block border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesList;

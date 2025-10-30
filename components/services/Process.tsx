"use client";
import { motion } from 'framer-motion';
import { FaSearch, FaPenFancy, FaCode, FaMobileAlt, FaRocket, FaHeadset } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch className="w-5 h-5 text-white" />, title: 'Análise', desc: 'Entendimento de objetivos e requisitos.', color: 'from-blue-500 to-blue-600' },
  { icon: <FaPenFancy className="w-5 h-5 text-white" />, title: 'Projeto', desc: 'Protótipos e validação de UX.', color: 'from-purple-500 to-purple-600' },
  { icon: <FaCode className="w-5 h-5 text-white" />, title: 'Desenvolvimento', desc: 'Implementação com boas práticas.', color: 'from-green-500 to-green-600' },
  { icon: <FaMobileAlt className="w-5 h-5 text-white" />, title: 'Testes', desc: 'Qualidade e performance.', color: 'from-yellow-500 to-yellow-600' },
  { icon: <FaRocket className="w-5 h-5 text-white" />, title: 'Lançamento', desc: 'Publicação e monitoração.', color: 'from-red-500 to-red-600' },
  { icon: <FaHeadset className="w-5 h-5 text-white" />, title: 'Suporte', desc: 'Evolução contínua.', color: 'from-indigo-500 to-indigo-600' },
];

const Process = () => (
  <section className="py-20 bg-gray-50">
    <div className="container px-4">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">Nosso Processo</span>
        <h2 className="text-3xl md:text-4xl font-bold">Como Trabalhamos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} className="bg-white rounded-xl border border-gray-100 shadow p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center mb-4`}>{s.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

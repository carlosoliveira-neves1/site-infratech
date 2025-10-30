"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CTA = () => {
  const contactMethods = [
    { icon: <FaPhoneAlt className="w-6 h-6 text-blue-600" />, title: 'Telefone', value: '(11) 99999-9999', href: 'tel:+5511999999999' },
    { icon: <FaEnvelope className="w-6 h-6 text-blue-600" />, title: 'E-mail', value: 'contato@techvarejo.com.br', href: 'mailto:contato@techvarejo.com.br' },
    { icon: <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />, title: 'Endereço', value: 'São Paulo - SP, Brasil', href: '#' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-600 overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white/90 bg-white/10 rounded-full mb-4">Pronto para Começar?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transforme seu negócio com nossas soluções</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Fale com nossa equipe e receba um orçamento personalizado.</p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100">
              Solicitar Orçamento
              <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/servicos" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((m, i) => (
            <motion.div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">{m.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
              <a href={m.href} className="text-blue-100 hover:text-white transition-colors">{m.value}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;

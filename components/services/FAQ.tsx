"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqItems = [
  { question: 'Quanto tempo leva para desenvolver um aplicativo?', answer: 'Depende da complexidade. Projetos simples: 8-12 semanas. Projetos complexos: 16-24 semanas. Fornecemos um cronograma após a imersão inicial.' },
  { question: 'Quanto custa desenvolver um aplicativo?', answer: 'O valor varia conforme escopo, integrações e prazos. Fazemos orçamento personalizado após entender a sua necessidade.' },
  { question: 'Vocês oferecem manutenção?', answer: 'Sim. Temos planos de suporte com atualizações, correções e evolução contínua.' },
  { question: 'Trabalham apenas com varejo?', answer: 'Somos especialistas em varejo, mas atendemos empresas de diversos setores.' },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-3">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold">Perguntas mais comuns</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center" onClick={() => setActive(active === i ? null : i)}>
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {active === i ? <FaChevronUp className="w-5 h-5 text-blue-600" /> : <FaChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <div className="px-6 pb-5 text-gray-600">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

"use client";
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials: Array<{
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}> = [];

const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Histórias reais de transformação com nossas soluções.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} className="bg-white rounded-xl shadow p-8 border border-gray-100 relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="absolute top-8 left-8 text-blue-100 text-4xl"><FaQuoteLeft /></div>
              <p className="text-gray-700 mb-6 relative z-10">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, j) => (<FaStar key={j} className={`w-5 h-5 ${j < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} />))}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

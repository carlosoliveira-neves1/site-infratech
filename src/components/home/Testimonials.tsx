import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Diretor de TI - Varejo Mais',
    content: 'A TechVarejo revolucionou nossa operação com um aplicativo personalizado que aumentou em 40% nossas vendas online.',
    rating: 5,
    image: '/testimonials/1.jpg'
  },
  {
    id: 2,
    name: 'Ana Paula Mendes',
    role: 'Gerente de E-commerce - Moda Total',
    content: 'A integração do nosso ERP com o marketplace foi impecável. Agora temos controle total do estoque em tempo real.',
    rating: 5,
    image: '/testimonials/2.jpg'
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    role: 'CEO - Supermercado Preço Bom',
    content: 'O sistema de gestão desenvolvido pela TechVarejo nos proporcionou uma visão completa do negócio e melhorou nossa eficiência operacional.',
    rating: 5,
    image: '/testimonials/3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira o que nossos clientes têm a dizer sobre nossos serviços e como ajudamos a transformar seus negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="absolute top-8 left-8 text-blue-100 text-4xl">
                <FaQuoteLeft />
              </div>
              
              <div className="pt-6">
                <p className="text-gray-700 mb-6 relative z-10">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-4 overflow-hidden">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white"></div>
              ))}
              <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +50
              </div>
            </div>
            <p className="text-gray-700 font-medium">
              Mais de 50 clientes satisfeitos em todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

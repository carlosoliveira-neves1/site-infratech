import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CTA = () => {
  const contactMethods = [
    {
      icon: <FaPhoneAlt className="w-6 h-6 text-primary" />,
      title: 'Telefone',
      value: '(11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary" />,
      title: 'E-mail',
      value: 'contato@techvarejo.com.br',
      href: 'mailto:contato@techvarejo.com.br'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
      title: 'Endereço',
      value: 'São Paulo - SP, Brasil',
      href: '#'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-white/20 text-white rounded-full mb-4">
            Pronto para Começar?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforme seu negócio com nossas soluções em tecnologia
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e desenvolver a solução ideal para o seu negócio.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/contato" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Solicitar Orçamento
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/servicos" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <a 
                href={method.href} 
                className="text-blue-100 hover:text-white transition-colors"
              >
                {method.value}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-6">Tem alguma dúvida? Estamos aqui para ajudar!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.498 14.382a2.5 2.5 0 01-2.5 2.5h-1.5v1.5a2.5 2.5 0 01-2.5 2.5H5.5a2.5 2.5 0 01-2.5-2.5v-5.5a2.5 2.5 0 012.5-2.5h1.5v-1.5a2.5 2.5 0 012.5-2.5h5.5a2.5 2.5 0 012.5 2.5v5.5z" fillRule="evenodd" clipRule="evenodd"></path>
                <path d="M18.5 5.5a2.5 2.5 0 00-2.5-2.5h-5.5a2.5 2.5 0 00-2.5 2.5v1.5h1.5a2.5 2.5 0 012.5 2.5v1.5h1.5a2.5 2.5 0 012.5-2.5h1.5v-1.5z" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              WhatsApp
            </a>
            <a 
              href="mailto:contato@techvarejo.com.br" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

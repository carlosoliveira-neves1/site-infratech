import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqItems = [
  {
    question: 'Quanto tempo leva para desenvolver um aplicativo?',
    answer: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Aplicativos mais simples podem ficar prontos em 2-3 meses, enquanto soluções mais complexas podem levar de 4 a 6 meses. Após uma análise detalhada das necessidades do seu projeto, forneceremos um cronograma personalizado.'
  },
  {
    question: 'Quanto custa desenvolver um aplicativo?',
    answer: 'O custo varia de acordo com as funcionalidades, complexidade e tempo de desenvolvimento. Desenvolvemos orçamentos personalizados após entender suas necessidades específicas. Entre em contato para uma avaliação gratuita do seu projeto.'
  },
  {
    question: 'Vocês oferecem manutenção após o lançamento?',
    answer: 'Sim, oferecemos pacotes de manutenção contínua que incluem atualizações, correções de bugs, suporte técnico e melhorias contínuas. A manutenção é essencial para garantir o bom funcionamento e a segurança do seu aplicativo.'
  },
  {
    question: 'Como é feita a hospedagem dos sistemas desenvolvidos?',
    answer: 'Utilizamos serviços de hospedagem em nuvem confiáveis e escaláveis, como AWS, Google Cloud ou Azure, dependendo das necessidades do seu projeto. Garantimos alta disponibilidade, segurança e desempenho para sua aplicação.'
  },
  {
    question: 'Vocês desenvolvem apenas para o varejo?',
    answer: 'Embora sejamos especializados em soluções para o varejo, nossa equipe tem experiência em diversos segmentos. Desenvolvemos soluções personalizadas para empresas de diferentes portes e setores, sempre adaptando nossa abordagem às necessidades específicas de cada cliente.'
  },
  {
    question: 'Como é o processo de desenvolvimento?',
    answer: 'Nosso processo segue as melhores práticas do mercado, incluindo: levantamento de requisitos, prototipagem, desenvolvimento, testes, lançamento e manutenção. Trabalhamos com metodologias ágeis, mantendo você informado em todas as etapas e garantindo total transparência no processo.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-blue-50 rounded-full mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas mais comuns
            </h2>
            <p className="text-lg text-gray-600">
              Encontre respostas para as principais dúvidas sobre nossos serviços e processos.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  {activeIndex === index ? (
                    <FaChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <a 
              href="/contato" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

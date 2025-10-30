"use client";
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const features = [
  { icon: <FaUsers className="w-6 h-6 text-blue-600" />, title: 'Equipe Especializada', description: 'Profissionais com experiência em varejo.' },
  { icon: <FaChartLine className="w-6 h-6 text-blue-600" />, title: 'Foco em Resultados', description: 'Soluções com impacto real no negócio.' },
  { icon: <FaLightbulb className="w-6 h-6 text-blue-600" />, title: 'Inovação', description: 'Boas práticas e tecnologias atuais.' },
];

const About = () => (
  <section id="sobre" className="py-20 bg-gray-50">
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">TechVarejo em Ação</span>
            </div>
          </div>
        </motion.div>
        <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full mb-4">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Especialistas em Tecnologia para o Varejo</h2>
          <p className="text-lg text-gray-600 mb-8">Combinamos tecnologia e conhecimento do varejo para criar soluções que impulsionam crescimento.</p>
          <ul className="space-y-4 mb-8">
            {['5+ anos de mercado', 'Projetos no Brasil inteiro', 'Resultados mensuráveis', 'Atendimento próximo'].map((item, i) => (
              <li key={i} className="flex items-start"><FaCheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" /><span className="text-gray-700">{item}</span></li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-xl shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Aplicativos Móveis', href: '/servicos#mobile-apps' },
    { name: 'Web Apps', href: '/servicos#web-apps' },
    { name: 'Soluções para Varejo', href: '/servicos#retail' },
    { name: 'Integrações', href: '/servicos#integrations' },
  ];

  const company = [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carreiras', href: '/carreiras' },
  ];

  const contact = [
    { name: 'comercial@infratechnologia.com.br', href: 'mailto:comercial@infratechnologia.com.br' },
    { name: '(11) 98648-9257', href: 'tel:+5511986489257' },
    {
      name: 'R. Mauro de Araújo Ribeiro, 565 - Cidade D\'Abril, São Paulo - SP, 05182-000',
      href: 'https://maps.google.com/?q=R.+Mauro+de+Ara%C3%BAjo+Ribeiro,+565+-+Cidade+D%27Abril,+S%C3%A3o+Paulo+-+SP,+05182-000',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: 'https://facebook.com/infratech' },
    { icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com/infratech' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/infratech' },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: 'https://wa.me/5511999999999' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Infratech</h3>
            <p className="text-gray-400 mb-4">
              Soluções tecnológicas inovadoras para o varejo digital. Transformamos ideias em realidade.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Rede social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Infratech. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

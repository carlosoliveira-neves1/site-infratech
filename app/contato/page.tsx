import type { Metadata } from "next";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contato | Infratech",
  description:
    "Entre em contato com a Infratech e descubra como podemos impulsionar o seu varejo com tecnologia sob medida.",
};

const contactMethods = [
  {
    icon: <FaPhoneAlt className="w-5 h-5 text-blue-600" />,
    label: "Telefone",
    value: "(11) 98648-9257",
    href: "tel:+5511986489257",
  },
  {
    icon: <FaEnvelope className="w-5 h-5 text-blue-600" />,
    label: "E-mail",
    value: "comercial@infratechnologia.com.br",
    href: "mailto:comercial@infratechnologia.com.br",
  },
  {
    icon: <FaWhatsapp className="w-5 h-5 text-blue-600" />,
    label: "WhatsApp",
    value: "+55 11 98648-9257",
    href: "https://wa.me/5511986489257",
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />,
    label: "Endereço",
    value:
      "R. Mauro de Araújo Ribeiro, 565 - Cidade D'Abril, São Paulo - SP, 05182-000",
    href: "https://maps.google.com/?q=R.+Mauro+de+Ara%C3%BAjo+Ribeiro,+565+-+Cidade+D%27Abril,+S%C3%A3o+Paulo+-+SP,+05182-000",
  },
  {
    icon: <FaClock className="w-5 h-5 text-blue-600" />,
    label: "Horário de atendimento",
    value: "Segunda a sexta das 9h às 18h",
  },
];

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative py-20">
        <div className="container px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Estamos prontos para ajudar
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vamos conversar sobre o futuro digital da sua empresa
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Envie uma mensagem ou fale com um de nossos especialistas. Retornamos em
              até um dia útil com uma proposta personalizada para o seu varejo.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white shadow-xl rounded-3xl p-10 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Envie seu projeto
            </h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              action="mailto:comercial@infratechnologia.com.br"
              method="post"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  E-mail corporativo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="nome@empresa.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="(11) 90000-0000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Como podemos ajudar?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Conte um pouco sobre o seu projeto, desafios, metas e prazos."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 transition-transform hover:bg-blue-700 hover:-translate-y-0.5"
                >
                  Enviar mensagem
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Preferiu outro canal? Você também pode nos enviar um e-mail direto em
                  <Link
                    href="mailto:comercial@infratechnologia.com.br"
                    className="text-blue-600 font-semibold ml-1"
                  >
                    comercial@infratechnologia.com.br
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Canais diretos</h2>
              <ul className="space-y-5">
                {contactMethods.map((method) => (
                  <li key={method.label} className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-base text-blue-600 hover:text-blue-700 transition-colors"
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-base text-gray-600">{method.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="Localização Infratech"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.688269361256!2d-46.75502192373802!3d-23.57881236278042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefe2956163e9d%3A0xbf87b8b90127da3f!2sR.%20Mauro%20de%20Ara%C3%BAjo%20Ribeiro%2C%20565%20-%20Cidade%20D&#39;Abril%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005182-000!5e0!3m2!1spt-BR!2sbr!4v1730559000000!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 border-0"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

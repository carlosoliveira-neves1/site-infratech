"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+5511986489257";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as soluções da Infratech."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 text-white shadow-lg px-4 sm:px-5 py-3 hover:bg-green-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-200"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

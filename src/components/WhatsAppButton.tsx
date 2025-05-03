
import { WhatsappIcon } from "./Icons";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5517996779156"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;

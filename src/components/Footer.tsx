
import { Phone, Mail, MapPin, Home, Briefcase, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-caixa-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Entre em contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+5517996779156" className="hover:text-caixa-orange">
                  (17) 99677-9156
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:contato@agilefinanciamentos.com.br" className="hover:text-caixa-orange">
                  contato@agilefinanciamentos.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Av. Navarro de Andrade, 937<br />
                  Centro, Santa Fé do Sul - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center hover:text-caixa-orange">
                  <Home size={16} className="mr-2" /> Início
                </a>
              </li>
              <li>
                <a href="/servicos" className="flex items-center hover:text-caixa-orange">
                  <Briefcase size={16} className="mr-2" /> Nossos Serviços
                </a>
              </li>
              <li>
                <a href="/sobre" className="flex items-center hover:text-caixa-orange">
                  <CreditCard size={16} className="mr-2" /> Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="flex items-center hover:text-caixa-orange">
                  <Phone size={16} className="mr-2" /> Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Horário de atendimento */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de atendimento</h3>
            <p className="mb-4">Segunda a Sexta: 8h às 18h</p>
            <p className="mb-4">Sábados: 8h às 12h</p>
            <a 
              href="https://wa.me/5517996779156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-caixa-orange hover:bg-white hover:text-caixa-orange px-4 py-2 rounded-md transition-colors duration-300"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Agile - Assessoria de Financiamentos Imobiliários. Todos os direitos reservados.</p>
          <p className="mt-2">Correspondente Bancário da Caixa Econômica Federal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

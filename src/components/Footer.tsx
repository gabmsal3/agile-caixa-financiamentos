
import { Phone, Mail, MapPin, Home, Briefcase, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useTextsStore } from '@/data/siteTexts';

const Footer = () => {
  const { texts, contactInfo } = useTextsStore();
  
  const contatoText = texts.find(t => t.id === 'footerContato') || { title: '', description: '' };
  const linksText = texts.find(t => t.id === 'footerLinks') || { title: '', description: '' };
  const horarioText = texts.find(t => t.id === 'footerHorario') || { title: '', description: '' };

  return (
    <footer className="bg-caixa-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">{contatoText.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="hover:text-caixa-orange">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-caixa-orange">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.line2}
                </span>
              </li>
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">{linksText.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center hover:text-caixa-orange">
                  <Home size={16} className="mr-2" /> Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="flex items-center hover:text-caixa-orange">
                  <Briefcase size={16} className="mr-2" /> Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="flex items-center hover:text-caixa-orange">
                  <CreditCard size={16} className="mr-2" /> Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="flex items-center hover:text-caixa-orange">
                  <Phone size={16} className="mr-2" /> Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário de atendimento */}
          <div>
            <h3 className="text-xl font-bold mb-4">{horarioText.title}</h3>
            <p className="mb-4">Segunda a Sexta: {contactInfo.schedule.weekdays}</p>
            <p className="mb-4">Sábados: {contactInfo.schedule.saturday}</p>
            <a 
              href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`}
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

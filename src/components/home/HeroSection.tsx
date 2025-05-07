
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-section relative text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-title">
              Realize seus sonhos com a Agile Financiamentos
            </h1>
            <p className="text-xl mb-8 hero-description">
              Correspondente bancário da Caixa Econômica Federal, oferecendo as melhores soluções em financiamento habitacional, consórcios e empréstimos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
              <Link to="/servicos">
                <Button className="bg-caixa-orange hover:bg-white hover:text-caixa-orange text-white px-8 py-3 rounded-md text-lg">
                  Conhecer Serviços
                </Button>
              </Link>
              <a 
                href="https://wa.me/5517996779156" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-caixa-blue hover:bg-caixa-orange hover:text-white px-8 py-3 rounded-md text-lg">
                  Falar pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 hero-card">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-caixa-blue text-xl font-bold mb-4">Solicite uma simulação gratuita</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="text-caixa-orange mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Sem compromisso e sem burocracia</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-caixa-orange mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-caixa-orange mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>As melhores taxas do mercado</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-caixa-orange mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Acompanhamento completo do processo</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/5517996779156?text=Olá, gostaria de solicitar uma simulação"
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 block"
              >
                <Button className="w-full bg-caixa-orange hover:bg-caixa-blue text-white">
                  Solicitar Simulação
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

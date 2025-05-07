import { Link } from 'react-router-dom';
import { Home, CreditCard, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PartnersCarousel from '@/components/PartnersCarousel';

const Index = () => {
  const services = [
    {
      title: "Financiamento Habitacional",
      description: "Realizamos o sonho da casa própria com as melhores condições.",
      icon: Home,
      benefits: [
        "Minha Casa Minha Vida",
        "SBPE",
        "Taxas reduzidas",
        "Financiamento de até 80% do valor"
      ]
    },
    {
      title: "Consórcios",
      description: "Consórcios para diversos objetivos sem juros e com parcelas que cabem no seu bolso.",
      icon: Briefcase,
      benefits: [
        "Imóveis",
        "Veículos",
        "Serviços",
        "Planos flexíveis"
      ]
    },
    {
      title: "Empréstimos",
      description: "Soluções financeiras para suas necessidades pessoais e empresariais.",
      icon: CreditCard,
      benefits: [
        "Consignado",
        "Pessoal",
        "Rápida aprovação",
        "Melhores taxas do mercado"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-24">
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

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-caixa-blue mb-2">Nossos Serviços</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Trabalhamos com soluções financeiras completas para você realizar seus sonhos com segurança e tranquilidade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  benefits={service.benefits}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button className="bg-caixa-blue hover:bg-caixa-orange text-white">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Por que nos escolher */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-caixa-blue mb-2">Por que escolher a Agile?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Somos especialistas em financiamentos e oferecemos um serviço completo para você.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-caixa-blue">Credibilidade</h3>
              <p className="text-gray-600">Correspondente oficial da Caixa Econômica Federal.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-caixa-blue">Agilidade</h3>
              <p className="text-gray-600">Processos rápidos e sem burocracia.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-caixa-blue">Atendimento</h3>
              <p className="text-gray-600">Atendimento personalizado e consultoria completa.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-caixa-blue">Melhores Taxas</h3>
              <p className="text-gray-600">Condições especiais e taxas competitivas.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Carousel */}
      <PartnersCarousel />
      
      {/* CTA Section */}
      <section className="py-16 bg-caixa-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para realizar seus sonhos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco agora mesmo e descubra como podemos ajudar você a conquistar seus objetivos financeiros.
          </p>
          <a 
            href="https://wa.me/5517996779156" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-caixa-orange hover:bg-caixa-blue hover:text-white px-8 py-3 text-lg">
              Fale Conosco pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

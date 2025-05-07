
import { Link } from 'react-router-dom';
import { Home, CreditCard, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
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
  );
};

export default ServicesSection;

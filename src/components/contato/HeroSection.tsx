
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Estamos prontos para ajudar você a encontrar a melhor solução financeira para suas necessidades.
        </p>
        <Button 
          asChild
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <a
            href="https://wa.me/5517996779156"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

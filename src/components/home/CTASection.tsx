
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;

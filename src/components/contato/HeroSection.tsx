
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useTextsStore } from '@/data/siteTexts';

const HeroSection = () => {
  const { texts, contactInfo } = useTextsStore();
  const heroText = texts.find(t => t.id === 'contatoHero') || { title: '', description: '' };

  return (
    <section className="bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{heroText.title}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          {heroText.description}
        </p>
        <Button 
          asChild
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <a
            href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`}
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


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PartnersCarousel from '@/components/PartnersCarousel';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Serviços */}
      <ServicesSection />
      
      {/* Por que nos escolher */}
      <FeaturesSection />
      
      {/* Partners Carousel */}
      <PartnersCarousel />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;

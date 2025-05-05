
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/contato/HeroSection';
import ContactInfo from '@/components/contato/ContactInfo';
import ContactForm from '@/components/contato/ContactForm';
import MapSection from '@/components/contato/MapSection';

const ContatoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      <HeroSection />
      
      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <MapSection />
      
      <Footer />
    </div>
  );
};

export default ContatoPage;

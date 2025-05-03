
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    servico: 'financiamento'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando envio do formulário
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
      servico: 'financiamento'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos prontos para ajudar você a encontrar a melhor solução financeira para suas necessidades.
          </p>
        </div>
      </section>
      
      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-caixa-blue mb-6">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-caixa-blue flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-caixa-blue mb-2">Telefone / WhatsApp</h3>
                    <p className="text-gray-700 mb-1">(17) 99677-9156</p>
                    <p className="text-gray-500 text-sm">Atendimento de segunda a sexta, das 8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-caixa-blue flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-caixa-blue mb-2">E-mail</h3>
                    <p className="text-gray-700 mb-1">contato@agilefinanciamentos.com.br</p>
                    <p className="text-gray-500 text-sm">Respondemos em até 24 horas úteis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-caixa-blue flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-caixa-blue mb-2">Endereço</h3>
                    <p className="text-gray-700">
                      Av. Navarro de Andrade, 937<br />
                      Centro, Santa Fé do Sul - SP
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-caixa-blue mb-4">Horário de Atendimento</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700 font-medium">Segunda a Sexta</td>
                      <td className="py-3 text-gray-700">8h às 18h</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-700 font-medium">Sábado</td>
                      <td className="py-3 text-gray-700">8h às 12h</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 font-medium">Domingo</td>
                      <td className="py-3 text-gray-700">Fechado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-10">
                <a
                  href="https://wa.me/5517996779156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945l-1.696 6.195 6.339-1.662c1.733.943 3.687 1.443 5.688 1.443h.005c6.389-.001 12.22-4.056 14.934-10.123 2.987-6.663-1.457-14.077-6.446-17.242zm-9.122 22.121h-.004c-1.77 0-3.507-.473-5.011-1.366l-.36-.214-3.718.975 1.001-3.645-.235-.374c-.978-1.55-1.493-3.343-1.493-5.183C1.578 6.727 7.322 1.014 15.405 1.014c4.573 0 8.304 1.763 10.902 4.92 2.598 3.157 3.222 7.205 1.76 11.002-2.032 5.332-7.873 8.633-13.358 8.634z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-caixa-blue mb-6">Envie-nos uma mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviço de interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="financiamento">Financiamento Habitacional</option>
                      <option value="consorcio">Consórcio</option>
                      <option value="emprestimo">Empréstimo</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-caixa-orange hover:bg-caixa-blue text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-caixa-blue mb-8">Nossa Localização</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0215318313544!2d-50.926121085134536!3d-19.757652686681802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490ca80a754f017%3A0xc21091a9a0feae06!2sAv.%20Navarro%20de%20Andrade%2C%20937%20-%20Centro%2C%20Santa%20F%C3%A9%20do%20Sul%20-%20SP%2C%2015775-000!5e0!3m2!1spt-BR!2sbr!4v1651845252369!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa de localização da Agile Financiamentos"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContatoPage;

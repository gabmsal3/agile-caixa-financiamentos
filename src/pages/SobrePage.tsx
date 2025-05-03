
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const SobrePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre a Agile Financiamentos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça nossa história, missão e por que somos o parceiro ideal para realizar seus projetos.
          </p>
        </div>
      </section>
      
      {/* Sobre Nós */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-caixa-blue mb-4">Quem Somos</h2>
              <p className="text-gray-700 mb-4">
                A Agile Financiamentos é um correspondente bancário oficial da Caixa Econômica Federal, especializado em financiamentos imobiliários, consórcios e empréstimos.
              </p>
              <p className="text-gray-700 mb-4">
                Com anos de experiência no mercado financeiro, nossa empresa se destaca pelo atendimento personalizado, agilidade nos processos e transparência em todas as etapas.
              </p>
              <p className="text-gray-700">
                Ajudamos nossos clientes a realizarem seus sonhos com segurança e tranquilidade, oferecendo as melhores soluções financeiras do mercado.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-caixa-blue mb-4">Nossa Missão</h3>
              <p className="text-gray-700 mb-6">
                Facilitar o acesso a soluções financeiras para pessoas e empresas, com atendimento humanizado e personalizado.
              </p>
              
              <h3 className="text-2xl font-bold text-caixa-blue mb-4">Nossa Visão</h3>
              <p className="text-gray-700 mb-6">
                Ser referência em assessoria financeira, ajudando nossos clientes a realizarem seus sonhos e objetivos.
              </p>
              
              <h3 className="text-2xl font-bold text-caixa-blue mb-4">Nossos Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-caixa-orange font-bold mr-2">•</span>
                  <span>Transparência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caixa-orange font-bold mr-2">•</span>
                  <span>Comprometimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caixa-orange font-bold mr-2">•</span>
                  <span>Excelência no atendimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caixa-orange font-bold mr-2">•</span>
                  <span>Confiança e segurança</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Por que nos escolher */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-caixa-blue mb-12">Por que escolher a Agile?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-caixa-blue">Credibilidade</h3>
              <p className="text-gray-600">
                Somos correspondentes oficiais da Caixa Econômica Federal, um dos maiores e mais respeitados bancos do Brasil.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-caixa-blue">Agilidade</h3>
              <p className="text-gray-600">
                Processos ágeis e eficientes, com redução de burocracia e acompanhamento passo a passo de todo o seu processo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-caixa-blue mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-caixa-blue">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Cada cliente é único. Oferecemos atendimento personalizado e soluções sob medida para cada necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossa Parceria com a Caixa */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-caixa-blue mb-4">Nossa Parceria com a Caixa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como correspondente bancário oficial da Caixa Econômica Federal, trazemos o que há de melhor em soluções financeiras para você.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img 
                  src="/lovable-uploads/5e660417-71dd-4aa2-81c8-ce29b02d0464.png" 
                  alt="Agile Financiamentos" 
                  className="h-16 mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-3xl font-bold text-caixa-blue">+</div>
                <div className="mx-4 h-12 w-12 bg-caixa-blue rounded-md flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-xl">CAIXA</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Como correspondente bancário da Caixa Econômica Federal, a Agile Financiamentos está autorizada a prestar serviços bancários básicos, incluindo:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold text-caixa-blue mb-2">Para você:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Financiamentos habitacionais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Consórcios para diversos objetivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Empréstimos pessoais e consignados</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold text-caixa-blue mb-2">Vantagens da parceria:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Acesso às melhores condições do mercado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Facilidade e agilidade nos processos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-caixa-orange font-bold mr-2">•</span>
                      <span>Confiança e segurança da maior instituição financeira do país</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-caixa-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos conversar sobre seus projetos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para conhecer melhor nossos serviços e como podemos ajudar você a realizar seus objetivos.
          </p>
          <div className="flex justify-center space-x-4 flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5517996779156" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-caixa-orange hover:bg-caixa-blue hover:text-white px-8 py-3 text-lg w-full sm:w-auto">
                Fale Conosco pelo WhatsApp
              </Button>
            </a>
            <a href="/contato">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-caixa-orange px-8 py-3 text-lg w-full sm:w-auto">
                Mais Formas de Contato
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SobrePage;

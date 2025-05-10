
import { Home, Briefcase, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTextsStore } from '@/data/siteTexts';

const ServicosPage = () => {
  const { texts, serviceItems, contactInfo } = useTextsStore();
  const heroText = texts.find(t => t.id === 'servicosHero') || { title: '', description: '' };
  const financiamentoText = texts.find(t => t.id === 'servicosFinanciamento') || { title: '', description: '' };
  const consorciosText = texts.find(t => t.id === 'servicosConsorcios') || { title: '', description: '' };
  const emprestimosText = texts.find(t => t.id === 'servicosEmprestimos') || { title: '', description: '' };
  
  const financiamentoItems = serviceItems.find(g => g.id === 'financiamentoItems')?.items || [];
  const consorciosItems = serviceItems.find(g => g.id === 'consorciosItems')?.items || [];
  const emprestimosItems = serviceItems.find(g => g.id === 'emprestimosItems')?.items || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-caixa-blue to-caixa-lightBlue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{heroText.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {heroText.description}
          </p>
        </div>
      </section>
      
      {/* Serviços */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Financiamento Habitacional */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-caixa-blue flex items-center justify-center mr-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-caixa-blue">{financiamentoText.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {financiamentoText.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {financiamentoItems.map((item, index) => (
                <div 
                  key={`financiamento-${index}`} 
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                    index % 2 === 0 ? 'border-caixa-blue' : 'border-caixa-orange'
                  }`}
                >
                  <h3 className="text-xl font-bold text-caixa-blue mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((listItem, idx) => (
                      <li key={`financiamento-${index}-item-${idx}`} className="flex items-start">
                        <span className="text-caixa-orange font-bold mr-2">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Documentos necessários para financiamento
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li>Documentos pessoais (RG e CPF)</li>
                    <li>Comprovante de renda</li>
                    <li>Comprovante de residência</li>
                    <li>Imposto de Renda (se declarante)</li>
                    <li>Documentação do imóvel a ser financiado</li>
                    <li>Certidão de estado civil</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Como funciona o processo de financiamento?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 text-gray-700 pl-4 list-decimal">
                    <li>Simulação inicial para verificar capacidade de pagamento</li>
                    <li>Envio da documentação necessária</li>
                    <li>Análise de crédito pela Caixa</li>
                    <li>Avaliação do imóvel</li>
                    <li>Aprovação do financiamento</li>
                    <li>Assinatura do contrato</li>
                    <li>Liberação do recurso</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Consórcios */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-caixa-blue flex items-center justify-center mr-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-caixa-blue">{consorciosText.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {consorciosText.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {consorciosItems.map((item, index) => (
                <div 
                  key={`consorcio-${index}`} 
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                    index % 2 === 0 ? 'border-caixa-blue' : 'border-caixa-orange'
                  }`}
                >
                  <h3 className="text-xl font-bold text-caixa-blue mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((listItem, idx) => (
                      <li key={`consorcio-${index}-item-${idx}`} className="flex items-start">
                        <span className="text-caixa-orange font-bold mr-2">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Como funciona o consórcio?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    O consórcio é um sistema de compra programada, onde um grupo de pessoas se reúne com o objetivo de formar poupança comum destinada à aquisição de bens ou serviços. Mensalmente, os participantes contribuem com parcelas que formam um fundo comum. Por meio de sorteios ou lances, os participantes são contemplados e podem utilizar o crédito para adquirir o bem ou serviço desejado.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Vantagens do consórcio
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li>Sem juros, apenas taxa de administração</li>
                    <li>Parcelas que cabem no seu orçamento</li>
                    <li>Possibilidade de utilizar o FGTS (para imóveis)</li>
                    <li>Planejamento financeiro a longo prazo</li>
                    <li>Possibilidade de antecipar a contemplação através de lances</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Empréstimos */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-caixa-blue flex items-center justify-center mr-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-caixa-blue">{emprestimosText.title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {emprestimosText.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {emprestimosItems.map((item, index) => (
                <div 
                  key={`emprestimo-${index}`} 
                  className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                    index % 2 === 0 ? 'border-caixa-blue' : 'border-caixa-orange'
                  }`}
                >
                  <h3 className="text-xl font-bold text-caixa-blue mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((listItem, idx) => (
                      <li key={`emprestimo-${index}-item-${idx}`} className="flex items-start">
                        <span className="text-caixa-orange font-bold mr-2">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Documentos necessários para empréstimo
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-700 pl-4">
                    <li>Documentos pessoais (RG e CPF)</li>
                    <li>Comprovante de residência</li>
                    <li>Comprovante de renda</li>
                    <li>Para consignado: contracheque ou extrato de benefício</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-caixa-blue font-medium">
                  Condições e taxas
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    As taxas e condições variam conforme o tipo de empréstimo, perfil do cliente e valores solicitados. Entre em contato conosco para uma simulação personalizada de acordo com suas necessidades.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-caixa-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para avançar com seu projeto?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato agora mesmo e descubra como podemos ajudar você a conquistar seus objetivos.
          </p>
          <a 
            href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}?text=Olá, gostaria de mais informações sobre os serviços`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-caixa-orange hover:bg-caixa-blue hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicosPage;

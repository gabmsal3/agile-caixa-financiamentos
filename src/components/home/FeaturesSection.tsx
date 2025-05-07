
const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;

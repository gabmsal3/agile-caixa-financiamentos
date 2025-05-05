
const MapSection = () => {
  return (
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
  );
};

export default MapSection;

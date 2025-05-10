
// Arquivo para armazenar os textos editáveis do site
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SiteText {
  id: string;
  section: string;
  title?: string;
  description?: string;
  buttonText?: string;
  content?: string;
}

// Interface específica para informações de contato
export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// Interface para os itens dos serviços
export interface ServiceItem {
  title: string;
  items: string[];
}

export interface ServiceItemGroup {
  id: string;
  section: string;
  title: string;
  items: ServiceItem[];
}

export const defaultContactInfo: ContactInfo = {
  email: "contato@agilefinanciamentos.com.br",
  phone: "(17) 99677-9156",
  address: {
    line1: "Av. Navarro de Andrade, 937",
    line2: "Centro, Santa Fé do Sul - SP"
  },
  schedule: {
    weekdays: "8h às 18h",
    saturday: "8h às 12h",
    sunday: "Fechado"
  }
};

export const defaultServiceItems: ServiceItemGroup[] = [
  {
    id: "financiamentoItems",
    section: "Serviços - Financiamento Itens",
    title: "Financiamento Habitacional",
    items: [
      {
        title: "Minha Casa Minha Vida",
        items: [
          "Subsídios de até R$ 55.000,00",
          "Financiamento de até 80% do valor do imóvel",
          "Taxa de juros reduzida",
          "Até 35 anos para pagar"
        ]
      },
      {
        title: "SBPE",
        items: [
          "Para imóveis de maior valor",
          "Financiamento de até 80% do valor do imóvel",
          "Taxas competitivas",
          "Prazos flexíveis"
        ]
      }
    ]
  },
  {
    id: "consorciosItems",
    section: "Serviços - Consórcios Itens",
    title: "Consórcios",
    items: [
      {
        title: "Consórcio de Imóveis",
        items: [
          "Aquisição de casa, apartamento, terreno",
          "Construção e reforma",
          "Sem juros",
          "Prazos de até 200 meses"
        ]
      },
      {
        title: "Consórcio de Veículos",
        items: [
          "Carros, motos, caminhões",
          "Veículos novos ou usados",
          "Sem juros",
          "Prazos flexíveis"
        ]
      },
      {
        title: "Consórcio de Serviços",
        items: [
          "Viagens",
          "Festas e eventos",
          "Cirurgias e tratamentos",
          "Planejamento financeiro"
        ]
      }
    ]
  },
  {
    id: "emprestimosItems",
    section: "Serviços - Empréstimos Itens",
    title: "Empréstimos",
    items: [
      {
        title: "Empréstimo Consignado",
        items: [
          "Para aposentados e pensionistas do INSS",
          "Servidores públicos",
          "As menores taxas do mercado",
          "Desconto em folha"
        ]
      },
      {
        title: "Empréstimo Pessoal",
        items: [
          "Liberação rápida",
          "Taxas competitivas",
          "Prazos flexíveis",
          "Sem necessidade de garantia"
        ]
      }
    ]
  }
];

export const defaultTexts: SiteText[] = [
  // Home Page
  {
    id: 'hero',
    section: 'Home - Hero',
    title: 'Realize seus sonhos com a Agile Financiamentos',
    description: 'Correspondente bancário da Caixa Econômica Federal, oferecendo as melhores soluções em financiamento habitacional, consórcios e empréstimos.',
    buttonText: 'Conhecer Serviços'
  },
  {
    id: 'servicos',
    section: 'Home - Serviços',
    title: 'Nossos Serviços',
    description: 'Trabalhamos com soluções financeiras completas para você realizar seus sonhos com segurança e tranquilidade.'
  },
  {
    id: 'financiamento',
    section: 'Home - Financiamento',
    title: 'Financiamento Habitacional',
    description: 'Realizamos o sonho da casa própria com as melhores condições.'
  },
  {
    id: 'consorcios',
    section: 'Home - Consórcios',
    title: 'Consórcios',
    description: 'Consórcios para diversos objetivos sem juros e com parcelas que cabem no seu bolso.'
  },
  {
    id: 'emprestimos',
    section: 'Home - Empréstimos',
    title: 'Empréstimos',
    description: 'Soluções financeiras para suas necessidades pessoais e empresariais.'
  },
  {
    id: 'porque',
    section: 'Home - Por que escolher',
    title: 'Por que escolher a Agile?',
    description: 'Somos especialistas em financiamentos e oferecemos um serviço completo para você.'
  },
  {
    id: 'cta',
    section: 'Home - CTA',
    title: 'Pronto para realizar seus sonhos?',
    description: 'Entre em contato conosco agora mesmo e descubra como podemos ajudar você a conquistar seus objetivos financeiros.',
    buttonText: 'Fale Conosco pelo WhatsApp'
  },
  {
    id: 'parceiros',
    section: 'Home - Parceiros',
    title: 'Nossos Parceiros',
    description: 'Trabalhamos com os principais programas de financiamento habitacional do país.'
  },
  
  // Serviços Page
  {
    id: 'servicosHero',
    section: 'Serviços - Hero',
    title: 'Nossos Serviços',
    description: 'Conheça as soluções financeiras que oferecemos para ajudar você a realizar seus sonhos.'
  },
  {
    id: 'servicosFinanciamento',
    section: 'Serviços - Financiamento',
    title: 'Financiamento Habitacional',
    description: 'O financiamento habitacional é a solução ideal para quem deseja adquirir um imóvel sem precisar do valor total à vista. Com condições especiais, taxas reduzidas e prazos estendidos, facilitamos a realização do sonho da casa própria.',
    content: 'O financiamento habitacional permite que você adquira seu imóvel pagando parcelas mensais que se adequam ao seu orçamento. Como correspondente da Caixa, trabalhamos com diversas linhas de crédito, incluindo o programa Minha Casa Minha Vida, SBPE e outras modalidades que melhor se encaixam no seu perfil.'
  },
  {
    id: 'servicosConsorcios',
    section: 'Serviços - Consórcios',
    title: 'Consórcios',
    description: 'Os consórcios são uma alternativa econômica para adquirir bens e serviços sem juros, pagando apenas uma taxa de administração. Oferecemos planos personalizados para diferentes objetivos.',
    content: 'Os consórcios são uma opção inteligente para planejamento financeiro de longo prazo, permitindo que você adquira bens como imóveis e veículos ou contrate serviços sem pagar juros. Com parcelas mensais que cabem no seu orçamento, você participa de sorteios e lances para contemplação do seu crédito.'
  },
  {
    id: 'servicosEmprestimos',
    section: 'Serviços - Empréstimos',
    title: 'Empréstimos',
    description: 'Oferecemos diversas modalidades de empréstimos para pessoas físicas e jurídicas, com taxas competitivas e aprovação rápida para atender suas necessidades financeiras.',
    content: 'Nossos empréstimos são a solução ideal para quem precisa de crédito rápido com as melhores condições do mercado. Trabalhamos com empréstimo consignado para servidores públicos, aposentados e pensionistas do INSS, além de empréstimos pessoais para diversas finalidades.'
  },
  
  // Sobre Page
  {
    id: 'sobreHero',
    section: 'Sobre - Hero',
    title: 'Sobre a Agile',
    description: 'Conheça nossa história e nosso compromisso em oferecer as melhores soluções financeiras para você.'
  },
  {
    id: 'sobreHistoria',
    section: 'Sobre - História',
    title: 'Nossa História',
    description: 'A Agile Financiamentos nasceu da visão de facilitar o acesso ao crédito imobiliário e proporcionar uma experiência mais ágil e simples para nossos clientes.',
    content: 'Fundada em 2015, a Agile Financiamentos começou como uma pequena empresa de consultoria financeira em Santa Fé do Sul. Com o tempo, nos especializamos em financiamentos habitacionais e nos tornamos correspondente oficial da Caixa Econômica Federal, ampliando nossa atuação para toda a região. Hoje, somos referência em soluções financeiras, atendendo clientes de diversos municípios com excelência e eficiência.'
  },
  {
    id: 'sobreMissao',
    section: 'Sobre - Missão',
    title: 'Missão',
    description: 'Nossa missão é facilitar o acesso ao crédito imobiliário e proporcionar uma experiência ágil e transparente aos nossos clientes, contribuindo para a realização de seus sonhos.'
  },
  {
    id: 'sobreVisao',
    section: 'Sobre - Visão',
    title: 'Visão',
    description: 'Ser referência regional em soluções financeiras, reconhecida pela excelência no atendimento e pela capacidade de realizar os sonhos de nossos clientes.'
  },
  {
    id: 'sobreValores',
    section: 'Sobre - Valores',
    title: 'Valores',
    description: 'Transparência, compromisso, eficiência, ética e foco no cliente são os valores que norteiam todas as nossas ações.'
  },
  
  // Contato Page
  {
    id: 'contatoHero',
    section: 'Contato - Hero',
    title: 'Entre em Contato',
    description: 'Estamos prontos para ajudar você a encontrar a melhor solução financeira para suas necessidades.'
  },
  {
    id: 'contatoInfo',
    section: 'Contato - Informações',
    title: 'Informações de Contato',
    description: 'Entre em contato conosco pelos canais abaixo ou preencha o formulário para enviar sua mensagem.'
  },
  {
    id: 'contatoForm',
    section: 'Contato - Formulário',
    title: 'Envie uma Mensagem',
    description: 'Preencha o formulário abaixo e entraremos em contato o mais breve possível.',
    buttonText: 'Enviar Mensagem'
  },
  {
    id: 'contatoMapa',
    section: 'Contato - Mapa',
    title: 'Nossa Localização',
    description: 'Visite-nos em nosso escritório e conheça mais sobre nossos serviços.'
  },
  
  // Footer
  {
    id: 'footerContato',
    section: 'Footer - Contato',
    title: 'Entre em contato',
    description: 'Atendimento personalizado para você.'
  },
  {
    id: 'footerLinks',
    section: 'Footer - Links',
    title: 'Links rápidos',
    description: 'Acesse as principais seções do site.'
  },
  {
    id: 'footerHorario',
    section: 'Footer - Horário',
    title: 'Horário de atendimento',
    description: 'Estamos disponíveis para te atender.'
  }
];

// Store para gerenciar os textos do site
interface TextsState {
  texts: SiteText[];
  contactInfo: ContactInfo;
  serviceItems: ServiceItemGroup[];
  updateText: (id: string, updates: Partial<SiteText>) => void;
  updateContactInfo: (updates: Partial<ContactInfo>) => void;
  updateServiceItem: (groupId: string, itemIndex: number, title: string, items: string[]) => void;
  resetToDefaults: () => void;
}

export const useTextsStore = create<TextsState>()(
  persist(
    (set) => ({
      texts: defaultTexts,
      contactInfo: defaultContactInfo,
      serviceItems: defaultServiceItems,
      updateText: (id, updates) => 
        set((state) => ({
          texts: state.texts.map((text) => 
            text.id === id ? { ...text, ...updates } : text
          )
        })),
      updateContactInfo: (updates) =>
        set((state) => ({
          contactInfo: { ...state.contactInfo, ...updates }
        })),
      updateServiceItem: (groupId, itemIndex, title, items) =>
        set((state) => ({
          serviceItems: state.serviceItems.map(group => 
            group.id === groupId 
              ? { 
                  ...group, 
                  items: group.items.map((item, idx) => 
                    idx === itemIndex 
                      ? { title, items } 
                      : item
                  )
                }
              : group
          )
        })),
      resetToDefaults: () => set({ 
        texts: defaultTexts,
        contactInfo: defaultContactInfo,
        serviceItems: defaultServiceItems
      })
    }),
    {
      name: 'agile-site-texts',
    }
  )
);

// Função para obter um texto específico
export const getText = (id: string): SiteText => {
  const allTexts = useTextsStore.getState().texts;
  return allTexts.find(text => text.id === id) || 
    defaultTexts.find(text => text.id === id) || 
    { id, section: '', title: '', description: '' };
};

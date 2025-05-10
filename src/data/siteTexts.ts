
// Arquivo para armazenar os textos editáveis do site
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SiteText {
  id: string;
  section: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export const defaultTexts: SiteText[] = [
  {
    id: 'hero',
    section: 'Hero',
    title: 'Realize seus sonhos com a Agile Financiamentos',
    description: 'Correspondente bancário da Caixa Econômica Federal, oferecendo as melhores soluções em financiamento habitacional, consórcios e empréstimos.',
    buttonText: 'Conhecer Serviços'
  },
  {
    id: 'servicos',
    section: 'Serviços',
    title: 'Nossos Serviços',
    description: 'Trabalhamos com soluções financeiras completas para você realizar seus sonhos com segurança e tranquilidade.'
  },
  {
    id: 'financiamento',
    section: 'Serviço - Financiamento',
    title: 'Financiamento Habitacional',
    description: 'Realizamos o sonho da casa própria com as melhores condições.'
  },
  {
    id: 'consorcios',
    section: 'Serviço - Consórcios',
    title: 'Consórcios',
    description: 'Consórcios para diversos objetivos sem juros e com parcelas que cabem no seu bolso.'
  },
  {
    id: 'emprestimos',
    section: 'Serviço - Empréstimos',
    title: 'Empréstimos',
    description: 'Soluções financeiras para suas necessidades pessoais e empresariais.'
  },
  {
    id: 'porque',
    section: 'Por que escolher',
    title: 'Por que escolher a Agile?',
    description: 'Somos especialistas em financiamentos e oferecemos um serviço completo para você.'
  },
  {
    id: 'cta',
    section: 'CTA',
    title: 'Pronto para realizar seus sonhos?',
    description: 'Entre em contato conosco agora mesmo e descubra como podemos ajudar você a conquistar seus objetivos financeiros.',
    buttonText: 'Fale Conosco pelo WhatsApp'
  }
];

// Store para gerenciar os textos do site
interface TextsState {
  texts: SiteText[];
  updateText: (id: string, updates: Partial<SiteText>) => void;
  resetToDefaults: () => void;
}

export const useTextsStore = create<TextsState>()(
  persist(
    (set) => ({
      texts: defaultTexts,
      updateText: (id, updates) => 
        set((state) => ({
          texts: state.texts.map((text) => 
            text.id === id ? { ...text, ...updates } : text
          )
        })),
      resetToDefaults: () => set({ texts: defaultTexts })
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


import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    servico: 'financiamento'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Em ambiente de produção (quando o formulário for enviado ao servidor)
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        // Criar FormData para enviar ao PHP
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataObj.append(key, value);
        });
        
        // Enviar para o script PHP
        const response = await fetch('enviar-contato.php', {
          method: 'POST',
          body: formDataObj,
        });
        
        if (!response.ok) {
          throw new Error('Erro ao enviar formulário');
        }
        
        const result = await response.json();
        
        if (result.success) {
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
        } else {
          throw new Error(result.message || 'Erro ao processar mensagem');
        }
      } else {
        // Em ambiente de desenvolvimento (simulação)
        console.log('Formulário enviado (simulação):', formData);
        
        toast({
          title: "Mensagem enviada! (simulação)",
          description: "Em ambiente de produção, esta mensagem seria enviada por e-mail.",
        });
        
        // Reset form
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: '',
          servico: 'financiamento'
        });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro!",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

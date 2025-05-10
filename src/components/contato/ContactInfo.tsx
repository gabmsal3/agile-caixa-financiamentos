
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextsStore } from '@/data/siteTexts';

const ContactInfo = () => {
  const { texts, contactInfo } = useTextsStore();
  const infoText = texts.find(t => t.id === 'contatoInfo') || { title: '', description: '' };

  return (
    <div>
      <h2 className="text-3xl font-bold text-caixa-blue mb-6">{infoText.title}</h2>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full bg-caixa-blue flex items-center justify-center mr-4 flex-shrink-0">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-caixa-blue mb-2">Telefone / WhatsApp</h3>
            <p className="text-gray-700 mb-1">{contactInfo.phone}</p>
            <p className="text-gray-500 text-sm">Atendimento de segunda a sexta, das {contactInfo.schedule.weekdays}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full bg-caixa-blue flex items-center justify-center mr-4 flex-shrink-0">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-caixa-blue mb-2">E-mail</h3>
            <p className="text-gray-700 mb-1">{contactInfo.email}</p>
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
              {contactInfo.address.line1}<br />
              {contactInfo.address.line2}
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
              <td className="py-3 text-gray-700">{contactInfo.schedule.weekdays}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 text-gray-700 font-medium">Sábado</td>
              <td className="py-3 text-gray-700">{contactInfo.schedule.saturday}</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-700 font-medium">Domingo</td>
              <td className="py-3 text-gray-700">{contactInfo.schedule.sunday}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-10">
        <Button 
          asChild
          className="w-full bg-green-500 hover:bg-green-600 text-white"
        >
          <a
            href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
